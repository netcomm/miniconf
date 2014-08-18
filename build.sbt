name := "miniconfcenter"     // 项目名称

organization := "miniconfcenter"  // 组织名称

version := "0.0.1-SNAPSHOT"  // 版本号

scalaVersion := "2.10.4"   // 使用的Scala版本号

scalacOptions := Seq("-unchecked", "-deprecation", "-encoding", "utf8")

externalResolvers := Seq("maven proxy repo" at "http://repo.spray.io",
  "Logback" at "http://mirrors.ibiblio.org/maven2/",
  "Typesafe Repository" at "https://app.camunda.com/nexus/content/groups/public/"
   )

libraryDependencies ++= {
  val akkaV = "2.3.4"
  val sprayV = "1.3.1"
  val jettyV = "8.1.15.v20140411"
  Seq(
    "io.spray"            %   "spray-can"     % sprayV,
    "io.spray"            %   "spray-client"  % sprayV,
    "io.spray"            %   "spray-routing" % sprayV,
    "io.spray"            %   "spray-testkit" % sprayV,
    "io.spray"            %   "spray-servlet" % sprayV,
    "com.typesafe.akka"   %%  "akka-actor"    % akkaV,
    "com.typesafe.akka"   %%  "akka-testkit"  % akkaV,
    "com.typesafe.akka"   %%  "akka-slf4j"    % akkaV,
    "com.typesafe.akka"   %%  "akka-testkit"  % akkaV    % "test",
    "io.spray"            %   "spray-testkit" % sprayV   % "test",
    "ch.qos.logback"      %   "logback-classic"  % "1.0.12",
    "io.spray"            %%  "spray-json"   % "1.2.6",
    "com.typesafe.akka" %% "akka-persistence-experimental" % "2.3.4",
    "com.typesafe.akka" %% "akka-cluster" % "2.3.4",
    "com.typesafe.akka" %% "akka-remote" % "2.3.4",
    "com.typesafe.akka" % "akka-http-core-experimental_2.10" % "0.4",
    "org.eclipse.jetty" % "jetty-http" % jettyV,
    "org.eclipse.jetty" % "jetty-server" % jettyV,
    "org.eclipse.jetty" % "jetty-servlet" % jettyV,
    "org.eclipse.jetty" % "jetty-webapp" % jettyV,
    "org.eclipse.jetty" % "jetty-xml" % jettyV
  )
}