const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
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

  try {
    const result = await db.query(sql);
    const rows = result.rows;

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
  } catch (err) {
    console.error("Erreur SQL gourmandises :", err.message);
    res.status(500).json({ erreur: err.message });
  }
});

router.put("/type/:id", async (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  const sql = `
    UPDATE gourmandises_type
    SET actif = $1
    WHERE id_gourmandise_type = $2
  `;

  try {
    await db.query(sql, [Number(actif), Number(id)]);

    res.json({
      succes: true,
      message: "Type mis à jour",
    });
  } catch (err) {
    console.error("Erreur update type :", err.message);
    res.status(500).json({
      succes: false,
      erreur: err.message,
    });
  }
});

router.put("/liaison/:id", async (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  const sql = `
    UPDATE gourmandises_type_garnitures
    SET actif = $1
    WHERE id_liaison = $2
  `;

  try {
    await db.query(sql, [Number(actif), Number(id)]);

    res.json({
      succes: true,
      message: "Liaison mise à jour",
    });
  } catch (err) {
    console.error("Erreur update liaison :", err.message);
    res.status(500).json({
      succes: false,
      erreur: err.message,
    });
  }
});

router.put("/type/:id/activer-garnitures", async (req, res) => {
  const { id } = req.params;

  const sql = `
    UPDATE gourmandises_type_garnitures
    SET actif = 1
    WHERE id_gourmandise_type = $1
  `;

  try {
    await db.query(sql, [Number(id)]);

    res.json({
      succes: true,
      message: "Garnitures du type activées",
    });
  } catch (err) {
    console.error("Erreur activation auto garnitures :", err.message);
    res.status(500).json({
      succes: false,
      erreur: err.message,
    });
  }
});

module.exports = router;
