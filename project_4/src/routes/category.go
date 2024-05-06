// routes/category.go

package routes

import (
    "github.com/labstack/echo/v4"
    "project_4/src/controllers"
)

const categiriesIDPath = "/categories/:id"

func CategoryRoute(e *echo.Echo) {
    categoryController := controllers.CategoryController{}

    e.GET("/categories", categoryController.GetCategories)
    e.GET(categiriesIDPath, categoryController.GetCategoryById)
    e.POST("/categories", categoryController.CreateCategory)
    e.PUT(categiriesIDPath, categoryController.UpdateCategory)
    e.DELETE(categiriesIDPath, categoryController.DeleteCategory)
}
