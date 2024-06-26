// routes/product.go

package routes

import (
    "github.com/labstack/echo/v4"
    "project_4/src/controllers"
)

const productIDPath = "/products/:id"

func ProductRoute(e *echo.Echo) {
    productController := controllers.ProductController{}

    e.GET("/products", productController.GetProducts)
    e.GET(productIDPath, productController.GetProductById)
    e.POST("/products", productController.CreateProduct)
    e.PUT(productIDPath, productController.UpdateProduct)
    e.DELETE(productIDPath, productController.DeleteProduct)
}
