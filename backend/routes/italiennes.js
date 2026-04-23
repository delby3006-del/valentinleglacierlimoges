const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const sql = `
    SELECT 
      i.id_italienne,
      i.id_machine,
      m.nom_machine,
      i.id_parfum_italienne,
      p.nom_parfum_italienne,
      p.bio,
      i.actif,
      i.date_maj
    FROM italiennes i
    JOIN machines_italiennes m ON i.id_machine = m.id_machine
    JOIN parfums_italiennes p ON i.id_parfum_italienne = p.id_parfum_italienne
    ORDER BY m.id_machine ASC, i.id_italienne DESC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }
    res.json(rows);
  });
});

router.get("/actives", (req, res) => {
  const sql = `
    SELECT 
      i.id_italienne,
      i.id_machine,
      m.nom_machine,
      i.id_parfum_italienne,
      p.nom_parfum_italienne,
      p.bio,
      i.actif,
      i.date_maj
    FROM italiennes i
    JOIN machines_italiennes m ON i.id_machine = m.id_machine
    JOIN parfums_italiennes p ON i.id_parfum_italienne = p.id_parfum_italienne
    WHERE i.actif = 1
    ORDER BY m.id_machine ASC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }
    res.json(rows);
  });
});

router.post("/", (req, res) => {
  const { id_machine, id_parfum_italienne, actif } = req.body;

  const desactiverAncienne = `
    UPDATE italiennes
    SET actif = 0
    WHERE id_machine = ? AND actif = 1
  `;

  db.run(desactiverAncienne, [id_machine], function (err) {
    if (err) {
      return res.status(500).json({ erreur: err.message });
    }

    const ajouterNouvelle = `
      INSERT INTO italiennes (id_machine, id_parfum_italienne, actif)
      VALUES (?, ?, ?)
    `;

    db.run(
      ajouterNouvelle,
      [id_machine, id_parfum_italienne, actif ?? 1],
      function (err) {
        if (err) {
          return res.status(500).json({ erreur: err.message });
        }

        res.json({
          message: "Parfum affecté à la machine",
          id_italienne: this.lastID,
        });
      },
    );
  });
});

router.patch("/:id/actif", (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  db.run(
    "UPDATE italiennes SET actif = ? WHERE id_italienne = ?",
    [actif, id],
    function (err) {
      if (err) {
        return res.status(500).json({ erreur: err.message });
      }
      res.json({ message: "Statut italienne modifié" });
    },
  );
});

module.exports = router;
