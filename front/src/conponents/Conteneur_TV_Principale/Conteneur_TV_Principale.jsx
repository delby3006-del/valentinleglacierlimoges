import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import "./Conteneur_TV_Principale.scss";

export default function Conteneur_TV_Principale() {
  const [glaces, setGlaces] = useState([]);
  const [italiennes, setItaliennes] = useState([]);

  const chargerDonneesTV = async () => {
    try {
      const [resGlaces, resItaliennes] = await Promise.all([
        fetch(`${API_URL}/api/glaces?actif=1`),
        fetch(`${API_URL}/api/italiennes?actif=1`),
      ]);

      const dataGlaces = await resGlaces.json();
      const dataItaliennes = await resItaliennes.json();

      setGlaces(dataGlaces);
      setItaliennes(dataItaliennes);
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

        <div className="tv-bloc tv-italiennes">
          <h2>Italiennes</h2>

          {italiennes.map((machine) => (
            <div key={machine.id_machine} className="tv-machine">
              {machine.italiennes.map((item) => (
                <span key={item.id_italienne}>
                  {item.parfum.nom_parfum_italienne}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
