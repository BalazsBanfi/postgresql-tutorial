const getUsers = (req, res) => {
  res.render("pages/index", {
    title: "List users",
  });
};

const getNewUser = (req, res) => {
  res.render("pages/new", {
    title: "New user",
  });
};

const postNewUser = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};

module.exports = { getUsers, getNewUser, postNewUser };
