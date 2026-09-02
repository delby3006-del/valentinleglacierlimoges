const express = require("express");
const router = express.Router();
const db = require("../db");

let cacheGoogle = {
  data: null,
  expiration: 0,
};

const CACHE_DUREE = 15 * 60 * 1000;

const recupererStatutGoogle = async () => {
  const maintenant = Date.now();

  if (cacheGoogle.data && maintenant < cacheGoogle.expiration) {
    return cacheGoogle.data;
  }

  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "currentOpeningHours.openNow,currentOpeningHours.nextOpenTime,currentOpeningHours.nextCloseTime",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Erreur Google Places");
  }

  const data = await response.json();

  const resultat = {
    ouvert: data.currentOpeningHours?.openNow ?? false,
    prochaine_ouverture:
      data.currentOpeningHours?.nextOpenTime ?? null,
    prochaine_fermeture:
      data.currentOpeningHours?.nextCloseTime ?? null,
  };

  cacheGoogle = {
    data: resultat,
    expiration: maintenant + CACHE_DUREE,
  };

  return resultat;
};

router.get("/", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT mode
      FROM statut_boutique
      LIMIT 1
    `);

    const mode = result.rows[0]?.mode || "automatique";

    if (mode === "ouvert") {
      return res.json({
        mode,
        statut: "ouvert",
        texte: "Nous sommes ouverts",
      });
    }

    if (mode === "ferme") {
      return res.json({
        mode,
        statut: "ferme",
        texte: "Nous sommes fermés",
      });
    }

    if (mode === "vacances") {
      return res.json({
        mode,
        statut: "vacances",
        texte: "Nous sommes en vacances",
      });
    }

    const google = await recupererStatutGoogle();

    if (google.ouvert) {
      return res.json({
        mode: "automatique",
        statut: "ouvert",
        texte: "Nous sommes ouverts",
        prochaine_fermeture: google.prochaine_fermeture,
      });
    }

    return res.json({
      mode: "automatique",
      statut: "ferme",
      texte: "Nous sommes fermés",
      prochaine_ouverture: google.prochaine_ouverture,
    });
  } catch (error) {
    console.error("Erreur statut boutique :", error);

    res.status(500).json({
      message: "Erreur serveur",
    });
  }
});

module.exports = router;