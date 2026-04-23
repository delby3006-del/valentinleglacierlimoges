const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const sql = `
    SELECT 
      gt.id_gourmandise_type,
      gt.nom_gourmandise_type,
      gt.actif AS type_actif,

      g.id_garniture,
      g.nom_garniture,

      gtg.id_liaison,
      gtg.actif AS liaison_actif

    FROM gourmandises_type gt

    LEFT JOIN gourmandises_type_garnitures gtg
      ON gt.id_gourmandise_type = gtg.id_gourmandise_type

    LEFT JOIN gourmandises_garnitures g
      ON gtg.id_garniture = g.id_garniture

    ORDER BY gt.id_gourmandise_type, g.id_garniture
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Erreur SQL gourmandises :", err.message);
      return res.status(500).json({ erreur: err.message });
    }

    const gourmandisesMap = {};

    rows.forEach((row) => {
      if (!gourmandisesMap[row.id_gourmandise_type]) {
        gourmandisesMap[row.id_gourmandise_type] = {
          id_gourmandise_type: row.id_gourmandise_type,
          nom_gourmandise_type: row.nom_gourmandise_type,
          actif: row.type_actif,
          garnitures: [],
        };
      }

      if (row.id_garniture) {
        gourmandisesMap[row.id_gourmandise_type].garnitures.push({
          id_liaison: row.id_liaison,
          id_garniture: row.id_garniture,
          nom_garniture: row.nom_garniture,
          actif: row.liaison_actif,
        });
      }
    });

    res.json(Object.values(gourmandisesMap));
  });
});

router.put("/type/:id", (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  const sql = `
    UPDATE gourmandises_type
    SET actif = ?
    WHERE id_gourmandise_type = ?
  `;

  db.run(sql, [actif, id], function (err) {
    if (err) {
      console.error("Erreur update type :", err.message);
      return res.status(500).json({
        succes: false,
        erreur: err.message,
      });
    }

    res.json({
      succes: true,
      message: "Type mis à jour",
      changes: this.changes,
    });
  });
});

router.put("/liaison/:id", (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  const sql = `
    UPDATE gourmandises_type_garnitures
    SET actif = ?
    WHERE id_liaison = ?
  `;

  db.run(sql, [actif, id], function (err) {
    if (err) {
      console.error("Erreur update liaison :", err.message);
      return res.status(500).json({
        succes: false,
        erreur: err.message,
      });
    }

    res.json({
      succes: true,
      message: "Liaison mise à jour",
      changes: this.changes,
    });
  });
});

router.put("/type/:id/activer-garnitures", (req, res) => {
  const { id } = req.params;

  const sql = `
    UPDATE gourmandises_type_garnitures
    SET actif = 1
    WHERE id_gourmandise_type = ?
  `;

  db.run(sql, [id], function (err) {
    if (err) {
      console.error("Erreur activation auto garnitures :", err.message);
      return res.status(500).json({
        succes: false,
        erreur: err.message,
      });
    }

    res.json({
      succes: true,
      message: "Garnitures du type activées",
      changes: this.changes,
    });
  });
});

module.exports = router;
