const express = require("express");

const toolsController = require("../../controllers/tools.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/viewCount");

const router = express.Router();

// router.get("/:id", (req, res) => {
//   res.send("tools found with id");
// });

// router.post("/", (req, res) => {
//   res.send("tools added");
// });

/**
 * @api {get}/tools All tools
 * @apiDescription Get all the tools
 * @apiPermission admin
 *
 * @apiHeader {string} Authorization User's access token
 *
 * @apiParam {Number{1-}} [page-1] List page
 * @apiParam {Number{1-100}} [linit-10] user per page
 *
 * @apiSuccess {object[]} all the tools
 *
 * @apiError {unauthorized 401} Unauthorized only authenticated users can access the data
 * @apiError {Forbidden 403} Forbidden only admins can access the data
 */

router
  .route("/")

  /**
   * @api {get}/tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {string} Authorization User's access token
   *
   * @apiParam {Number{1-}} [page-1] List page
   * @apiParam {Number{1-100}} [linit-10] user per page
   *
   * @apiSuccess {object[]} all the tools
   *
   * @apiError {unauthorized 401} Unauthorized only authenticated users can access the data
   * @apiError {Forbidden 403} Forbidden only admins can access the data
   */
  .get(toolsController.getAllTools)
  /**
   * @api {post}/tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {string} Authorization User's access token
   *
   * @apiParam {Number{1-}} [page-1] List page
   * @apiParam {Number{1-100}} [linit-10] user per page
   *
   * @apiSuccess {object[]} all the tools
   *
   * @apiError {unauthorized 401} Unauthorized only authenticated users can access the data
   * @apiError {Forbidden 403} Forbidden only admins can access the data
   */
  .post(toolsController.saveATool);

router
  .route("/:id")
  .get(viewCount, limiter, toolsController.getToolDetail)
  .patch(toolsController.updateTool)
  .delete(toolsController.deleteTool);

module.exports = router;

let services = {
  id: 1,
  name: "hammer",
};
const newServices = { name: "test" };

//put

services = { name: "test" };

//patch

services = { id: 1, name: "test" };
