/*const express = require("express")
const dataController = require("../Controller/data");

//We are linking our data.js file with our /api main
const dataRouter = express.Router();

//creating route
dataRouter.route("/details")

//calling the data.js from Controller
.get(dataController.dataApi)

module.exports = dataRouter;*/

const express = require("express");
const dataController = require("../controller/data");

const detailsController = express.Router();
detailsController.route("/details")
.get(dataController.dataApi)

module.exports = detailsController;