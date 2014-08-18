package miniconf.server.persistence

import akka.persistence.{SnapshotOffer, PersistentView}
import akka.actor.{ActorLogging, Actor}
import miniconf.server.ServerService
import java.util.NoSuchElementException
import scala.Some
import scala.collection.mutable

/**
 * Created by wenzhi.bwz on 14-7-24.
 */
class MiniConfPersistView extends PersistentView with ActorLogging {
  import scala.collection.mutable.Map
  import MiniConfPersistActor._
  import ServerService._

  override def persistenceId: String = "miniConf_PersistActor_1"
  override def viewId: String = "miniConf_PersistActor_view1"

  var confMap = Map[String, Map[String, OneConfItem]]()
  var curUpdateNum = 0;

  def receive: Actor.Receive = {
    case payload if isPersistent =>
      payload match {
        case evt: Evt =>
          log.debug("view add one "+evt)
          var tmpCurGroupMap : Map[String, OneConfItem] = null
          confMap.get(evt.item.group) match
          {
            case Some(theGroupParm) =>
              tmpCurGroupMap = theGroupParm
           case None =>
             tmpCurGroupMap = mutable.LinkedHashMap.empty
             confMap += (evt.item.group -> tmpCurGroupMap)
          }

          tmpCurGroupMap.put(evt.item.key, evt.item)

        case deleteEvt: DeleteEvt =>
          log.debug("view delete one "+deleteEvt)

          confMap.get(deleteEvt.group) match
          {
            case Some(theGroupParm) =>
              theGroupParm.remove(deleteEvt.key)
            case None =>
          }
      }
      curUpdateNum += 1
      if (curUpdateNum % 100 == 0)
      {
        log.debug("save on Snapshot")
        saveSnapshot(confMap)
      }

    case SnapshotOffer(metadata, offeredSnapshot) =>
      log.debug("0 recover one save on Snapshot "+confMap.size)
      confMap = offeredSnapshot.asInstanceOf[Map[String, Map[String, OneConfItem]]]
      log.debug("1 recover one save on Snapshot "+confMap.size)

    case payload : RetrieveOneConfItem =>
    {
      try
      {
        log.debug("0 find one payload "+payload)
        val tmpGroup = confMap.get(payload.group)
        if (tmpGroup == None)
        {
          sender ! None
        }
        else
        {
          sender ! tmpGroup.get(payload.key)
        }
      }
      catch
      {
        case e: NoSuchElementException => sender ! None
      }
    }

    case payload: CheckDataModify =>
    {
      try
      {
        val tmpGroup = confMap.get(payload.group)
        if (tmpGroup == None)
        {
          sender ! Right("")
        }
        else
        {
          val tmpSavedValue = tmpGroup.get(payload.key).value
          if (payload.value == tmpSavedValue)
          {
            sender ! Right("")
          }
          else
          {
            sender ! Left(tmpSavedValue)
          }
        }
      }
      catch
      {
        case e: NoSuchElementException => sender ! Right("")
      }
    }

    case payload: GetPagination =>
    {
      var tmpCurTotalNum = 0
      val tmpCurOnePageItemCnt = 20
      val tmpCurPageNum = Integer.parseInt(payload.curPageNum)
      val tmpSearchGroup = payload.searchGroup
      val tmpSearchKey = payload.searchKey

      var tmpConfMapIter = confMap.valuesIterator
      if ("" != tmpSearchGroup)
      {
        tmpConfMapIter = confMap.get(tmpSearchGroup).iterator
      }

      var tmpList : List[Array[String]] = List.empty
      while(tmpConfMapIter.hasNext) {
        val tmpOneGroupMap = tmpConfMapIter.next.asInstanceOf[Map[String, OneConfItem]]
        val tmpOneGroupMapIter = tmpOneGroupMap.valuesIterator
        while(tmpOneGroupMapIter.hasNext) {
          val tmpOneConfItem = tmpOneGroupMapIter.next.asInstanceOf[OneConfItem]
          if ("" != tmpSearchKey && ! tmpOneConfItem.key.contains(tmpSearchKey))
          {
          }
          else
          {
            val tmpOneArray = new Array[String](4)
            tmpOneArray(0) = tmpOneConfItem.group
            tmpOneArray(1) = tmpOneConfItem.key
            tmpOneArray(2) = tmpOneConfItem.value
            tmpOneArray(3) = tmpOneConfItem.timestamp
            if ((tmpCurPageNum * tmpCurOnePageItemCnt <= tmpCurTotalNum) &
              ((tmpCurPageNum + 1) * tmpCurOnePageItemCnt > tmpCurTotalNum))
            {
              tmpList = tmpList :+ tmpOneArray
            }
            tmpCurTotalNum += 1
          }
        }
      }

      var tmpTotalPageNum : Int = tmpCurTotalNum/tmpCurOnePageItemCnt
      if (tmpCurTotalNum % tmpCurOnePageItemCnt != 0)
      {
        tmpTotalPageNum += 1
      }
      sender ! PaginationInfo(tmpTotalPageNum, tmpList)
    }
  }
}
