// app/models/Category.scala

package models

import play.api.libs.json._

case class Category(id: Long, name: String, description: String)

object Category {
  implicit val categoryFormat: OFormat[Category] = Json.format[Category]
}
