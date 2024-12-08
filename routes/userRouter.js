const { Router } = require("express");
const userRouter = Router();
const userControllers = require("../controllers/userController");

userRouter.get("/", userControllers.getUsers);
userRouter.get("/new", userControllers.getNewUser)
userRouter.post("/new", userControllers.postNewUser)


module.exports = userRouter;