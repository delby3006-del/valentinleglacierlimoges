const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const sql = `
    SELECT 
      bt.id_type,
      bt.nom_type,

      bn.id_boisson,
      bn.nom_boisson,
      bn.actif AS boisson_actif

    FROM boissons_type bt

    LEFT JOIN boissons_nom bn
      ON bt.id_type = bn.id_type

    ORDER BY bt.id_type, bn.id_boisson
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Erreur SQL boissons :", err.message);
      return res.status(500).json({ erreur: err.message });
    }

    const boissonsMap = {};

    rows.forEach((row) => {
      if (!boissonsMap[row.id_type]) {
        boissonsMap[row.id_type] = {
          id_type: row.id_type,
          nom_type: row.nom_type,
          boissons: [],
        };
      }

      if (row.id_boisson) {
        boissonsMap[row.id_type].boissons.push({
          id_boisson: row.id_boisson,
          nom_boisson: row.nom_boisson,
          actif: row.boisson_actif,
        });
      }
    });

    res.json(Object.values(boissonsMap));
  });
});

router.put("/boisson/:id", (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  const sql = `
    UPDATE boissons_nom
    SET actif = ?
    WHERE id_boisson = ?
  `;

  db.run(sql, [actif, id], function (err) {
    if (err) {
      console.error("Erreur update boisson :", err.message);
      return res.status(500).json({
        succes: false,
        erreur: err.message,
      });
    }

    res.json({
      succes: true,
      message: "Boisson mise à jour",
      changes: this.changes,
    });
  });
});

module.exports = router;
