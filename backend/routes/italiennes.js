const express = require("express");
const router = express.Router();
const db = require("../db");
const authAdmin = require("../middlewares/authAdmin");

// GET /api/italiennes
router.get("/", async (req, res) => {
  const { actif } = req.query;

  let sql = `
    SELECT 
      mi.id_machine,
      mi.nom_machine,
      mi.actif AS machine_actif,

      i.id_italienne,
      i.actif AS parfum_actif,

      pi.id_parfum_italienne,
      pi.nom_parfum_italienne,
      pi.bio

    FROM machines_italiennes mi

    LEFT JOIN italiennes i
      ON mi.id_machine = i.id_machine

    LEFT JOIN parfums_italiennes pi
      ON i.id_parfum_italienne = pi.id_parfum_italienne
  `;

  if (actif === "1") {
    sql += `
      WHERE mi.actif = 1
      AND i.actif = 1
    `;
  }

  sql += `
    ORDER BY mi.id_machine, pi.nom_parfum_italienne
  `;

  try {
    const result = await db.query(sql);
    const rows = result.rows;

    const machinesMap = new Map();

    rows.forEach((row) => {
      if (!machinesMap.has(row.id_machine)) {
        machinesMap.set(row.id_machine, {
          id_machine: row.id_machine,
          nom_machine: row.nom_machine,
          actif: row.machine_actif,
          parfums: [],
        });
      }

      if (row.id_italienne) {
        machinesMap.get(row.id_machine).parfums.push({
          id_italienne: row.id_italienne,
          id_parfum_italienne: row.id_parfum_italienne,
          nom_parfum_italienne: row.nom_parfum_italienne,
          bio: row.bio,
          actif: row.parfum_actif,
        });
      }
    });

    res.json(Array.from(machinesMap.values()));
  } catch (error) {
    console.error("Erreur GET italiennes :", error);
    res.status(500).json({ erreur: "Erreur serveur" });
  }
});

// PUT /api/italiennes/machines/:id
router.put("/machines/:id", authAdmin, async (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  if (actif !== 0 && actif !== 1) {
    return res.status(400).json({ erreur: "actif doit être 0 ou 1" });
  }

  try {
    await db.query(
      `
      UPDATE machines_italiennes
      SET actif = $1
      WHERE id_machine = $2
      `,
      [actif, id],
    );

    res.json({ message: "Machine italienne mise à jour" });
  } catch (error) {
    console.error("Erreur PUT machine italienne :", error);
    res.status(500).json({ erreur: "Erreur serveur" });
  }
});

// PUT /api/italiennes/:id
router.put("/:id", authAdmin, async (req, res) => {
  const { id } = req.params;
  const { actif } = req.body;

  if (actif !== 0 && actif !== 1) {
    return res.status(400).json({ erreur: "actif doit être 0 ou 1" });
  }

  try {
    if (actif === 1) {
      const verif = await db.query(
        `
        SELECT COUNT(*) AS total
        FROM italiennes
        WHERE id_machine = (
          SELECT id_machine
          FROM italiennes
          WHERE id_italienne = $1
        )
        AND actif = 1
        AND id_italienne != $1
        `,
        [id],
      );

      if (Number(verif.rows[0].total) >= 2) {
        return res.status(400).json({
          erreur: "Maximum 2 parfums actifs par machine",
        });
      }
    }

    await db.query(
      `
      UPDATE italiennes
      SET actif = $1
      WHERE id_italienne = $2
      `,
      [actif, id],
    );

    res.json({ message: "Parfum italien mis à jour" });
  } catch (error) {
    console.error("Erreur PUT italiennes :", error);
    res.status(500).json({ erreur: "Erreur serveur" });
  }
});

module.exports = router;
