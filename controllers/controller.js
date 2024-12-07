const getIndex = (req, res) => {
    res.send("usernames will be logged here - wip");
}

const getNew = (req, res) => {
    res.send("Some html");
}

const postIndex = (req, res) => {
    console.log("username to be saved: ", req.body.username);
}

module.exports = { getIndex, getNew, postIndex };