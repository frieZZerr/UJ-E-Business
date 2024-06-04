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

## Project 3 - Kotlin

Create an application using the Ktor framework in Kotlin.

:white_check_mark: 3.0 - [Create a Kotlin client application using the Ktor framework, which allows sending messages to the Discord platform](https://github.com/frieZZerr/UJ-E-Business/commit/691e8b85b36bc22281c1bb9d6214eef90a2df673)

:x: 3.5 - [The application is capable of receiving messages from users on the Discord platform directed to the application]()

:x: 4.0 - [Return a list of categories upon user request]()

:x: 4.5 - [Return a list of products based on the requested category]()

:x: 5.0 - [Additionally, the application will handle one of the following platforms: Slack, Messenger, Webex, Skype, Discord]()

Code: [project_3](https://github.com/frieZZerr/UJ-E-Business/tree/project_3)

## Project 4 - Go

Create an application using the Echo framework in Go.

:white_check_mark: 3.0 - [Create a Products controller compliant with CRUD operations](https://github.com/frieZZerr/UJ-E-Business/commit/25492bdbdfc306b0a1aeb6e9fc4f9534c6e67a3f)

:white_check_mark: 3.5 - [Create a Product model using Gorm and use the model to handle products (CRUD) in the controller](https://github.com/frieZZerr/UJ-E-Business/commit/25492bdbdfc306b0a1aeb6e9fc4f9534c6e67a3f)

:white_check_mark: 4.0 - [Add a Cart model and implement the corresponding endpoint](https://github.com/frieZZerr/UJ-E-Business/commit/7da6c4acf9966b994af1df02412b5e9fc4eca74d)

:white_check_mark: 4.5 - [Create a Category model and establish a relationship between the category and the product](https://github.com/frieZZerr/UJ-E-Business/commit/5f3041a6b188985e8be086aea350bfe61099bf0c)

:white_check_mark: 5.0 - [Group queries into Gorm scopes](https://github.com/frieZZerr/UJ-E-Business/commit/348c088d05789c8936bda22ddaa0a38e9f6d439b)

Code: [project_4](https://github.com/frieZZerr/UJ-E-Business/tree/project_4)

## Project 5 - React

Create a client-side application using the React.js library.

:white_check_mark: 3.0 - [Create Products and Payments components](https://github.com/frieZZerr/UJ-E-Business/commit/6be1e1d0ee59c37fb49897452d3bc40fab4422e2)

:x: 3.5 - [Add Cart component with a view and routing]()

:x: 4.0 - [Communicate between server with React-Hooks]()

:x: 4.5 - [Create docker-compose]()

:white_check_mark: 5.0 - [Use axios with CORS headers](https://github.com/frieZZerr/UJ-E-Business/commit/6be1e1d0ee59c37fb49897452d3bc40fab4422e2)

Code: [project_5](https://github.com/frieZZerr/UJ-E-Business/tree/project_5)

## Project 6 - Cypress

Create 20 test cases in one of the following solutions:

- Cypress JS (JS)
- Selenium (Kotlin, Python, Java, JS, Go, Scala)

:white_check_mark: 3.0 - [Create 20 test cases in CypressJS](https://github.com/frieZZerr/UJ-E-Business/commit/8b3854d60bd2a6e5cd5012aa2d21c0d5e2a92c3e)

:x: 3.5 - [Extend the functional tests to include a minimum of 50 assertions]()

:x: 4.0 - [Create unit tests for a selected previous project with a minimum of 50 assertions]()

:x: 4.5 - [Add API tests, covering all endpoints with at least one negative scenario per endpoint]()

:x: 5.0 - [Run the functional tests on Browserstack]()

Code: [project_6](https://github.com/frieZZerr/UJ-E-Business/tree/project_6)

## Project 7 - SonarCloud

Improve the applications to achieve 0 bugs, 0 vulnerabilities, 0 security hotspots, and 0 security vulnerabilities.

:x: 3.0 - [Add a script to the appropriate server-side application code in git hooks]()

:white_check_mark: 3.5 - [Eliminate all bugs in the code in Sonar (server-side application code)](https://github.com/frieZZerr/UJ-E-Business/commit/b4879114b3a8b54dfa21b462a308037f60bf1212)

:white_check_mark: 4.0 - [Eliminate all code smells in the code in Sonar (server-side application code)](https://github.com/frieZZerr/UJ-E-Business/commit/b4879114b3a8b54dfa21b462a308037f60bf1212)

:white_check_mark: 4.5 - [Eliminate all vulnerabilities and security issues in the code in Sonar (server-side application code](https://github.com/frieZZerr/UJ-E-Business/commit/b4879114b3a8b54dfa21b462a308037f60bf1212)

:white_check_mark: 5.0 - [Eliminate all bugs and code smells in the client-side application code](https://github.com/frieZZerr/UJ-E-Business/commit/b4879114b3a8b54dfa21b462a308037f60bf1212)

Code: [project_7](https://github.com/frieZZerr/UJ-E-Business/tree/project_7)

## Project 8 - OAuth2

Direct creation of clients on the React side excluding server-side application from communication, e.g., using auth0, is prohibited. Correct communication: react-server-provider-server(via return uri)-react.

:white_check_mark: 3.0 - [Login through server-side application (without OAuth2)](https://github.com/frieZZerr/UJ-E-Business/commit/ab0519113b6e6c548c680f7d477e0a5ec49e4d0e)

:white_check_mark: 3.5 - [Registration through server-side application (without OAuth2)](https://github.com/frieZZerr/UJ-E-Business/commit/018dcfad2b769f70142b9ab0833638a1ce9b3544)

:x: 4.0 - [Login via Google OAuth2)](https://github.com/frieZZerr/UJ-E-Business/commit/018dcfad2b769f70142b9ab0833638a1ce9b3544)

:x: 4.5 - [Login via Facebook or Github OAuth2]()

:x: 5.0 - [Saving OAuth2 login data on the server side]()

Code: [project_8](https://github.com/frieZZerr/UJ-E-Business/tree/project_8)

## Project 9 - ChatGPT Bot

Create a frontend application which will connect to a separate service. This service will analyze text from the user, send a query to GPT, and then forward the response back to the user.

:white_check_mark: 3.0 - [Create service on the server side to connect with ChatGPT for chat services](https://github.com/frieZZerr/UJ-E-Business/commit/7e96fa95cfc7e41eb871797fe0e6363e3694db28)

:white_check_mark: 3.5 - [Create user frontend interface which will communicate with the service](https://github.com/frieZZerr/UJ-E-Business/commit/7e96fa95cfc7e41eb871797fe0e6363e3694db28)

:white_check_mark: 4.0 - [Create a list of 5 different openings and closings for conversations](https://github.com/frieZZerr/UJ-E-Business/commit/7e96fa95cfc7e41eb871797fe0e6363e3694db28)

:x: 4.5 - [Filter for topics related to a store]()

:x: 5.0 - [Filter responses by sentiment]()

Code: [project_9](https://github.com/frieZZerr/UJ-E-Business/tree/project_9)

## Project 10 - Cloud/CI

Use GitHub Actions (other CI solutions are acceptable) and Azure cloud (other clouds are acceptable) to build and deploy a client application (frontend) and a server application (backend) as two separate applications.

:white_check_mark: 3.0 - [Create the appropriate instances on the cloud side using Docker](https://github.com/frieZZerr/UJ-E-Business/commit/0fd4864ff6dd03f98dab955bc446dfc90ca3d9aa)

:white_check_mark: 3.5 - [Create a suitable pipeline in GitHub Actions for building the application (e.g., via fatjar)](https://github.com/frieZZerr/UJ-E-Business/commit/0888152be8233be4d51e150cec471de5da57f773)

:white_check_mark: 4.0 - [Add email notifications for application builds](https://github.com/frieZZerr/UJ-E-Business/commit/0888152be8233be4d51e150cec471de5da57f773)

:white_check_mark: 4.5 - [Add a step to deploy the server and client applications to the cloud](https://github.com/frieZZerr/UJ-E-Business/commit/0888152be8233be4d51e150cec471de5da57f773)

:x: 5.0 - [Add the execution of automated regression tests (functional) as a step in Actions]()

Code: [project_10](https://github.com/frieZZerr/UJ-E-Business/tree/project_10)

