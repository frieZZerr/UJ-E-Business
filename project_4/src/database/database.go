// database/database.go

package database

import (
    "gorm.io/gorm"
    "gorm.io/driver/sqlite"
    "project_4/src/models"
)

func Connect() *gorm.DB {
    db, err := gorm.Open(sqlite.Open("data.db"))

    if err != nil {
        panic("Failed to connect with database")
    }

    db.AutoMigrate(&models.Product{})
    db.AutoMigrate(&models.Cart{})
    db.AutoMigrate(&models.Category{})

    return db
}
