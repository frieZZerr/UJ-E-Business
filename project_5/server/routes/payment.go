package routes

import (
    "github.com/labstack/echo/v4"
    "project_5/server/controllers"
)

func PaymentRoutes(e *echo.Echo) {
    paymentController := controllers.PaymentController{}

    e.GET("/payments", paymentController.GetPayments)
    e.GET("/payments/:id", paymentController.GetPaymentById)
    e.POST("/payments", paymentController.CreatePayment)
    e.DELETE("/payments/:id", paymentController.DeletePayment)
}
