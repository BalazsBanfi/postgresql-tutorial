const { Router } = require("express");
const indexRouter = Router();
const controllers = require("../controllers/controller");

indexRouter.get("/", controllers.getIndex);

indexRouter.get("/new", controllers.getNew)

indexRouter.post("/new", controllers.postIndex)

module.exports = indexRouter;