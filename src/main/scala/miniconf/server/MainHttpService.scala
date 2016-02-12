package miniconf.server

import akka.event.LoggingAdapter
import akka.http.scaladsl.model._
import StatusCodes._
import akka.http.scaladsl.server.Directives
import akka.stream.{Materializer}
import akka.http.scaladsl.Http
import akka.stream.scaladsl.ImplicitMaterializer
import akka.actor.{ActorLogging, Actor, ActorRef, Props, Status}
import miniconf.server.persistence.MiniConfPersistActor.{DeleteCmd, Cmd}

import miniconf.server.persistence.{MiniConfPersistActor}
import miniconf.server.replicator.ReplicatedService
import scala.concurrent.ExecutionContext
import spray.json.DefaultJsonProtocol
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import spray.json._

/**
 * Created by netcomm on 2015/11/10.
 */
object MainHttpService extends SprayJsonSupport {
  import akka.pattern.ask
  import DefaultJsonProtocol._
  import ServerService._

  implicit val OneConfItemWireFormat = jsonFormat4(OneConfItem.apply)
  implicit val RetrieveOneConfItemWireFormat = jsonFormat2(RetrieveOneConfItem.apply)
  implicit val CheckDataModifyWireFormat = jsonFormat3(CheckDataModify.apply)
  implicit val GetPaginationWireFormat = jsonFormat3(GetPagination.apply)
  implicit val DeleteCmdWireFormat = jsonFormat3(DeleteCmd.apply)
  implicit val onePaginationInfoFormat = jsonFormat2(PaginationInfo)

  object ServerService
  {
    case class OneConfItem(group: String, key: String, value: String, timestamp: String)
    {
      def getKey: String = {group + "_" + key}
    }
    case class RetrieveOneConfItem(group: String, key: String)
    case class CheckDataModify(group: String, key: String, value: String)
    case class GetPagination(curPageNum: String, searchGroup: String, searchKey: String)
    case class PaginationInfo(totalPageNum: Int, oneBatchItems: List[Array[String]])

    def generateConfItemKey(group: String, key: String): String = {group + "_" + key}
  }

  def props(interface: String, port: Int): Props =
    Props(new MainHttpService(interface, port))

  private def route(miniConfPersistActorParm: ActorRef, replicatedServiceActor : ActorRef,
                    log : LoggingAdapter)(implicit ec: ExecutionContext, mat: Materializer) = {
    import Directives._
    import akka.util.Timeout
    import scala.concurrent.duration._

    implicit val timeout = Timeout(3 seconds)

    def assets = getFromResourceDirectory("web") ~ pathSingleSlash(getFromResource("web/index.html"))

    def saveOneConfItemFlow =
      path("miniConf" / "saveOneConfItem") {
        post {
          entity(as[OneConfItem]) {oneConfItemParm =>
            onSuccess(miniConfPersistActorParm ? Cmd(oneConfItemParm)) {
              case "" => complete(HttpResponse(entity = ""))
              case errorStr : String if errorStr != "" =>
              {
                complete(HttpResponse(InternalServerError, entity = "saveOneConfItemFromGet occur error! "+errorStr))
              }
            }
          }
        }
      }

    def getOneConfItemFlow =
      path("miniConf" / "getOneConfItem") {
        get {
          parameters('group.as[String], 'key.as[String]).as(RetrieveOneConfItem) {retrieveOneConfItemParm =>
            log.info("1 retrieveOneConfItem " + retrieveOneConfItemParm)
            onSuccess(replicatedServiceActor ? retrieveOneConfItemParm) {
              case retOneConfItemParm: OneConfItem =>
                log.info("retValueParm " + retOneConfItemParm)
                complete(HttpResponse(entity = retOneConfItemParm.asInstanceOf[OneConfItem].value))
              case None =>
                complete(HttpResponse(NotFound, entity = "not find one!"))
            }
          }
        }
      }

    def checkDataModifyFlow =
      path("miniConf" / "checkDataModify") {
        get {
          parameters('group.as[String], 'key.as[String],
            'value.as[String]).as(CheckDataModify) { checkDataModifyParm =>
            log.info("1 checkDataModify " + checkDataModifyParm)
            onSuccess(replicatedServiceActor ? checkDataModifyParm) {
              case retValueParm : String =>
                complete(HttpResponse(entity = retValueParm.asInstanceOf[String]))
            }
          }
        }
      }

    def getCurPaginationFlow =
      path("miniConf" / "getCurPagination") {
        post {
          entity(as[GetPagination]) { getPaginationParm =>
            log.info("1 getPagination " + getPaginationParm)
            onSuccess(replicatedServiceActor ? getPaginationParm) {
              case pageInfo : PaginationInfo =>
                complete(HttpResponse(entity = pageInfo.toJson.compactPrint))
            }
          }
        }
      }

    def deleteOneConfItemFlow =
      path("miniConf" / "deleteOneConfItem") {
        post {
          entity(as[DeleteCmd]) { deleteCmdParm =>
            log.info("1 deleteCmd " + deleteCmdParm)
            onSuccess(miniConfPersistActorParm ? deleteCmdParm) {
              case "" => complete("")
              case errorStr : String if errorStr != "" =>
              {
                log.info("deleteOneConfItem occur error! "+errorStr)
                complete(HttpResponse(InternalServerError, entity = "deleteOneConfItem occur error! "+errorStr))
              }
            }
          }
        }
      }

    assets ~ saveOneConfItemFlow ~ getOneConfItemFlow ~ checkDataModifyFlow ~ getCurPaginationFlow ~ deleteOneConfItemFlow
  }
}

class MainHttpService(interface: String, port: Int) extends Actor with ActorLogging with ImplicitMaterializer {
  import MainHttpService._
  import context.dispatcher

  val replicatedServiceActor = context.actorOf(Props[ReplicatedService], name = "replicatedServiceActor")
  val miniConfPersistActor = context.actorOf(
    Props(classOf[MiniConfPersistActor], replicatedServiceActor), "miniConfPersistActor")

  Http(context.system)
    .bindAndHandle(route(miniConfPersistActor, replicatedServiceActor, log), interface, port)

  override def receive = {
    case Http.ServerBinding(address) => log.info("Listening on {}", address)
    case Status.Failure(_)           => context.stop(self)
  }
}
