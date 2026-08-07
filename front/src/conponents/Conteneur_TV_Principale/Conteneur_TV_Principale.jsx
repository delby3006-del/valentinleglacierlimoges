import "./Conteneur_TV_Principale.scss";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

export default function Conteneur_TV_Principale() {
  const [cremes, setCremes] = useState([]);
  const [sorbets, setSorbets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  const trierAlphabetique = (liste) => {
    return [...liste].sort((a, b) =>
      a.nom_glace.localeCompare(b.nom_glace, "fr", {
        sensitivity: "base",
      }),
    );
  };

const creerColonnes = (liste, nombreParColonne = 13) => {
  const colonnes = [];

  for (let i = 0; i < liste.length; i += nombreParColonne) {
    colonnes.push(liste.slice(i, i + nombreParColonne));
  }

  return colonnes;
};

const creerClasseAllergene = (allergene) => {
  return allergene
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/œ/g, "oe")
    .replace(/\s+/g, "-");
};

  useEffect(() => {
    const chargerGlacesTV = async () => {
      try {
        setErreur("");

        const res = await fetch(`${API_URL}/api/allergenes/glaces`);

        if (!res.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await res.json();

        setCremes(
          trierAlphabetique(
            data.filter((glace) => Number(glace.id_type) === 1),
          ),
        );

        setSorbets(
          trierAlphabetique(
            data.filter((glace) => Number(glace.id_type) === 2),
          ),
        );
      } catch (error) {
        console.error("Erreur chargement glaces TV :", error);
        setErreur("Impossible de charger les glaces");
      } finally {
        setLoading(false);
      }
    };

    chargerGlacesTV();

    const interval = setInterval(chargerGlacesTV, 65000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let wakeLock = null;

    const activerWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          wakeLock = await navigator.wakeLock.request("screen");
        }
      } catch (err) {
        console.error("Erreur Wake Lock :", err);
      }
    };

    activerWakeLock();

    const interval = setInterval(() => {
      window.dispatchEvent(new Event("mousemove"));
    }, 30000);

    return () => {
      clearInterval(interval);

      if (wakeLock) {
        wakeLock.release();
      }
    };
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (erreur) return <p>{erreur}</p>;

  return (
    <main className="tv-page">
      <img
        className="image-glace"
        src="/images/glace3B.png"
        alt="glace 3 boules"
      />

      <section className="tv-header">
        <img
          className="tv-logo-valentin"
          src="/images/logo_valentin.png"
          alt="logo Valentin le glacier"
        />

        <h1>Notre sélection de parfums</h1>

        <img
          className="tv-logo-bio"
          src="/images/logo_bio.png"
          alt="logo agriculture biologique"
        />
      </section>

      <section className="tv-prix">
        <p>
          1 boule
          <span>3,70 €</span>
        </p>

        <p>
          2 boules
          <span>6,00 €</span>
        </p>

        <p>
          3 boules
          <span>7,90 €</span>
        </p>

        <p>
          Milkshake
          <span>6,80 €</span>
        </p>

        <p>
          + chantilly maison
          <span>1,40 €</span>
        </p>
      </section>

      <section
  className={`tv-contenu ${
    cremes.length >= 24 ? "cremes-large" : ""
  }`}
>
  <div className="tv-colonne">
    <h2>
      Crèmes Glacées
      <span className="tv-allergene-rond allergene-lait"></span>
    </h2>

    <div className="tv-liste-glaces">
      {creerColonnes(cremes).map((colonne, indexColonne) => (
        <ul
          className="tv-liste-colonne"
          key={`cremes-colonne-${indexColonne}`}
        >
          {colonne.map((glace) => (
            <li key={glace.id_glace}>
              <span className="tv-nom-glace">
                {glace.nom_glace}

                {Number(glace.bio) !== 1 && (
                  <span className="tv-mention-non-bio">
                    {" "}
                    Non BIO
                  </span>
                )}
              </span>

              {glace.allergenes?.length > 0 && (
                <span className="tv-allergenes">
                  {glace.allergenes
                    .filter(
                      (allergene) =>
                        allergene.toLowerCase() !== "lait",
                    )
                    .map((allergene) => (
                      <span
                        key={allergene}
                        className={`tv-allergene-rond allergene-${creerClasseAllergene(
                          allergene,
                        )}`}
                        title={allergene}
                      />
                    ))}
                </span>
              )}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
<div className="tv-separateur"></div>
  <div className="tv-colonne">
    <h2>Sorbets</h2>

    <div className="tv-liste-glaces">
      {creerColonnes(sorbets).map((colonne, indexColonne) => (
        <ul
          className="tv-liste-colonne"
          key={`sorbets-colonne-${indexColonne}`}
        >
          {colonne.map((glace) => (
            <li key={glace.id_glace}>
              <span className="tv-nom-glace">
                {glace.nom_glace === "Citronnelle fleur de Pois"
                  ? "Citronnelle"
                  : glace.nom_glace}

                {Number(glace.bio) !== 1 && (
                  <span className="tv-mention-non-bio">
                    {" "}
                    Non BIO
                  </span>
                )}
              </span>

              {glace.allergenes?.length > 0 && (
                <span className="tv-allergenes">
                  {glace.allergenes.map((allergene) => (
                    <span
                      key={allergene}
                      className={`tv-allergene-rond allergene-${creerClasseAllergene(
                        allergene,
                      )}`}
                      title={allergene}
                    />
                  ))}
                </span>
              )}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
</section>

      <section className="tv-legende-allergenes">
        <div className="legende-item">
          <span className="tv-allergene-rond allergene-lait"></span>
          <p>Lait</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-oeufs"></span>
          <p>Œufs</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-fruits-a-coque"></span>
          <p>Fruits à coque</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-arachides"></span>
          <p>Arachides</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-gluten"></span>
          <p>Gluten</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-sesame"></span>
          <p>Sésame</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-soja"></span>
          <p>Soja</p>
        </div>
      </section>

      <section className="tv-bas">
        <img
          className="tv-qrcode"
          src="/images/qrcode_ecran1.png"
          alt="QR code pour accéder au menu de Valentin le glacier sur votre téléphone"
        />

        <img
          className="tv-logo-terrea-delice"
          src="/images/logo_terreadelice.png"
          alt="logo Terre de délice, fournisseur de glaces pour Valentin le glacier"
        />

        <div className="tv-centre">
          <p>En pot ou en cornet ?</p>
          <p>Possibilité de cornet sans gluten</p>
        </div>

        <div className="tv-emporter">
          <p>Large choix de ½ litre à emporter</p>
          <p>12,00 € le pot</p>
          <p>(environ 6 boules)</p>
        </div>
      </section>
    </main>
  );
}