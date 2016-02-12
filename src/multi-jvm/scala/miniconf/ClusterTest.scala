package miniconf

import akka.actor.{Actor, Props}
import akka.cluster.Cluster
import akka.cluster.ddata.DistributedData
import akka.cluster.ddata.Replicator.{GetReplicaCount, ReplicaCount}
import akka.remote.testconductor.RoleName
import akka.remote.testkit.{MultiNodeConfig, MultiNodeSpec, MultiNodeSpecCallbacks}
import akka.testkit.ImplicitSender
import com.typesafe.config.ConfigFactory
import miniconf.client.MiniConfClient
import miniconf.server.MainHttpService
import org.scalatest.{BeforeAndAfterAll, Matchers, WordSpecLike}
import scala.concurrent.duration._

/**
 * Hooks up MultiNodeSpec with ScalaTest
 */

trait STMultiNodeSpec extends MultiNodeSpecCallbacks
with WordSpecLike with Matchers with BeforeAndAfterAll {
  override def beforeAll() = multiNodeSpecBeforeAll()
  override def afterAll() = multiNodeSpecAfterAll()
}

object MultiNodeSampleConfig extends MultiNodeConfig {
  val serverNode1 = role("server1")
  var serverNode2 = role("server2")
  val clientNode = role("client")

  commonConfig(ConfigFactory.parseString("""
    akka.loglevel = INFO
    akka.actor.provider = "akka.cluster.ClusterActorRefProvider"
    akka.log-dead-letters-during-shutdown = off
    akka.cluster.seed-nodes = ["akka.tcp://MultiNodeSample@127.0.0.1:2551"]
    akka.cluster.auto-down-unreachable-after = 30s
    akka.remote.netty.tcp.port = 0
                                         """))

  nodeConfig(serverNode1) {
    ConfigFactory.parseString(s"""
      akka.cluster.metrics.enabled=off
      akka.persistence.journal.plugin = "akka.persistence.journal.leveldb"
      akka.persistence.journal.leveldb.dir = "target/serverNode1"
      akka.persistence.snapshot-store.plugin = "akka.persistence.snapshot-store.local"
      akka.remote.netty.tcp.port = 2551
      """)
  }

  nodeConfig(serverNode2) {
    ConfigFactory.parseString(s"""
      akka.cluster.metrics.enabled=off
      akka.persistence.journal.plugin = "akka.persistence.journal.leveldb"
      akka.persistence.journal.leveldb.dir = "target/serverNode2"
      akka.persistence.snapshot-store.plugin = "akka.persistence.snapshot-store.local"
      akka.remote.netty.tcp.port = 2552
      """)
  }

  nodeConfig(clientNode) {
    ConfigFactory.parseString(s"""
      akka.remote.netty.tcp.port = 2553
      """)
  }
}

class MultiNodeSampleSpecMultiJvmNode1 extends MultiNodeSample
class MultiNodeSampleSpecMultiJvmNode2 extends MultiNodeSample
class MultiNodeSampleSpecMultiJvmNode3 extends MultiNodeSample

object MultiNodeSample {
}

class MultiNodeSample extends MultiNodeSpec(MultiNodeSampleConfig)
  with STMultiNodeSpec with ImplicitSender {

    import MultiNodeSampleConfig._

    def initialParticipants = roles.size

    val cluster = Cluster(system)
    val port_9001 = 9001
    val port_10001 = 10001

    def join(from: RoleName, to: RoleName): Unit = {
      runOn(from) {
        cluster join node(to).address
      }
      //enterBarrier(from.name + "-joined")
    }

    "A MultiNodeSample" must {

      "wait for nodes to enter a barrier" in {
        enterBarrier("startup")
      }

      "join cluster" in within(20.seconds) {
        join(serverNode1, serverNode1)
        join(serverNode2, serverNode1)

        runOn(serverNode1) {
          within(5.seconds) {
            awaitAssert {
              DistributedData(system).replicator ! GetReplicaCount
              expectMsg(ReplicaCount(2))
            }
          }
        }
        enterBarrier("after-1")
      }

      "test case 1: servers init" in {
        runOn(serverNode1) {
          system.actorOf(MainHttpService.props("127.0.0.1", port_9001), "mainHttpService")
        }

        runOn(serverNode2) {
          system.actorOf(MainHttpService.props("127.0.0.1", port_10001), "mainHttpService")
        }

        runOn(serverNode1, serverNode2) {
          within(10.seconds) {
            awaitAssert {
              DistributedData(system).replicator ! GetReplicaCount
              expectMsg(ReplicaCount(2))
            }
          }
        }
        enterBarrier("finished")
      }

      "test case 2: crdt update" in {
        runOn(clientNode) {
          // wait for servers finish initialization
          Thread.sleep(10000)
          val theMiniConfClient = new MiniConfClient("http://127.0.0.1:"+port_9001)
          theMiniConfClient.saveOneConfItem("g3", "k3", "99")
          val tmpResultStr = theMiniConfClient.getOneConfItem("g3", "k3")
          tmpResultStr should be("99")

          val theMiniConfClient2 = new MiniConfClient("http://127.0.0.1:"+port_10001)
          theMiniConfClient2.saveOneConfItem("g3", "k3", "100")
          val tmpResultStr2 = theMiniConfClient2.getOneConfItem("g3", "k3")
          tmpResultStr2 should be("100")

          // g3_k3's value should be replicated via gossip to the serverNode1
          within(10.seconds) {
            awaitAssert {
              val tmpResultStr3 = theMiniConfClient.getOneConfItem("g3", "k3")
              tmpResultStr3 should be("100")
            }
          }
        }

        enterBarrier("finished test2")
      }
    }
}