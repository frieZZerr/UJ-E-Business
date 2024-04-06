// routes/product.go

package routes

import (
    "github.com/labstack/echo/v4"
    "project_4/src/controllers"
)

func ProductRoute(e *echo.Echo) {
    productController := controllers.ProductController{}

    e.GET("/products", productController.GetProducts)
    e.GET("/products/:id", productController.GetProductById)
    e.POST("/products", productController.CreateProduct)
    e.PUT("/products/:id", productController.UpdateProduct)
    e.DELETE("/products/:id", productController.DeleteProduct)
}
