import com.typesafe.sbt.SbtMultiJvm
import com.typesafe.sbt.SbtMultiJvm.MultiJvmKeys.MultiJvm

val akkaVersion = "2.5.1"
val akkaHttpVersion = "10.0.6"

val project = Project(
  id = "akkaDistributedData",
  base = file("."),
  settings = Project.defaultSettings ++ SbtMultiJvm.multiJvmSettings ++ Seq(
    name := "akkaDistributedData-scala",
    organization := "netcomm",
    version := "1.0",
    scalaVersion := "2.11.11",
    libraryDependencies ++= Seq(
      "io.spray"          %%  "spray-json"   % "1.3.2",
      "com.typesafe.akka" %%  "akka-actor"              % akkaVersion,
      "com.typesafe.akka" %%  "akka-stream"             % akkaVersion,
      "com.typesafe.akka" %%  "akka-distributed-data"   % akkaVersion,
      "com.typesafe.akka" %%  "akka-cluster-sharding"   % akkaVersion,
      "com.typesafe.akka" %%  "akka-persistence-query"  % akkaVersion,
      "com.typesafe.akka" %%  "akka-slf4j"              % akkaVersion,
      "com.typesafe.akka" %%  "akka-remote"             % akkaVersion,
      "com.typesafe.akka" %%  "akka-multi-node-testkit" % akkaVersion,
      "com.typesafe.akka" %%  "akka-contrib"            % akkaVersion,
      "com.typesafe.akka" %%  "akka-http"               % akkaHttpVersion,
      "com.typesafe.akka" %%  "akka-http-spray-json"    % akkaHttpVersion,
      "org.scala-lang.modules"      % "scala-xml_2.11"  % "1.0.4",
      "org.iq80.leveldb"            % "leveldb"         % "0.7",
      "org.fusesource.leveldbjni"   % "leveldbjni-all"  % "1.8",
      "com.typesafe.akka" %%  "akka-testkit"            % akkaVersion,
      "org.scalatest"     %  "scalatest_2.11"           % "2.1.3"
    ),

    dependencyOverrides ++= Set(
      "com.typesafe.akka" %%  "akka-actor"              % akkaVersion,
      "com.typesafe.akka" %%  "akka-stream"             % akkaVersion
    ),

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