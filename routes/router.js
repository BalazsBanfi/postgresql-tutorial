const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("usernames will be logged here - wip");
})

indexRouter.get("/new", (req, res) => {
    res.send("usernames will be logged here - wip");
})

indexRouter.post("/new", (req, res) => {
    console.log("username to be saved: ", req.body.username);
})

module.exports = indexRouter;