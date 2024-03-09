package controllers

import (
    "strconv"
    "net/http"
    "gorm.io/gorm"
    "github.com/go-playground/validator/v10"
    "github.com/labstack/echo/v4"
    "project_5/server/models"
)

type PaymentController struct{}

func (w *PaymentController) GetPayments(c echo.Context) error {
    db := c.Get("db").(*gorm.DB)

    var payments []models.Payment
    db.Find(&payments)

    return c.JSON(http.StatusOK, &payments)
}

func (w *PaymentController) GetPaymentById(c echo.Context) error {
    db := c.Get("db").(*gorm.DB)

    id, _ := strconv.Atoi(c.Param("id"))
    var payment models.Payment

    db.First(&payment, id)

    if payment.ID == 0 {
        return c.JSON(http.StatusNotFound, "Payment with id "+c.Param("id")+" not found")
    }

    return c.JSON(http.StatusOK, &payment)
}

func (w *PaymentController) CreatePayment(c echo.Context) error {
    db := c.Get("db").(*gorm.DB)
    var validate = validator.New()

    var payment models.Payment

    if err := c.Bind(&payment); err != nil {
        return c.JSON(http.StatusBadRequest, "Error")
    }

    if validationErr := validate.Struct(&payment); validationErr != nil {
        return c.JSON(http.StatusBadRequest, validationErr.Error())
    }

    db.Create(&payment)

    return c.JSON(http.StatusCreated, &payment)
}

func (w *PaymentController) DeletePayment(c echo.Context) error {
    db := c.Get("db").(*gorm.DB)

    id, _ := strconv.Atoi(c.Param("id"))
    var payment models.Payment

    db.First(&payment, id)
    if payment.ID == 0 {
        return c.JSON(http.StatusNotFound, "Payment with id "+c.Param("id")+" not found")
    }

    db.Delete(&models.Payment{}, id)

    return c.NoContent(http.StatusOK)
}
