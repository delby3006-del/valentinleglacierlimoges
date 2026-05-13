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

  useEffect(() => {
    const chargerGlacesTV = async () => {
      try {
        setErreur("");

        const [resCremes, resSorbets] = await Promise.all([
          fetch(`${API_URL}/api/glaces?actif=1&id_type=1`),
          fetch(`${API_URL}/api/glaces?actif=1&id_type=2`),
        ]);

        if (!resCremes.ok || !resSorbets.ok) {
          throw new Error("Erreur serveur");
        }

        const dataCremes = await resCremes.json();
        const dataSorbets = await resSorbets.json();

        setCremes(trierAlphabetique(dataCremes));
        setSorbets(trierAlphabetique(dataSorbets));
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

  if (loading) return <p>Chargement...</p>;
  if (erreur) return <p>{erreur}</p>;

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
              <li key={glace.id_glace}>{glace.nom_glace}</li>
            ))}
          </ul>
        </div>

        <div className="tv-colonne">
          <h2>Sorbets</h2>

          <ul className="tv-liste-glaces">
            {sorbets.map((glace) => (
              <li key={glace.id_glace}>{glace.nom_glace}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
