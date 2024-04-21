package models

import "gorm.io/gorm"

type Payment struct {
    gorm.Model
	ProductID uint   `json:"productId"`
    Amount    uint   `json:"amount"`
    Currency  string `json:"currency" gorm:"default:USD"`
    Status    string `json:"status" gorm:"default:Pending"`
}
