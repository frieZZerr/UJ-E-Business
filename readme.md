# E-Business

This is a repository for UJ E-Business course. It will contain all the required projects. Each project will have it's own seperate branch with commit history.

The `master` branch will be constantly updated after each project has been finished.

## Project 1 - Docker

Create a Docker image based on a Debian distribution (without installed Java, Kotlin packages, etc.) and install Kotlin, Go, or Scala. Additionally, tools for building such as sbt, Gradle, respectively for the language should be added. The image should also include a linter for static code analysis in Kotlin.

:white_check_mark: 3.0 - [Ubuntu image with Python version 3.8](https://github.com/frieZZerr/UJ-E-Business/commit/73f0f591d315ee8b1d62a8990b99811331e92d1e)

:white_check_mark: 3.5 - [Ubuntu:22.04 image with Java version 8 and Kotlin](https://github.com/frieZZerr/UJ-E-Business/commit/1eae08f2bbd39ee78c8c51c36d17352be099e6ea)

:white_check_mark: 4.0 - [Add the latest Gradle and the JDBC SQLite package to the above as part of the Gradle project (build.gradle)](https://github.com/frieZZerr/UJ-E-Business/commit/eac1658a933c92a887b61023574033c061363b39)

:white_check_mark: 4.5 - [Create a HelloWorld example and run the application via CMD and Gradle](https://github.com/frieZZerr/UJ-E-Business/commit/224e69a4d95e45453a3bb6c5761a8035450655ab)

:white_check_mark: 5.0 - [Add docker-compose configuration](https://github.com/frieZZerr/UJ-E-Business/commit/67d3d680b5bf157f8d034b77fe38d19e8ded5a20)

Code: [project_1](https://github.com/frieZZerr/UJ-E-Business/tree/project_1)

## Project 2 - Scala

Create an application using the Play framework in Scala 2.

:white_check_mark: 3.0 - [Create a controller for Products](https://github.com/frieZZerr/UJ-E-Business/commit/8e798a98c201ae0a1561a1b6f23b1e10e7bf13a1)

:white_check_mark: 3.5 - [Create endpoints according to CRUD - data retrieved from the list](https://github.com/frieZZerr/UJ-E-Business/commit/d0bce08efa8fe680a602895b622e6ab52b52c09e)

:white_check_mark: 4.0 - [Create controllers for Categories and Cart + endpoints according to CRUD](https://github.com/frieZZerr/UJ-E-Business/commit/f5a1a760b7c72dd593af1395b6d81a7b42081325)

:x: 4.5 - [Run the application on Docker (create an image) and add a script to run the application via ngrok]()

:x: 5.0 - [Add CORS configuration for two hosts for CRUD methods]()

Code: [project_2](https://github.com/frieZZerr/UJ-E-Business/tree/project_2)
