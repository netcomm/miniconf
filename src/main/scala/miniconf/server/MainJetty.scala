package miniconf.server

import org.eclipse.jetty.server.Server
import org.eclipse.jetty.server.bio.SocketConnector
import org.eclipse.jetty.webapp.WebAppContext
import com.typesafe.config.{ConfigFactory}


/**
 * Created by wenzhi.bwz on 14-7-18.
 */
object MainJetty {
  def main(args : Array[String]) : Unit = {
    start()
  }

  def start() {
    try {
      val config = ConfigFactory.load()

      val server = new Server()
      val connector = new SocketConnector()
      connector.setPort(config.getInt("miniconf.jetty_server_port"))

      val tmpWEBAPPDIR = "miniconf/webapp"
      val tmpWarUrl = ClassLoader.getSystemClassLoader.getResource(tmpWEBAPPDIR).toExternalForm
      //val tmpWarUrl = "D:\\work\\miniconfcenter\\src\\main\\java\\miniconf\\webapp"
      val webcontext: WebAppContext = new WebAppContext
      webcontext.setDescriptor(tmpWarUrl+"/web.xml")
      webcontext.setResourceBase(tmpWarUrl)
      webcontext.setContextPath("/")
      webcontext.setParentLoaderPriority(true)

      server.setHandler(webcontext)

      server.setConnectors(Array(connector))
      server.start()
    } catch {
      case e:Throwable => e.printStackTrace()
    }
  }
}
