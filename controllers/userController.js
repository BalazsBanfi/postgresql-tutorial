const db = require("../db/queries");

/*const getUsers = (req, res) => {
  res.render("pages/index", {
    title: "List users",
  });
};*/

async function getUsers(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("pages/index", {
    users: usernames,
    title: "Users",
  });
}

const getNewUser = (req, res) => {
  res.render("pages/new", {
    title: "New user",
  });
};

async function postNewUser(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
  console.log("username to be saved: ", req.body.username);
}

module.exports = { getUsers, getNewUser, postNewUser };
