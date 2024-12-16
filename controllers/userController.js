const db = require('../db/queries');
const asyncHandler = require('express-async-handler')
const { CustomDbError } = require('../errors/CustomErrors');


const getUsers = asyncHandler(async (req, res) => {
  const search = req.query.search || undefined;
  const usernames = await db.getAllUsernames(search);
  console.log("Usernames: ", usernames);
  console.log('Query: ', search)
  if (!usernames.length) {
    throw new CustomDbError('db is empty');
  }
  res.render("pages/index", {
    users: usernames,
    title: "Users",
  });
})


const getNewUser = asyncHandler(async (req, res) => {
  res.render("pages/new", {
    title: "New user",
  });
})

const postNewUser = asyncHandler(async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
  console.log("username to be saved: ", req.body.username);
})

const getDeleteUsers = asyncHandler(async (req, res) => {
  await db.deleteUsers();
  res.redirect("/");
  console.log("users deleted");
})


module.exports = { getUsers, getNewUser, postNewUser, getDeleteUsers };
