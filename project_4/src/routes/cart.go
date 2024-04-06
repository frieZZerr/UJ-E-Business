// routes/cart.go

package routes

import (
    "github.com/labstack/echo/v4"
    "project_4/src/controllers"
)

func CartRoute(e *echo.Echo) {
    cartController := controllers.CartController{}

    e.GET("/carts", cartController.GetCarts)
    e.GET("/carts/:id", cartController.GetCartById)
    e.POST("/carts", cartController.CreateCart)
    e.PUT("/carts/:id", cartController.UpdateCart)
    e.DELETE("/carts/:id", cartController.DeleteCart)
}
