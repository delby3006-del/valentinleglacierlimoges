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

  return (
    <main className="tv-page">
      <section className="tv-header">
        <img src="/images/logo_valentin.png" alt="Valentin le glacier" />
        <h1>Glaces & Sorbets du moment</h1>
      </section>

      <section className="tv-contenu">
        <div className="tv-bloc tv-glaces">
          <h2>Nos parfums</h2>

          <div className="tv-liste-glaces">
            {glaces.map((glace) => (
              <p key={glace.id_glace}>
                {glace.nom_glace}
                {glace.bio && <span> BIO</span>}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
