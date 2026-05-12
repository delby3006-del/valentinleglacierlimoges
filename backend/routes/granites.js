const express = require("express");
const router = express.Router();
const db = require("../db");
const authAdmin = require("../middlewares/authAdmin");

// GET /api/granites
router.get("/", async (req, res) => {
  const { actif } = req.query;

  let sql = `
    SELECT 
      id_granite,
      nom_granite,
      actif
    FROM granites
  `;

  if (actif === "1") {
    sql += ` WHERE actif = 1`;
  }

  sql += ` ORDER BY nom_granite`;

  try {
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (error) {
    console.error("Erreur GET granites :", error);
    res.status(500).json({ erreur: "Erreur serveur granites" });
  }
});

router.put("/tout", authAdmin, async (req, res) => {
  const { actif } = req.body;

  try {
    await db.query("UPDATE granites SET actif = $1", [actif]);

    res.json({ ok: true });
  } catch (error) {
    console.error("Erreur update tous granités :", error);
    res.status(500).json({ erreur: "Erreur serveur" });
  }
});

// PUT /api/granites/:id
router.put("/:id", authAdmin, async (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  try {
    const result = await db.query(
      `
      UPDATE granites
      SET actif = $1
      WHERE id_granite = $2
      RETURNING *
      `,
      [actif, id],
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erreur PUT granites :", error);
    res.status(500).json({ erreur: "Erreur modification granité" });
  }
});

// PUT /api/granites/tout
router.put("/tout", authAdmin, async (req, res) => {
  const { actif } = req.body;

  try {
    await db.query(
      `
      UPDATE granites
      SET actif = $1
      `,
      [actif],
    );

    res.json({ message: "Tous les granités mis à jour" });
  } catch (error) {
    console.error("Erreur update tous granités :", error);
    res.status(500).json({ erreur: "Erreur serveur" });
  }
});
router.put("/tout", authAdmin, async (req, res) => {
  const { actif } = req.body;

  try {
    await db.query("UPDATE granites SET actif = $1", [actif]);
    res.json({ ok: true });
  } catch (error) {
    console.error("Erreur update tous granités :", error);
    res.status(500).json({ erreur: "Erreur serveur" });
  }
});

module.exports = router;
