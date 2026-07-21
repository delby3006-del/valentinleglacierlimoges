const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT 
        g.id_glace,
        g.nom_glace,
        g.nom_parfum_en,
        g.id_type,
        t.nom_type,
        g.bio,
        g.actif,
        COALESCE(
          JSON_AGG(a.nom_allergene ORDER BY a.nom_allergene)
          FILTER (WHERE a.nom_allergene IS NOT NULL),
          '[]'
        ) AS allergenes
      FROM glaces_parfums g
      JOIN glaces_type t
        ON t.id_type = g.id_type
      LEFT JOIN glaces_allergenes ga
        ON ga.id_glace = g.id_glace
      LEFT JOIN allergenes a
        ON a.id_allergene = ga.id_allergene
      WHERE g.actif = 1
      GROUP BY
        g.id_glace,
        g.nom_glace,
        g.nom_parfum_en,
        g.id_type,
        t.nom_type,
        g.bio,
        g.actif
      ORDER BY COALESCE(g.nom_parfum_en, g.nom_glace);
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Erreur route TV anglais :", error);

    res.status(500).json({
      message: "Erreur serveur",
      erreur: error.message,
    });
  }
});

module.exports = router;