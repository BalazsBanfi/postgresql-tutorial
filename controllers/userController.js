const db = require("../db/queries");

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

async function getDeleteUsers(req, res) {
  await db.deleteUsers();
  res.redirect("/");
  console.log("users deleted");
}


module.exports = { getUsers, getNewUser, postNewUser, getDeleteUsers };
