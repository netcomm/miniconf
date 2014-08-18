package miniconf

import miniconf.client.MiniConfClient

/**
 * Created by wenzhi.bwz on 14-8-18.
 */
object TestClient extends App {
  val theMiniConfClient = new MiniConfClient("http://localhost:8810")
  theMiniConfClient.saveOneConfItem("g2", "k1", "gv2")
  System.out.println("get value result " + theMiniConfClient.getOneConfItem("g2", "k1"))

  theMiniConfClient.registerListener("g2", "k1", {newValue => System.out.println("conf have modified "+newValue)})
}
