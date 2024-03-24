// app/controllers/CategoryController.scala

package controllers

import javax.inject._
import play.api.mvc._
import play.api.libs.json._

import models.Category

import scala.concurrent.ExecutionContext
import scala.concurrent.Future

@Singleton
class CategoryController @Inject()(val controllerComponents: ControllerComponents)(implicit ec: ExecutionContext) extends BaseController {

  private var categories: List[Category] = List(
    Category(1, "Category 1", "Category 1 description"),
    Category(2, "Category 2", "Category 2 description")
  )

  def getAllCategories: Action[AnyContent] = Action.async { implicit request =>
    Future.successful(Ok(Json.toJson(categories)))
  }

  def getCategoryById(id: Long): Action[AnyContent] = Action.async { implicit request =>
    categories.find(_.id == id) match {
      case Some(category) => Future.successful(Ok(Json.toJson(category)))
      case None => Future.successful(NotFound)
    }
  }

  def addCategory: Action[JsValue] = Action.async(parse.json) { implicit request =>
    request.body.validate[Category] match {
      case JsSuccess(category, _) =>
        categories = categories :+ category
        Future.successful(Created)
      case JsError(_) => Future.successful(BadRequest)
    }
  }

  def updateCategory(id: Long): Action[JsValue] = Action.async(parse.json) { implicit request =>
    request.body.validate[Category] match {
      case JsSuccess(updatedCategory, _) =>
        categories.find(_.id == id) match {
          case Some(_) =>
            categories = categories.map(c => if (c.id == id) updatedCategory else c)
            Future.successful(Ok)
          case None => Future.successful(NotFound)
        }
      case JsError(_) => Future.successful(BadRequest)
    }
  }

  def deleteCategory(id: Long): Action[AnyContent] = Action.async { implicit request =>
    categories.find(_.id == id) match {
      case Some(_) =>
        categories = categories.filterNot(_.id == id)
        Future.successful(Ok)
      case None => Future.successful(NotFound)
    }
  }
}
