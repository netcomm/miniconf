package miniconf.server

import akka.actor.{ActorRef, ActorSystem}


/**
 * Created by wenzhi.bwz on 14-7-18.
 */
object MainApp {
  def main(args : Array[String]) : Unit = {
    start()
  }

  def start() {
    try {
      val system = ActorSystem("miniconf-system")
      val miniconfConf = system.settings.config.getConfig("miniconf")
      val interface: String = miniconfConf.getString("httpService.interface")
      val port: Int = miniconfConf.getInt("httpService.port")

      system.actorOf(MainHttpService.props(interface, port), "mainHttpService")
    } catch {
      case e:Throwable => e.printStackTrace()
    }
  }
}
