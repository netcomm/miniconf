package miniconf.client

import akka.actor.{ActorSystem}
import java.util.concurrent.TimeUnit
import scala.concurrent.{Await, Future}
import scala.concurrent.duration._
import akka.io.IO
import akka.pattern.ask
import spray.http._
import spray.can.Http
import HttpMethods._
import java.nio.charset.Charset
import akka.util.Timeout
import spray.httpx.RequestBuilding._
import java.lang.String
import scala.Predef.String
import java.util.Calendar
import akka.event.Logging

/**
 * Created by wenzhi.bwz on 14-7-26.
 */
object MiniConfClient {

}

class MiniConfClient(urlParm : String) {
  implicit val system = ActorSystem("miniConfClient")
  private implicit val timeout: Timeout = 5.seconds
  import system.dispatcher

  val timeFormat = new java.text.SimpleDateFormat("yyyyMMdd HH:mm:ss");
  var curValue : String = null

  def saveOneConfItem(groupParm: String, keyParm: String, valueParm: String) : String = {
    val tmpSendStr: String = "{\"group\":\"" + groupParm + "\",\"key\":\"" + keyParm + "\",\"value\":\""+ valueParm + "\", \"timestamp\":\"" + timeFormat.format(Calendar.getInstance.getTime) + "\"}"
    val retValue = Await.result(demoRequestLevelApi_post(urlParm+"/miniConf/saveOneConfItem", tmpSendStr), 3 seconds)
    retValue
  }

  def getOneConfItem(groupParm: String, keyParm: String) : String = {
    val retValue = Await.result(demoRequestLevelApi(urlParm+"/miniConf/getOneConfItem"+"?group="+groupParm+"&key="+keyParm), 3 seconds)
    retValue
  }

  def registerListener(groupParm: String, keyParm: String, callbackParm: String => Unit) {
    system.scheduler.schedule(Duration.create(1000, TimeUnit.MILLISECONDS),
      Duration.create(10 * 1000, TimeUnit.MILLISECONDS))(checkDataModify(groupParm, keyParm,
        callbackParm))
  }

  def checkDataModify(groupParm: String, keyParm: String, callbackParm: String => Unit)
  {
    demoRequestLevelApi(urlParm+"/miniConf/checkDataModify"+"?group="+groupParm+"&key="+keyParm+"&value="+curValue) map {
      case retValue :String =>
        if ("" != retValue)
        {
          curValue = retValue
          callbackParm(retValue)
        }
    } recover {
      case e: Exception =>
    }
  }

  def demoRequestLevelApi(host: String)(implicit system: ActorSystem): Future[String] = {
    import system.dispatcher // execution context for future transformation below

    for {
      response <- IO(Http).ask(HttpRequest(GET, Uri(host))).mapTo[HttpResponse]
      // maybe is spray bug. if use CloseAll then timeout is often occur!!!
      // _ <- IO(Http) ? Http.CloseAll
    } yield {
      if (response.status.intValue == 404)
      {
        throw new Exception(response.entity.data.asString(Charset.forName("UTF-8")))
      }
      response.entity.data.asString(Charset.forName("UTF-8"))
    }
  }

  def demoRequestLevelApi_post(host: String, dataParm : String)(implicit system: ActorSystem): Future[String] = {
    import system.dispatcher // execution context for future transformation below

    for {
      response <-  IO(Http).ask(HttpRequest(POST, Uri(host), Nil, HttpEntity(MediaTypes.`application/json`, dataParm))).mapTo[HttpResponse]
      // maybe is spray bug. if use CloseAll then timeout is often occur!!!
      // _ <- IO(Http) ? Http.CloseAll
    } yield {
      if (response.status.intValue == 404)
      {
        throw new Exception(response.entity.data.asString(Charset.forName("UTF-8")))
      }
      response.entity.data.asString(Charset.forName("UTF-8"))
    }
  }
}
