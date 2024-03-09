// main.go

package main

import (
    "github.com/labstack/echo/v4"
    "project_4/src/database"
    "project_4/src/routes"
)

func main() {
    e := echo.New()
    db := database.Connect()

    e.Use(func(next echo.HandlerFunc) echo.HandlerFunc {
        return func(c echo.Context) error {
            c.Set("db", db)
        return next(c)
        }
    })

    routes.ProductRoute(e)

    e.Logger.Fatal(e.Start(":8080"))
}
