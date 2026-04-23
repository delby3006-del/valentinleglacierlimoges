const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.all("SELECT * FROM granites ORDER BY nom_granite ASC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }
    res.json(rows);
  });
});

router.get("/actifs", (req, res) => {
  db.all(
    "SELECT * FROM granites WHERE actif = 1 ORDER BY nom_granite ASC",
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
  const { nom_granite, actif } = req.body;

  db.run(
    "INSERT INTO granites (nom_granite, actif) VALUES (?, ?)",
    [nom_granite, actif ?? 1],
    function (err) {
      if (err) {
        return res.status(500).json({ erreur: err.message });
      }
      res.json({
        message: "Granité ajouté",
        id_granite: this.lastID,
      });
    },
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nom_granite, actif } = req.body;

  db.run(
    "UPDATE granites SET nom_granite = ?, actif = ? WHERE id_granite = ?",
    [nom_granite, actif, id],
    function (err) {
      if (err) {
        return res.status(500).json({ erreur: err.message });
      }
      res.json({ message: "Granité modifié" });
    },
  );
});

router.patch("/:id/actif", (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  db.run(
    "UPDATE granites SET actif = ? WHERE id_granite = ?",
    [actif, id],
    function (err) {
      if (err) {
        return res.status(500).json({ erreur: err.message });
      }
      res.json({ message: "Disponibilité modifiée" });
    },
  );
});

module.exports = router;
