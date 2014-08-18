package miniconf.server.persistence

import akka.persistence.{SnapshotOffer, PersistentActor}
import miniconf.server.ServerService.OneConfItem
import akka.actor.ActorLogging

object MiniConfPersistActor
{
  case class Cmd(item: OneConfItem)
  case class Evt(item: OneConfItem)

  case class DeleteCmd(group: String, key: String, value: String)
  case class DeleteEvt(group: String, key: String, value: String)
}

/**
 * Created by wenzhi.bwz on 14-7-22.
 */
class MiniConfPersistActor extends PersistentActor with ActorLogging {
  import MiniConfPersistActor._
  override def persistenceId = "miniConf_PersistActor_1"
  var curUserMem = 0

  val receiveRecover: Receive = {
    case evt: Evt => updateCurSts(evt)
    case deleteEvt: DeleteEvt => deleteOneItem(deleteEvt)
    case SnapshotOffer(_, _) => System.out.println("receiveRecover one SnapshotOffer")
  }

  val receiveCommand: Receive = {
    case Cmd(itemParm) =>
      if (checkMemoryCapacity())
      {
        persist(Evt(itemParm)) { event =>
          log.debug("recieve One Command "+itemParm)
          updateCurSts(event)
          sender ! ""
        }
      }
      else
      {
        val tmpRt = Runtime.getRuntime()
        val tmp1M = 1024 * 1024
        val totalMemorySize = tmpRt.totalMemory() / tmp1M
        val maxMemorySiz = tmpRt.maxMemory() / tmp1M
        val freeMemorySize = tmpRt.freeMemory() / tmp1M
        val usedMem = (totalMemorySize - freeMemorySize)

        val tmpWarning = "close to the system memory limit, please pay attention !!! curMaxMemory(M) ="+maxMemorySiz+" curIdle(M) "+(maxMemorySiz - usedMem)
        log.warning(tmpWarning)
        sender ! tmpWarning
      }

    case DeleteCmd(groupParm, keyParm, valueParm) =>
      persist(DeleteEvt(groupParm, keyParm, valueParm)) { event =>
        deleteOneItem(event)
        sender ! ""
      }
  }

  def updateCurSts(event : Evt)
  {
    curUserMem += event.item.key.length + event.item.value.length
  }

  def deleteOneItem(event : DeleteEvt)
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
