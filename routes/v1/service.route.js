const express = require("express");

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
  .get((req, res) => {
    res.send("tools found with id");
  })
  .post((req, res) => {
    res.send("tools added");
  });

module.exports = router;
