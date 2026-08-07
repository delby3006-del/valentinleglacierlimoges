const express = require("express");
const router = express.Router();
const db = require("../db");
const authAdmin = require("../middlewares/authAdmin");

router.get("/", async (req, res) => {
const sql = `
  SELECT 
    bt.id_type,
    bt.nom_type,
    bt.ordre_affichage,
    bn.id_boisson,
    bn.nom_boisson,
    bn.actif AS boisson_actif,
    bn."BIO" AS bio
  FROM boissons_type bt
  LEFT JOIN boissons_nom bn
    ON bt.id_type = bn.id_type
  ORDER BY bt.ordre_affichage, bn.id_boisson
`;

  try {
    const result = await db.query(sql);
    const rows = result.rows;

    const boissonsMap = new Map();

    rows.forEach((row) => {
      if (!boissonsMap.has(row.id_type)) {
        boissonsMap.set(row.id_type, {
          id_type: row.id_type,
          nom_type: row.nom_type,
          ordre_affichage: row.ordre_affichage,
          boissons: [],
        });
      }

      if (row.id_boisson) {
  boissonsMap.get(row.id_type).boissons.push({
    id_boisson: row.id_boisson,
    nom_boisson: row.nom_boisson,
    actif: row.boisson_actif,
    bio: row.bio,
  });
}
    });

    return res.json(Array.from(boissonsMap.values()));
  } catch (err) {
    console.error("Erreur SQL boissons :", err.message);
    return res.status(500).json({ erreur: err.message });
  }
});

router.put("/boisson/:id", authAdmin, async (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  const sql = `
    UPDATE boissons_nom
    SET actif = $1
    WHERE id_boisson = $2
  `;

  try {
    await db.query(sql, [actif, id]);

    res.json({
      succes: true,
      message: "Boisson mise à jour",
    });
  } catch (err) {
    console.error("Erreur update boisson :", err.message);
    res.status(500).json({
      succes: false,
      erreur: err.message,
    });
  }
});

router.put("/ordre", authAdmin, async (req, res) => {
  const { ordre } = req.body;

  try {
    for (const item of ordre) {
      await db.query(
        `
        UPDATE boissons_type
        SET ordre_affichage = $1
        WHERE id_type = $2
        `,
        [item.ordre_affichage, item.id_type],
      );
    }

    res.json({
      succes: true,
      message: "Ordre des boissons mis à jour",
    });
  } catch (err) {
    console.error("Erreur update ordre boissons :", err.message);
    res.status(500).json({
      succes: false,
      erreur: err.message,
    });
  }
});

module.exports = router;
