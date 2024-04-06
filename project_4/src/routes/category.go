// routes/category.go

package routes

import (
    "github.com/labstack/echo/v4"
    "project_4/src/controllers"
)

func CategoryRoute(e *echo.Echo) {
    categoryController := controllers.CategoryController{}

    e.GET("/categories", categoryController.GetCategories)
    e.GET("/categories/:id", categoryController.GetCategoryById)
    e.POST("/categories", categoryController.CreateCategory)
    e.PUT("/categories/:id", categoryController.UpdateCategory)
    e.DELETE("/categories/:id", categoryController.DeleteCategory)
}
