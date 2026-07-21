import "./Conteneur_TV_Principale_Anglais.scss";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

export default function Conteneur_TV_Principale_Anglais() {
  const [cremes, setCremes] = useState([]);
  const [sorbets, setSorbets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

const trierAlphabetique = (liste) => {
  return [...liste].sort((a, b) =>
    (a.nom_parfum_en || a.nom_glace).localeCompare(
      b.nom_parfum_en || b.nom_glace,
      "en",
      {
        sensitivity: "base",
      },
    ),
  );
};
  const classeColonnes = (liste) => {
    if (liste.length >= 30) return "colonnes-3";
    return "colonnes-2";
  };

  useEffect(() => {
    const chargerGlacesTV = async () => {
      try {
        setErreur("");

        const res = await fetch(`${API_URL}/api/tv-anglais`);

        if (!res.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await res.json();

        setCremes(
          trierAlphabetique(data.filter((glace) => Number(glace.id_type) === 1)),
        );

        setSorbets(
          trierAlphabetique(data.filter((glace) => Number(glace.id_type) === 2)),
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
    <main className="tv-page-anglais">
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

        <h1>Our Selection of Flavours</h1>

        <img
          className="tv-logo-bio"
          src="/images/logo_bio.png"
          alt="logo agriculture biologique"
        />
      </section>

      <section className="tv-prix">
        <p>
          1 Scoop
          <span>3,70 €</span>
        </p>

        <p>
          2 Scoops
          <span>6,00 €</span>
        </p>

        <p>
          3 Scoops
          <span>7,90 €</span>
        </p>

        <p>
          Milkshake
          <span>6,80 €</span>
        </p>

        <p>
          + Homemade Whipped Cream
          <span>1,40 €</span>
        </p>
      </section>

      <section
        className={`tv-contenu-anglais ${cremes.length >= 24 ? "cremes-large" : ""}`}
      >
       <div className="tv-colonne">
  <h2>
    Crèmes Glacées
    <span className="tv-allergene-rond allergene-lait"></span>
  </h2>

  <ul className={`tv-liste-glaces ${classeColonnes(cremes)}`}>
    {cremes.map((glace) => (
      <li key={glace.id_glace}>
        <span className="tv-nom-glace">
         {glace.nom_parfum_en || glace.nom_glace}
          {Number(glace.bio) !== 1 && (
            <span className="tv-mention-non-bio"> Non BIO</span>
          )}
        </span>

        {glace.allergenes?.length > 0 && (
          <span className="tv-allergenes">
            {glace.allergenes
              .filter(
                (allergene) =>
                  allergene.toLowerCase() !== "lait"
              )
              .map((allergene) => (
                <span
                  key={allergene}
                  className={`tv-allergene-rond allergene-${allergene
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, "-")
                    .replace(/œ/g, "oe")}`}
                  title={allergene}
                />
              ))}
          </span>
        )}
      </li>
    ))}
  </ul>
</div>
        <div className="tv-colonne">
          <h2>Sorbets</h2>

          <ul className={`tv-liste-glaces ${classeColonnes(sorbets)}`}>
            {sorbets.map((glace) => (
              <li key={glace.id_glace}>
                <span className="tv-nom-glace">
                 {glace.nom_parfum_en || glace.nom_glace}

                  {Number(glace.bio) !== 1 && (
                    <span className="tv-mention-non-bio"> Non BIO</span>
                  )}
                </span>

                {glace.allergenes?.length > 0 && (
                  <span className="tv-allergenes">
                    {glace.allergenes.map((allergene) => (
                      <span
                        key={allergene}
                        className={`tv-allergene-rond allergene-${allergene
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .replace(/\s+/g, "-")
                          .replace(/œ/g, "oe")}`}
                        title={allergene}
                      />
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tv-legende-allergenes">
        <div className="legende-item">
          <span className="tv-allergene-rond allergene-lait"></span>
          <p>Milk</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-oeufs"></span>
          <p>Eggs</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-fruits-a-coque"></span>
          <p>Tree Nuts</p>
        </div>

        <div className="legende-item">
          <span className="tv-allergene-rond allergene-arachides"></span>
          <p>Peanuts</p>
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
          <p>Soy</p>
        </div>
      </section>

      <section className="tv-bas"> 
       
        <img
          className="tv-logo-terrea-delice"
          src="/images/logo_terreadelice.png"
          alt="logo Terre de délice, fournisseur de glaces pour Valentin le glacier"
        />

        <div className="tv-centre">
          <p>In a Cup or a Cone?</p>
          <p>Gluten-free cones available</p>
        </div>

        <div className="tv-emporter">
          <p>Large choice of ½ liter to take away</p>
          <p>12,00 € per pot</p>
          <p>(approximately 6 scoops)</p>
        </div>
      </section>
    </main>
  );
}