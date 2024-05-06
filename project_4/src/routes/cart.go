// routes/cart.go

package routes

import (
    "github.com/labstack/echo/v4"
    "project_4/src/controllers"
)

const cartsIDPath = "/carts/:id"

func CartRoute(e *echo.Echo) {
    cartController := controllers.CartController{}

    e.GET("/carts", cartController.GetCarts)
    e.GET(cartsIDPath, cartController.GetCartById)
    e.POST("/carts", cartController.CreateCart)
    e.PUT(cartsIDPath, cartController.UpdateCart)
    e.DELETE(cartsIDPath, cartController.DeleteCart)
}
