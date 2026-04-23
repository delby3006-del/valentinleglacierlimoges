const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.all(
    "SELECT * FROM machines_italiennes ORDER BY id_machine ASC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ erreur: err.message });
      }
      res.json(rows);
    },
  );
});

module.exports = router;
