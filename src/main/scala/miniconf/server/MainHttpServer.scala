package miniconf.server


import akka.pattern.ask
import akka.util.Timeout

import akka.actor._
import spray.can.Http
import spray.http._
import HttpMethods._
import MediaTypes._
import java.nio.charset.Charset
import spray.json.{JsonParser, DefaultJsonProtocol}
import miniconf.server.persistence.{MiniConfPersistView, MiniConfPersistActor}
import spray.http.HttpRequest
import scala.Some
import spray.http.HttpResponse

import spray.json._
import java.util.Calendar
import akka.persistence.Update

/**
 * Created by wenzhi.bwz on 14-7-17.
 */
object ServerService
{
  case class OneConfItem(group: String, key: String, value: String, timestamp: String)
  case class RetrieveOneConfItem(group: String, key: String)
  case class CheckDataModify(group: String, key: String, value: String)
  case class GetPagination(curPageNum: String, searchGroup: String, searchKey: String)
  case class PaginationInfo(totalPageNum: Int, oneBatchItems: List[Array[String]])
  case class DeleteOneItem(group: String, key: String)
}

object ConfItemProtocol extends DefaultJsonProtocol {
  import ServerService._
  implicit val oneConfItemFormat = jsonFormat4(OneConfItem)
}

object PaginationInfoProtocol extends DefaultJsonProtocol {
  import ServerService._
  implicit val onePaginationInfoFormat = jsonFormat2(PaginationInfo)
}

class ServerService extends Actor with ActorLogging
{
  import ServerService._
  import ConfItemProtocol._
  import MiniConfPersistActor._
  import scala.concurrent.duration._
  import context.dispatcher
  import PaginationInfoProtocol._

  val miniConfPersistActor = context.actorOf(Props[MiniConfPersistActor], "miniConfPersistActor")
  val miniConfPersistViewActor = context.actorOf(Props[MiniConfPersistView], "MiniConfPersistViewActor")

  implicit val retrieveOneConfItemTimeout = Timeout(3 seconds)

  val timeFormat = new java.text.SimpleDateFormat("yyyyMMdd HH:mm:ss")

  def receive = {
    // when a new connection comes in we register ourselves as the connection handler
    case _: Http.Connected => sender ! Http.Register(self)

    case HttpRequest(POST, Uri.Path("/miniConf/saveOneConfItem"), _, entity: HttpEntity.NonEmpty, _) =>
      saveOneConfItem(JsonParser(entity.data.asString(Charset.forName("UTF-8"))).convertTo[OneConfItem],
        sender)

    case req @HttpRequest(GET, Uri.Path("/miniConf/saveOneConfItem"), _, _, _) =>
      val tmpCurTime = Calendar.getInstance().getTime()
      saveOneConfItem(OneConfItem(req.uri.query.get("group").get, req.uri.query.get("key").get,
        req.uri.query.get("value").get, timeFormat.format(tmpCurTime)), sender)

    case req @HttpRequest(GET, Uri.Path("/miniConf/getOneConfItem"), _, _, _) =>
      retrieveOneConfItem(req.uri.query.get("group").get, req.uri.query.get("key").get, sender)

    case req @HttpRequest(GET, Uri.Path("/miniConf/checkDataModify"), _, _, _) =>
      checkDataModify(req.uri.query.get("group").get, req.uri.query.get("key").get,
        req.uri.query.get("value").get, sender)

    case req @HttpRequest(GET, Uri.Path("/miniConf/getCurPagination"), _, _, _) =>
      getPagination(req.uri.query.get("curPageNum").get, req.uri.query.get("searchGroup").get,
        req.uri.query.get("searchKey").get, sender)

    case req @HttpRequest(GET, Uri.Path("/miniConf/deleteOneConfItem"), _, _, _) =>
      deleteOneConfItem(req.uri.query.get("group").get, req.uri.query.get("key").get,
        req.uri.query.get("value").get, sender)

    case _: HttpRequest => sender ! HttpResponse(status = 404, entity = "Unknown request!")
  }

  def getPagination(curPageNum: String, searchGroup: String, searchKey: String, senderParm: ActorRef)
  {
    log.debug("getPagination")
    ask(miniConfPersistViewActor, GetPagination(curPageNum, searchGroup, searchKey)) map {
      case pageInfo : PaginationInfo =>
        log.debug("getPagination "+pageInfo.toJson.compactPrint)
        senderParm ! HttpResponse(
          entity = HttpEntity(`text/html`, pageInfo.toJson.compactPrint)
        )
    } recover {
      case e: Exception => senderParm ! HttpResponse(status = 404, entity = "getPagination occur error! "+e.getMessage)
    }
  }

  def saveOneConfItem(theOneConfItemParm: OneConfItem, senderParm: ActorRef)
  {
    log.debug("saveOneConfItem "+theOneConfItemParm)

    ask(miniConfPersistActor, Cmd(theOneConfItemParm)) map {
      case "" =>
        // trigger an additional update, prevent read inconsistent data
        miniConfPersistViewActor ! Update(await = true)

        senderParm ! HttpResponse(
          entity = HttpEntity(`text/html`, ""))
      case errorStr : String if errorStr != "" =>
      {
        log.debug("saveOneConfItemFromGet occur error! "+errorStr)
        senderParm ! HttpResponse(
          status = 404, entity = "saveOneConfItemFromGet occur error! "+errorStr)
      }
    } recover {
      case e: Exception => senderParm ! HttpResponse(status = 404, entity = "saveOneConfItemFromGet occur error! "+e.getMessage)
    }
  }

  def deleteOneConfItem(groupParm: String, keyParm: String, valueParm: String, senderParm : ActorRef) =
  {
    log.debug("deleteOneConfItem "+groupParm+"###"+keyParm)

    ask(miniConfPersistActor, DeleteCmd(groupParm, keyParm, valueParm)) map {
      case "" =>
        // trigger an additional update, prevent read inconsistent data
        miniConfPersistViewActor ! Update(await = true)

        senderParm ! HttpResponse(
          entity = HttpEntity(`text/html`, ""))
      case errorStr : String if errorStr != "" =>
      {
        log.debug("deleteOneConfItem occur error! "+errorStr)
        senderParm ! HttpResponse(
          status = 404, entity = "deleteOneConfItem occur error! "+errorStr)
      }
    } recover {
      case e: Exception => senderParm ! HttpResponse(status = 404, entity = "deleteOneConfItem occur error! "+e.getMessage)
    }
  }

  def retrieveOneConfItem(groupParm: String, keyParm: String, senderParm : ActorRef) =
  {
    log.debug("1 retrieveOneConfItem "+groupParm+"###"+keyParm)

    ask(miniConfPersistViewActor, RetrieveOneConfItem(groupParm, keyParm)) map {
      case retOneConfItemParm: OneConfItem =>
        log.debug("Left(retValueParm) retValueParm "+retOneConfItemParm)
        senderParm ! HttpResponse(
          entity = HttpEntity(`text/html`, retOneConfItemParm.asInstanceOf[OneConfItem].value)
        )
      case None =>
        senderParm ! HttpResponse(status = 404, entity = "not find one!")
    } recover {
      case e: Exception => senderParm ! HttpResponse(status = 404, entity = "retrieveOneConfItem occur error! "+e.getMessage)
    }
  }

  def checkDataModify(groupParm: String, keyParm: String, valueParm: String, senderParm : ActorRef) =
  {
    log.debug("1 checkDataModify "+groupParm+"###"+keyParm
      +"###"+valueParm)

    ask(miniConfPersistViewActor, CheckDataModify(groupParm, keyParm, valueParm)) map {
      case Left(retValueParm) =>
        senderParm ! HttpResponse(
          entity = HttpEntity(`text/html`, retValueParm.asInstanceOf[String])
        )
      case Right(retValueParm) =>
        senderParm ! HttpResponse(
          entity = HttpEntity(`text/html`, retValueParm.asInstanceOf[String])
        )
    } recover {
      case e: Exception => senderParm ! HttpResponse(status = 404, entity = "occur error! "+e.getMessage)
    }
  }
}