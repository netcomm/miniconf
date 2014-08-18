Mini Configuration Center
==================================

Overview
----------

Centralized configuration management, including online editing, persistence, especially the change of the configuration data can be perceived in runtime.

we use Spray / Akka persistence and using CQRS mode. thanks for Akka persistence, it make the source code number decreased dramatically,the core code number no more than 300 lines. 

a Configuration = Group  +  Key  +  Value

Mini Configuration Center(miniconf) consists of two parts: server side and client jar. 

- `server side` expose RESTful service(use Spray / embedded jetty) and use local leveldb to save Add/Edit/Query configuration event and view's snapshot.

- `client jar` provide scala and java interface.

![architecture](images/architecture.png "architecture")

Usage
-----------

### server side
you can download the server.zip, unzip it,in bin directory use 'miniconfServer.sh'(in linux) or 'miniconfServer.bat'(in windows),it will startup a an embedded Jetty server,the default port is 8810.

### web page
- the main page url is http://your server ip:8810/

![indexpage](images/index.png "index")

- Add/Edit One Configuration

![indexpage](images/add.png "index")

###conf
in conf directory, you can edit application.conf for custom need.

Reference configuration
     
      aakka {
         loggers = ["akka.event.slf4j.Slf4jLogger"]
         loglevel = "DEBUG"
         stdout-loglevel = "DEBUG"
         
         persistence
         {
 	       journal
 	       {
 	         leveldb
 	         {
 	           dir = "../target/journal"
 	           native = on
 	         }
 	       }
        
 	       snapshot-store
 	       {
 	         local
 		 {
 		   dir = "../target/snapshots"
 		}
 	       }
         }
      }

      spray.servlet {
        boot-class = "miniconf.server.Boot"
        request-timeout = 6s
      }

      miniconf {
          jetty_server_port = 8810
      }  

Client jar
--------------
