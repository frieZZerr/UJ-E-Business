package com.project_9

import com.aallam.openai.api.BetaOpenAI
import com.aallam.openai.api.chat.ChatCompletionRequest
import com.aallam.openai.api.chat.ChatMessage
import com.aallam.openai.api.chat.ChatRole
import com.aallam.openai.api.model.ModelId
import com.aallam.openai.client.OpenAI
import io.ktor.http.HttpMethod
import io.ktor.http.HttpHeaders
import io.ktor.serialization.jackson.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.routing.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlinx.serialization.Serializable

suspend fun main() {
    val gptToken = System.getenv("gpt_token")
    val openai = OpenAI(token = gptToken)

    embeddedServer(Netty, port = 8081) {
        gptService(openai)
    }.start(wait = true)
}

@Serializable
data class Text(val message: String)

@OptIn(BetaOpenAI::class)
fun Application.gptService(openai: OpenAI) {
    install(CORS) {
        allowCredentials = true
        allowNonSimpleContentTypes = true
        anyHost()

        allowHost("localhost:5173", schemes = listOf("http"))

        allowMethod(HttpMethod.Options)
        allowMethod(HttpMethod.Put)
        allowMethod(HttpMethod.Delete)
        allowMethod(HttpMethod.Patch)
        allowMethod(HttpMethod.Get)
        allowMethod(HttpMethod.Post)

        allowHeader(HttpHeaders.Authorization)
        allowHeader(HttpHeaders.ContentType)
        allowHeader(HttpHeaders.Accept)
    }

    install(ContentNegotiation) {
        jackson()
    }

    val openings = listOf(
        "Hello! How can I assist you today?",
        "Hi there! I'm here to help.",
        "Greetings! What can I do for you?",
        "Good day! How may I support you today?",
        "Welcome! How can I be of service to you?"
    )

    val closings = listOf(
        "Thank you for the conversation.",
        "I hope I've answered your question.",
        "Until we meet again.",
        "Have a great day!",
        "See you next time!"
    )

    routing {
        post("/gpt") {
            val message = call.receive<Text>().message
            val completion = openai.chatCompletion(
                ChatCompletionRequest(
                    model = ModelId("gpt-3.5-turbo"),
                    messages = listOf(ChatMessage(role = ChatRole.User, content = message))
                )
            )
            completion.choices.first().message?.content?.let { responseContent ->
                call.respond(Text(responseContent))
            }
        }

        get("/opening") { call.respond(Text(openings.random())) }
        get("/closing") { call.respond(Text(closings.random())) }
    }
}
