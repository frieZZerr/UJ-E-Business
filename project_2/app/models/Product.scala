// app/models/Product.scala

package models

import play.api.libs.json._
import models.Category

case class Product(id: Long, name: String, price: Double, category: Category)

object Product {
  implicit val productFormat: OFormat[Product] = Json.format[Product]
}
