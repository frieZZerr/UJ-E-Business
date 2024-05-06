import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.features.logging.*
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders

suspend fun sendMessageToDiscord(message: String, webhookUrl: String) {
    val client = HttpClient(CIO) {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
        install(Logging) {
            level = LogLevel.ALL
        }
    }

    try {
        client.post<Unit>(webhookUrl) {
            header(HttpHeaders.ContentType, ContentType.Application.Json.toString())
            body = mapOf("content" to message)
        }
    } catch (e: Exception) {
        println("Error sending message to Discord: ${e.message}")
    } finally {
        client.close()
    }
}

suspend fun main() {
    val webhookUrl = "<DISCORD_WEBHOOK_URL>"
    val message = "Hello from Ktor!"

    sendMessageToDiscord(message, webhookUrl)
}
