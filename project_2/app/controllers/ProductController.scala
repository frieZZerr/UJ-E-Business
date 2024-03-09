// app/controllers/ProductController.scala

package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._

import models.Product

import scala.concurrent.ExecutionContext
import scala.concurrent.Future

@Singleton
class ProductController @Inject()(val controllerComponents: ControllerComponents)(implicit ec: ExecutionContext) extends BaseController {

  private var products: List[Product] = List(
    Product(1, "Product 1", 10.99),
    Product(2, "Product 2", 20.99),
    Product(3, "Product 3", 30.99)
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
}
