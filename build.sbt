import com.typesafe.sbt.SbtMultiJvm
import com.typesafe.sbt.SbtMultiJvm.MultiJvmKeys.MultiJvm

val akkaV = "2.4.1"
val akkaHttpVersion   = "2.0-M1"

val project = Project(
  id = "akkaDistributedData",
  base = file("."),
  settings = Project.defaultSettings ++ SbtMultiJvm.multiJvmSettings ++ Seq(
    name := "akkaDistributedData",
    version := "0.0.1-SNAPSHOT",
    scalaVersion := "2.11.7",
    externalResolvers := Seq("maven proxy repo" at "http://repo.spray.io",
      //"Typesafe Repository" at "https://app.camunda.com/nexus/content/groups/public/"
      "Typesafe Repository" at "http://mvnrepository.com/artifact",
      "Logback" at "http://mirrors.ibiblio.org/maven2/",
      "central.maven" at "http://central.maven.org/maven2"
    ),
    libraryDependencies ++= Seq(
      "ch.qos.logback"    %   "logback-classic"  % "1.0.12",
      "io.spray"          %%  "spray-json"   % "1.3.2",
      "com.typesafe.akka" % "akka-stream-experimental_2.11" % "2.0-M1",
      "com.typesafe.akka" %% "akka-distributed-data-experimental" % akkaV,
      "com.typesafe.akka" %% "akka-persistence-query-experimental" % akkaV,
      "com.typesafe.akka" %% "akka-cluster-sharding"              % akkaV,
      "com.typesafe.akka" %% "akka-http-experimental"             % akkaHttpVersion,
      "com.typesafe.akka" %% "akka-http-spray-json-experimental"  % akkaHttpVersion,
      "org.scala-lang"   % "scala-reflect"   % "2.11.7",
      "de.heikoseeberger" %% "akka-log4j"    % "1.0.1",
      "com.typesafe.akka" %%  "akka-testkit"  % akkaV,
      "com.typesafe.akka" %% "akka-multi-node-testkit" % akkaV,
      "org.scala-lang.modules"      % "scala-xml_2.11" % "1.0.4",
      "org.iq80.leveldb"            % "leveldb"          % "0.7",
      "org.fusesource.leveldbjni"   % "leveldbjni-all"   % "1.8",
      "org.scalatest"     %%  "scalatest"     % "2.1.3"),
    // make sure that MultiJvm test are compiled by the default test compilation
    compile in MultiJvm <<= (compile in MultiJvm) triggeredBy (compile in Test),
    // disable parallel tests
    parallelExecution in Test := false,
    // make sure that MultiJvm tests are executed by the default test target,
    // and combine the results from ordinary test and multi-jvm tests
    executeTests in Test <<= (executeTests in Test, executeTests in MultiJvm) map {
      case (testResults, multiNodeResults)  =>
        val overall =
          if (testResults.overall.id < multiNodeResults.overall.id)
            multiNodeResults.overall
          else
            testResults.overall
        Tests.Output(overall,
          testResults.events ++ multiNodeResults.events,
          testResults.summaries ++ multiNodeResults.summaries)
    }
  )
) configs (MultiJvm)