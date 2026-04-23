const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const { actif, id_type } = req.query;

  let sql = `
    SELECT g.id_glace, g.nom_glace, g.bio, g.actif, g.id_type, t.nom_type
    FROM glaces_parfums g
    JOIN glaces_type t ON g.id_type = t.id_type
    WHERE 1=1
  `;

  const params = [];

  if (actif !== undefined) {
    sql += ` AND g.actif = ?`;
    params.push(actif);
  }

  if (id_type !== undefined) {
    sql += ` AND g.id_type = ?`;
    params.push(id_type);
  }

  sql += ` ORDER BY g.nom_glace ASC`;

  db.all(sql, params, (err, rows) => {
    if (err) {
      console.error("Erreur SQL :", err.message);
      return res.status(500).json({ erreur: err.message });
    }

    res.json(rows);
  });
});

router.put("/:id", (req, res) => {
  console.log("ID reçu :", req.params.id);
  console.log("BODY reçu :", req.body);

  const { id } = req.params;

  if (!req.body) {
    return res.status(400).json({
      succes: false,
      erreur: "Body manquant",
    });
  }

  const { actif } = req.body;

  if (actif === undefined) {
    return res.status(400).json({
      succes: false,
      erreur: "actif manquant",
    });
  }

  const sql = `
    UPDATE glaces_parfums
    SET actif = ?
    WHERE id_glace = ?
  `;

  db.run(sql, [Number(actif), Number(id)], function (err) {
    if (err) {
      console.error("Erreur SQL :", err.message);
      return res.status(500).json({
        succes: false,
        erreur: err.message,
      });
    }

    res.json({
      succes: true,
      message: "État mis à jour",
    });
  });
});

module.exports = router;
