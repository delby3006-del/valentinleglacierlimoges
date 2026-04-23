const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "database", "valentin_glacier.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erreur connexion BDD :", err.message);
  } else {
    console.log("Connecté à SQLite");
  }
});

module.exports = db;
