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

  const classeColonnes = (liste) => {
    if (liste.length >= 24) return "colonnes-3";
    return "colonnes-2";
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
          console.log("Wake Lock activé");
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
        className={`tv-contenu ${cremes.length >= 24 ? "cremes-large" : ""}`}
      >
        <div className="tv-colonne">
          <h2>Crèmes Glacées</h2>

          <ul className={`tv-liste-glaces ${classeColonnes(cremes)}`}>
            {cremes.map((glace) => (
              <li key={glace.id_glace}>
                <span className="tv-nom-glace">
                  {glace.nom_glace === "Citronnelle fleur de Pois" ? (
                    <>
                      Citronnelle
                      <br />
                      <span className="tv-petit-texte">
                        fleur de Pois
                      </span>
                    </>
                  ) : (
                    glace.nom_glace
                  )}

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

        <div className="tv-colonne">
          <h2>Sorbets</h2>

          <ul className={`tv-liste-glaces ${classeColonnes(sorbets)}`}>
            {sorbets.map((glace) => (
              <li key={glace.id_glace}>
                <span className="tv-nom-glace">
                  {glace.nom_glace === "Citronnelle fleur de Pois" ? (
                    <>
                      Citronnelle
                      <br />
                      <span className="tv-petit-texte">
                        fleur de Pois
                      </span>
                    </>
                  ) : (
                    glace.nom_glace
                  )}

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
      </section>

      <section className="tv-bas">
        <img
          className="tv-qrcode"
          src="/images/qrcode_standard2.png"
          alt="reste qrcode"
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