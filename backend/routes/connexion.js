const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, mot_de_passe } = req.body;

  try {
    const result = await db.query(
      `SELECT id_admin, nom, email, mot_de_passe, actif
       FROM admins
       WHERE email = $1`,
      [email],
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        succes: false,
        message: "Identifiants incorrects",
      });
    }

    const admin = result.rows[0];

    if (Number(admin.actif) !== 1) {
      return res.status(403).json({
        succes: false,
        message: "Compte inactif",
      });
    }

    const passwordOK = await bcrypt.compare(mot_de_passe, admin.mot_de_passe);

    if (!passwordOK) {
      return res.status(401).json({
        succes: false,
        message: "Identifiants incorrects",
      });
    }

    // 🔥 ICI QUE TU METS TON JWT
    const token = jwt.sign(
      { id_admin: admin.id_admin, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
    );

    res.json({
      succes: true,
      message: "Connexion réussie",
      token,
    });
  } catch (err) {
    console.error("Erreur connexion :", err.message);
    res.status(500).json({
      succes: false,
      message: "Erreur serveur",
    });
  }
});

module.exports = router;
