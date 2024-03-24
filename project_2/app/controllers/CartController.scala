// app/controllers/CartController.scala

package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._

import models._

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class CartController @Inject()(val controllerComponents: ControllerComponents)(implicit ec: ExecutionContext) extends BaseController {

  private var cart: Cart = Cart(List(
    CartItem(1, 2),
    CartItem(3, 6)
  ))

  def getCart: Action[AnyContent] = Action.async { implicit request =>
    Future.successful(Ok(Json.toJson(cart)))
  }

  def addItemToCart: Action[JsValue] = Action.async(parse.json) { implicit request =>
    request.body.validate[CartItem] match {
      case JsSuccess(cartItem, _) =>
        cart = Cart(cart.items :+ cartItem)
        Future.successful(Created)
      case JsError(_) => Future.successful(BadRequest)
    }
  }

  def updateCartItemQuantity(productId: Long, quantity: Int): Action[AnyContent] = Action.async { implicit request =>
    val updatedCartItems = cart.items.map {
      case CartItem(id, q) if id == productId => CartItem(id, quantity)
      case cartItem => cartItem
    }
    cart = Cart(updatedCartItems)
    Future.successful(Ok)
  }

  def removeItemFromCart(productId: Long): Action[AnyContent] = Action.async { implicit request =>
    cart.items.find(_.productId == productId) match {
      case Some(_) =>
        val updatedCartItems = cart.items.filterNot(_.productId == productId)
        cart = Cart(updatedCartItems)
        Future.successful(Ok)
      case None => Future.successful(NotFound)
    }
  }
}
