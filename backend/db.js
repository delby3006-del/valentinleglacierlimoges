// const { Pool } = require("pg");

// const pool = new Pool(
//   process.env.DATABASE_URL
//     ? {
//         connectionString: process.env.DATABASE_URL,
//         ssl: { rejectUnauthorized: false },
//       }
//     : {
//         user: "postgres",
//         host: "172.xxx.xxx.xxx",
//         database: "valentin_glacier",
//         password: "gogo12",
//         port: 5432,
//       },
// );

// module.exports = pool;

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
      database: "valentinleglacierlimoges",
      password: "GOGO12",
      port: 5432,
      ssl: false,
    });

module.exports = db;
