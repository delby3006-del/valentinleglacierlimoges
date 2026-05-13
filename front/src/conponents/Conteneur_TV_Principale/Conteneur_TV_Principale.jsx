import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import "./Conteneur_TV_Principale.scss";

export default function Conteneur_TV_Principale() {
  const [glaces, setGlaces] = useState([]);

  const chargerDonneesTV = async () => {
    try {
      const resGlaces = await fetch(`${API_URL}/api/glaces?actif=1`);
      const dataGlaces = await resGlaces.json();

      setGlaces(Array.isArray(dataGlaces) ? dataGlaces : []);
    } catch (error) {
      console.error("Erreur chargement TV :", error);
    }
  };

  useEffect(() => {
    chargerDonneesTV();

    const interval = setInterval(chargerDonneesTV, 60000);
    return () => clearInterval(interval);
  }, []);

  const trierAlphabetique = (liste) => {
    return [...liste].sort((a, b) =>
      a.nom_glace.localeCompare(b.nom_glace, "fr", { sensitivity: "base" }),
    );
  };

  const cremes = trierAlphabetique(
    glaces.filter((glace) => glace.nom_type?.toLowerCase().includes("crème")),
  );

  const sorbets = trierAlphabetique(
    glaces.filter((glace) => glace.nom_type?.toLowerCase().includes("sorbet")),
  );

  return (
    <main className="tv-page">
      <section className="tv-header">
        <img src="/images/logo_valentin.png" alt="Valentin le glacier" />
        <h1>Glaces & Sorbets du moment</h1>
      </section>

      <section className="tv-contenu">
        <div className="tv-colonne">
          <h2>Crèmes glacées</h2>

          <ul className="tv-liste-glaces">
            {cremes.map((glace) => (
              <li key={glace.id_glace}>
                {glace.nom_glace}
                {glace.bio && <span> BIO</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="tv-colonne">
          <h2>Sorbets</h2>

          <ul className="tv-liste-glaces">
            {sorbets.map((glace) => (
              <li key={glace.id_glace}>
                {glace.nom_glace}
                {glace.bio && <span> BIO</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
