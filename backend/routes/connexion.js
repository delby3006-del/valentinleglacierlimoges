const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../db");

router.get("/", (req, res) => {
  res.json({ message: "Route connexion OK" });
});

router.post("/", (req, res) => {
  const { email, motDePasse } = req.body;

  if (!email || !motDePasse) {
    return res.status(400).json({
      succes: false,
      message: "Email et mot de passe requis",
    });
  }

  const sql = "SELECT * FROM admins WHERE email = ?";

  db.get(sql, [email], async (err, admin) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        succes: false,
        message: "Erreur serveur",
      });
    }

    if (!admin) {
      return res.status(401).json({
        succes: false,
        message: "Identifiants incorrects",
      });
    }

    if (admin.actif === 0) {
      return res.status(403).json({
        succes: false,
        message: "Compte désactivé",
      });
    }

    try {
      const valide = await bcrypt.compare(motDePasse, admin.mot_de_passe);

      if (!valide) {
        return res.status(401).json({
          succes: false,
          message: "Identifiants incorrects",
        });
      }

      return res.status(200).json({
        succes: true,
        message: "Connexion réussie",
        admin: {
          id: admin.id_admin,
          nom: admin.nom,
          email: admin.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        succes: false,
        message: "Erreur serveur",
      });
    }
  });
});

module.exports = router;
