package routes

import (
    "github.com/labstack/echo/v4"
    "project_8/server/controllers"
)

func ProductRoutes(e *echo.Echo) {
    productController := controllers.ProductController{}

    e.GET("/products", productController.GetProducts)
    e.GET("/products/:id", productController.GetProductById)
    e.POST("/products", productController.CreateProduct)
    e.PUT("/products/:id", productController.UpdateProduct)
    e.DELETE("/products/:id", productController.DeleteProduct)
}
