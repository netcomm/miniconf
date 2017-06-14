package miniconf.server.replicator

import akka.actor.{ActorRef, ActorLogging, Actor}
import akka.cluster.Cluster
import akka.cluster.ddata.{LWWMap, LWWMapKey, DistributedData}
import miniconf.server.MainHttpService.ServerService
import miniconf.server.MainHttpService.ServerService._
import miniconf.server.persistence.MiniConfPersistActor.{DeleteEvt, Evt}


/**
 * Created by netcomm on 2015/12/3.
 */
object ReplicatedService {
  case class RetrieveOneConfItemRequest(key: String, replyTo: ActorRef)
  case class CheckDataModifyRequest(request: CheckDataModify, replyTo: ActorRef)
  case class GetPaginationRequest(request: GetPagination, replyTo: ActorRef)
}

class ReplicatedService extends Actor with ActorLogging {
  import akka.cluster.ddata.Replicator._
  import ReplicatedService._

  val replicator = DistributedData(context.system).replicator
  implicit val cluster = Cluster(context.system)

  def dataKey(entryKey: String): LWWMapKey[String, OneConfItem] =
    LWWMapKey[String, OneConfItem]("cache-" + math.abs(entryKey.hashCode) % 100)

  def receive = {
    case theEvt : Evt =>
      replicator ! Update(dataKey(theEvt.item.getKey), LWWMap(), WriteLocal)(_ + (theEvt.item.getKey -> theEvt.item))

    case theEvt : DeleteEvt =>
      replicator ! Update(dataKey(theEvt.group + "_" + theEvt.key), LWWMap(), WriteLocal)(_ - (theEvt.group + "_" + theEvt.key))

    case payload : RetrieveOneConfItem =>
      val tmpKey = ServerService.generateConfItemKey(payload.group, payload.key)
      replicator ! Get(dataKey(tmpKey), ReadLocal, Some(RetrieveOneConfItemRequest(tmpKey, sender())))
    case g @ GetSuccess(LWWMapKey(_), Some(RetrieveOneConfItemRequest(key, replyTo))) =>
      g.dataValue match {
        case data: LWWMap[String, OneConfItem] => data.get(key) match {
          case Some(value) => replyTo ! value
          case None        => replyTo ! None
        }
      }
    case NotFound(_, Some(RetrieveOneConfItemRequest(key, replyTo))) =>
      replyTo ! None
    case payload : CheckDataModify =>
      val tmpKey = ServerService.generateConfItemKey(payload.group, payload.key)
      replicator ! Get(dataKey(tmpKey), ReadLocal, Some(CheckDataModifyRequest(payload, sender())))
    case g @ GetSuccess(LWWMapKey(_), Some(CheckDataModifyRequest(payload, replyTo))) =>
      val key = ServerService.generateConfItemKey(payload.group, payload.key)
      g.dataValue match {
        case data: LWWMap[String, OneConfItem] => data.get(key) match {
          case Some(value) => if (value.asInstanceOf[OneConfItem].value == payload.value) replyTo ! ""
            else replyTo ! value.asInstanceOf[OneConfItem].value
          case None        => replyTo ! ""
        }
      }
    case NotFound(_, Some(CheckDataModifyRequest(payload, replyTo))) =>
      replyTo ! ""
    case _: UpdateResponse[_] => // ok
    case payload: GetPagination =>
      val tmpKey = ServerService.generateConfItemKey(payload.searchGroup, payload.searchKey)
      replicator ! Get(dataKey(tmpKey), ReadLocal, Some(GetPaginationRequest(payload, sender())))
    case g @ GetSuccess(LWWMapKey(_), Some(GetPaginationRequest(payload, replyTo))) =>
      log.info("GetSuccess Some(GetPaginationRequest(payload, replyTo)")
      val key = ServerService.generateConfItemKey(payload.searchGroup, payload.searchKey)
      var tmpCurTotalNum = 0
      val tmpCurOnePageItemCnt = 20
      val tmpCurPageNum = Integer.parseInt(payload.curPageNum)
      var tmpList : List[Array[String]] = List.empty
      g.dataValue match {
        case data: LWWMap[String, OneConfItem] =>
          val tmpMapDetail = data.entries
          log.info("GetSuccess tmpMapDetail")
          tmpList = tmpMapDetail.foldLeft(tmpList){
            case (a, (k, v)) =>
              val tmpOneConfItem = v.asInstanceOf[OneConfItem]
              if ("" != payload.searchKey && ! tmpOneConfItem.key.contains(payload.searchKey))
              {
                a
              }
              else
              {
                val tmpOneArray = Array[String](tmpOneConfItem.group,tmpOneConfItem.key,
                  tmpOneConfItem.value,tmpOneConfItem.timestamp)
                if ((tmpCurPageNum * tmpCurOnePageItemCnt <= tmpCurTotalNum) &
                  ((tmpCurPageNum + 1) * tmpCurOnePageItemCnt > tmpCurTotalNum))
                {
                  tmpCurTotalNum += 1
                  a :+ tmpOneArray
                }
                else
                {
                  a
                }
              }
          }
      }
      var tmpTotalPageNum : Int = tmpCurTotalNum/tmpCurOnePageItemCnt
      if (tmpCurTotalNum % tmpCurOnePageItemCnt != 0)
      {
        tmpTotalPageNum += 1
      }
      replyTo ! PaginationInfo(tmpTotalPageNum, tmpList)
    case NotFound(_, Some(GetPaginationRequest(payload, replyTo))) =>
        replyTo ! PaginationInfo(0, List.empty)
  }
}
