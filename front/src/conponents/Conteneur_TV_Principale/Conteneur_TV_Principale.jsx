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
        <h1>Notre sélection de parfums</h1>
      </section>

      <section className="tv-prix">
        <p>
          1 boule
          <span>3,60 €</span>
        </p>

        <p>
          2 boules
          <span>6,00 €</span>
        </p>

        <p>
          3 boules
          <span>7,70 €</span>
        </p>

        <p>
          Milkshake
          <span>6,70 €</span>
        </p>

        <p>
          + chantilly maison
          <span>1,30 €</span>
        </p>
      </section>

      <section className="tv-contenu">
        <div className="tv-colonne">
          <h2>Crèmes Glacées</h2>

          <ul className="tv-liste-glaces">
            {cremes.map((glace) => (
              <li key={glace.id_glace}>{glace.nom_glace}</li>
            ))}
          </ul>
        </div>

        <div className="tv-centre">
          <p>
            En cornet
            <br />
            Ou
            <br />
            en pot ?
          </p>
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

      <section className="tv-bas">
        <div className="tv-emporter">
          <p>Large choix de ½ litre à emporter</p>
          <p>12,00 € le pot</p>
          <p>(environ 6 boules)</p>
        </div>
      </section>
    </main>
  );
}
