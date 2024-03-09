package main

import (
    "github.com/labstack/echo/v4"
    "github.com/labstack/echo/v4/middleware"
    "project_5/server/database"
    "project_5/server/routes"
)

func main() {
    e := echo.New()
    db := database.Connect()

    e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
        AllowOrigins: []string{"*"},
        AllowMethods: []string{echo.GET, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
    }))

    e.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
        return func(c echo.Context) error {
            c.Set("db", db)
        return next(c)
        }
    })

    routes.ProductRoutes(e)
    routes.PaymentRoutes(e)

    e.Logger.Fatal(e.Start(":8080"))
}
