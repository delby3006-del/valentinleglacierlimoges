const { Pool } = require("pg");

const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
      }
    : {
        user: "postgres",
        host: "172.27.117.221",
        database: "valentin_glacier",
        password: "gogo12",
        port: 5432,
      },
);

module.exports = pool;
