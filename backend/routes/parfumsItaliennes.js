const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.all(
    "SELECT * FROM parfums_italiennes ORDER BY nom_parfum_italienne ASC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ erreur: err.message });
      }
      res.json(rows);
    },
  );
});

router.post("/", (req, res) => {
  const { nom_parfum_italienne, bio } = req.body;

  db.run(
    "INSERT INTO parfums_italiennes (nom_parfum_italienne, bio) VALUES (?, ?)",
    [nom_parfum_italienne, bio ?? 1],
    function (err) {
      if (err) {
        return res.status(500).json({ erreur: err.message });
      }
      res.json({
        message: "Parfum italienne ajouté",
        id_parfum_italienne: this.lastID,
      });
    },
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nom_parfum_italienne, bio } = req.body;

  db.run(
    `
    UPDATE parfums_italiennes
    SET nom_parfum_italienne = ?, bio = ?
    WHERE id_parfum_italienne = ?
    `,
    [nom_parfum_italienne, bio, id],
    function (err) {
      if (err) {
        return res.status(500).json({ erreur: err.message });
      }
      res.json({ message: "Parfum italienne modifié" });
    },
  );
});

module.exports = router;
