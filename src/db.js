// const { Pool } = require("pg");

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASS,
//     port: process.env.DB_PORT,
// });

// module.exports = {
//     query: (text, params) => pool.query(text, params),
// };

const pgp = require("pg-promise")({
    // Initialization Options
});

// Preparing the connection details:
const cn = "postgres://postgres:postgres@localhost:5432/postgres";

// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;
