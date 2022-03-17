// const Pool = require("pg").Pool
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "",
  password: "",
  port: 5432,
  database: "express-react-blog",
});

module.exports = pool;
