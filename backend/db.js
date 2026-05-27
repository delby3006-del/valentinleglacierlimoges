const { Pool } = require("pg");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const db = isProduction
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    })
  : new Pool({
      user: "postgres",
      host: "localhost",
      database: "valentinleglacier",
      password: "gogo12",
      port: 5432,
      ssl: false,
    });

module.exports = db;
