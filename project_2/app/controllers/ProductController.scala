// app/controllers/ProductController.scala

package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._

import models.Product
import models.Category

import scala.concurrent.ExecutionContext
import scala.concurrent.Future

@Singleton
class ProductController @Inject()(val controllerComponents: ControllerComponents)(implicit ec: ExecutionContext) extends BaseController {

  private var products: List[Product] = List(
    Product(1, "Product 1", 10.99, Category(1, "Category 1", "Category 1 description")),
    Product(2, "Product 2", 20.99, Category(1, "Category 1", "Category 1 description")),
    Product(3, "Product 3", 30.99, Category(2, "Category 2", "Category 2 description"))
  )

  def getAllProducts: Action[AnyContent] = Action.async { implicit request =>
    Future.successful(Ok(Json.toJson(products)))
  }

  def getProductById(id: Long): Action[AnyContent] = Action.async { implicit request =>
    products.find(_.id == id) match {
      case Some(product) => Future.successful(Ok(Json.toJson(product)))
      case None => Future.successful(NotFound)
    }
  }

  def addProduct: Action[JsValue] = Action.async(parse.json) { implicit request =>
    request.body.validate[Product] match {
      case JsSuccess(product, _) =>
        products = products :+ product
        Future.successful(Created)
      case JsError(_) => Future.successful(BadRequest)
    }
  }

  def updateProduct(id: Long): Action[JsValue] = Action.async(parse.json) { implicit request =>
    request.body.validate[Product] match {
      case JsSuccess(updatedProduct, _) =>
        products.find(_.id == id) match {
          case Some(_) =>
            products = products.map(p => if (p.id == id) updatedProduct else p)
            Future.successful(Ok)
          case None => Future.successful(NotFound)
        }
      case JsError(_) => Future.successful(BadRequest)
    }
  }

  def deleteProduct(id: Long): Action[AnyContent] = Action.async { implicit request =>
    products.find(_.id == id) match {
      case Some(_) =>
        products = products.filterNot(_.id == id)
        Future.successful(Ok)
      case None => Future.successful(NotFound)
    }
  }
}
