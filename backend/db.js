const { Pool } = require("pg");

const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      }
    : {
        user: "postgres",
        host: "172.xxx.xxx.xxx",
        database: "valentin_glacier",
        password: "gogo12",
        port: 5432,
      },
);

module.exports = pool;
