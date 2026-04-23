import "./Conteneur_Glaces_Generique.css";
import { useEffect, useState } from "react";

export default function ConteneurGlaces({
  idType,
  actif,
  titre,
  afficherCheckbox = false,
}) {
  const [glaces, setGlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const chargerGlaces = async () => {
      try {
        setErreur("");

        let url = "http://localhost:3001/api/glaces?";
        const params = [];

        if (actif !== undefined) {
          params.push(`actif=${actif}`);
        }

        if (idType !== undefined) {
          params.push(`id_type=${idType}`);
        }

        url += params.join("&");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await response.json();
        setGlaces(data);
      } catch (error) {
        console.error("Erreur chargement glaces :", error);
        setErreur("Impossible de charger les glaces");
      } finally {
        setLoading(false);
      }
    };

    chargerGlaces();

    const interval = setInterval(chargerGlaces, 65000);
    return () => clearInterval(interval);
  }, [idType, actif]);

  const toggleGlace = async (id, actifActuel) => {
    try {
      setErreur("");

      const nouvelleValeur = Number(actifActuel) === 1 ? 0 : 1;

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/glaces/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            actif: nouvelleValeur,
          }),
        },
      );

      const data = await response.json();
      console.log("Réponse du serveur :", data);

      if (!response.ok || !data.succes) {
        throw new Error(data.erreur || "Erreur mise à jour");
      }

      setGlaces((prevGlaces) =>
        prevGlaces.map((glace) =>
          glace.id_glace === id ? { ...glace, actif: nouvelleValeur } : glace,
        ),
      );
    } catch (error) {
      console.error("Erreur update glace :", error);
      setErreur("Impossible de mettre à jour la glace");
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (erreur) return <p>{erreur}</p>;

  return (
    <div className="conteneur-glaces-colone">
      <h4 className="titre-conteneur-glaces-type">{titre}</h4>
      <ul className="conteneur-glaces-liste">
        {glaces.map((glace) => (
          <li key={glace.id_glace} className="ligne-glace">
            {afficherCheckbox ? (
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={Number(glace.actif) === 1}
                  onChange={() => toggleGlace(glace.id_glace, glace.actif)}
                />
                {glace.nom_glace}
              </label>
            ) : (
              glace.nom_glace
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
