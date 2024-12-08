const getUsers = (req, res) => {
    res.send("usernames will be logged here - wip");
}

const getNewUser = (req, res) => {
    res.render("pages/index", {
        title: "New user",
    });
};

const postNewUser = (req, res) => {
    console.log("username to be saved: ", req.body.username);
}

module.exports = { getUsers, getNewUser, postNewUser };