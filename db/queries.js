const pool = require('./pool');

const getAllUsernames = async (search) => {
  if (search) {
    const { rows } = await pool.query(`SELECT * FROM usernames WHERE username LIKE '%${search}%' `);
    return rows;
  } else {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
  }


}

const insertUsername = async (username) => {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

const deleteUsers = async () => {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteUsers
};
