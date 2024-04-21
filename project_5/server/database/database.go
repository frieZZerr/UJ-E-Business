package database

import (
    "gorm.io/gorm"
    "gorm.io/driver/sqlite"
    "project_5/server/models"
)

func Connect() *gorm.DB {
    db, err := gorm.Open(sqlite.Open("server/database/data.db"))

    if err != nil {
        panic("Failed to connect with database")
    }

    db.AutoMigrate(&models.Product{})
	db.AutoMigrate(&models.Payment{})

	var count int64
    db.Model(&models.Product{}).Count(&count)
    if count == 0 {
        exampleProducts := []models.Product{
            {Name: "Product 1", Price: 10},
            {Name: "Product 2", Price: 20},
            {Name: "Product 3", Price: 30},
        }
        db.Create(&exampleProducts)
    }

    return db
}
