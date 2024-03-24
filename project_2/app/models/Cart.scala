// app/models/Cart.scala

package models

import play.api.libs.json._

case class CartItem(productId: Long, quantity: Int)

object CartItem {
  implicit val cartItemFormat: Format[CartItem] = Json.format[CartItem]
}

case class Cart(items: List[CartItem])

object Cart {
  implicit val cartFormat: Format[Cart] = new Format[Cart] {
    override def reads(json: JsValue): JsResult[Cart] =
      json.validate[List[CartItem]].map(Cart(_))

    override def writes(cart: Cart): JsValue =
      Json.toJson(cart.items)
  }

  def empty: Cart = Cart(Nil)
}
