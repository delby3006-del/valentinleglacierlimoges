const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const { actif, id_type } = req.query;

  let sql = `
    SELECT g.id_glace, g.nom_glace, g.bio, g.actif, g.id_type, t.nom_type
    FROM glaces_parfums g
    JOIN glaces_type t ON g.id_type = t.id_type
    WHERE 1=1
  `;

  const params = [];
  let paramIndex = 1;

  if (actif !== undefined) {
    sql += ` AND g.actif = $${paramIndex}`;
    params.push(actif);
    paramIndex++;
  }

  if (id_type !== undefined) {
    sql += ` AND g.id_type = $${paramIndex}`;
    params.push(id_type);
    paramIndex++;
  }

  sql += ` ORDER BY g.nom_glace ASC`;

  try {
    const result = await db.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    console.error("Erreur SQL :", err.message);
    res.status(500).json({ erreur: err.message });
  }
});

router.put("/:id", async (req, res) => {
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
    SET actif = $1
    WHERE id_glace = $2
  `;

  try {
    await db.query(sql, [actif, id]);

    res.json({
      succes: true,
      message: "État mis à jour",
    });
  } catch (err) {
    console.error("Erreur SQL :", err.message);
    res.status(500).json({
      succes: false,
      erreur: err.message,
    });
  }
});

module.exports = router;
