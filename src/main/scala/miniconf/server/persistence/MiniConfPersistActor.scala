package miniconf.server.persistence

import akka.persistence.{SnapshotOffer, PersistentActor}
import miniconf.server.MainHttpService.ServerService.OneConfItem
import akka.actor.{ActorRef, Props, ActorLogging}
import miniconf.server.replicator.ReplicatedService

object MiniConfPersistActor
{
  case class Cmd(item: OneConfItem)
  case class Evt(item: OneConfItem)
  case class CmdFromReplicator(item: OneConfItem)

  case class DeleteCmd(group: String, key: String, value: String)
  case class DeleteEvt(group: String, key: String, value: String)
  case class DeleteCmdFromReplicator(group: String, key: String, value: String)
}

/**
 * Created by wenzhi.bwz on 14-7-22.
 */
class MiniConfPersistActor(replicatedServiceActorParm: ActorRef) extends PersistentActor with ActorLogging {
  import MiniConfPersistActor._
  override def persistenceId = "miniConf_PersistActor_1"
  val replicatedServiceActor = replicatedServiceActorParm
  var curUserMem = 0

  val receiveRecover: Receive = {
    case evt: Evt => updateCurSts(evt)
    case deleteEvt: DeleteEvt => deleteOneItem(deleteEvt)
    case SnapshotOffer(_, _) => log.info("receiveRecover one SnapshotOffer")
  }

  val receiveCommand: Receive = {
    case Cmd(itemParm) =>
      if (checkMemoryCapacity())
      {
        persist(Evt(itemParm)) { event =>
          log.info("recieve One Command "+itemParm)
          updateCurSts(event)
          sender ! ""
        }
      }
      else
      {
        sendMemoryCapacityAlarm(sender)
      }

    case CmdFromReplicator(itemParm) =>
      if (checkMemoryCapacity())
      {
        persist(Evt(itemParm)) { event =>
          log.info("recieve one itemParm from replicator " + itemParm)
        }
      }
      else {
        sendMemoryCapacityAlarm(null)
      }

    case DeleteCmd(groupParm, keyParm, valueParm) =>
      persist(DeleteEvt(groupParm, keyParm, valueParm)) { event =>
        deleteOneItem(event)
        sender ! ""
      }

    case DeleteCmdFromReplicator(groupParm, keyParm, valueParm) =>
      persist(DeleteEvt(groupParm, keyParm, valueParm)) { event =>
        removeMemWhenDelete(event)
      }
  }

  def updateCurSts(event: Evt)
  {
    log.info("updateCurSts "+event)
    curUserMem += event.item.key.length + event.item.value.length
    replicatedServiceActor ! event
  }

  def sendMemoryCapacityAlarm(senderActor: ActorRef)
  {
    val tmpRt = Runtime.getRuntime()
    val tmp1M = 1024 * 1024
    val totalMemorySize = tmpRt.totalMemory() / tmp1M
    val maxMemorySiz = tmpRt.maxMemory() / tmp1M
    val freeMemorySize = tmpRt.freeMemory() / tmp1M
    val usedMem = (totalMemorySize - freeMemorySize)

    val tmpWarning = "close to the system memory limit, please pay attention !!! curMaxMemory(M) ="+maxMemorySiz+" curIdle(M) "+(maxMemorySiz - usedMem)
    log.warning(tmpWarning)
    if (senderActor != null) {
      senderActor ! tmpWarning
    }
  }

  def deleteOneItem(event : DeleteEvt)
  {
    removeMemWhenDelete(event)
    replicatedServiceActor ! event
  }

  def removeMemWhenDelete(event : DeleteEvt)
  {
    log.debug("deleteOneItem "+event)
    curUserMem -= (event.key.length + event.value.length)
  }

  def checkMemoryCapacity() : Boolean = {
    val tmpRt = Runtime.getRuntime()
    val tmp1M = 1024 * 1024
    val totalMemorySize = tmpRt.totalMemory() / tmp1M
    val maxMemorySiz = tmpRt.maxMemory() / tmp1M
    val freeMemorySize = tmpRt.freeMemory() / tmp1M
    val usedMem = totalMemorySize - freeMemorySize

    log.debug("totalMemorySize "+totalMemorySize
      +"###maxMemorySiz "+maxMemorySiz+"###freeMemorySize "+freeMemorySize
      +"###usedMem "+usedMem)
    if (maxMemorySiz - usedMem > 100)
    {
      true
    } else false
  }
}
