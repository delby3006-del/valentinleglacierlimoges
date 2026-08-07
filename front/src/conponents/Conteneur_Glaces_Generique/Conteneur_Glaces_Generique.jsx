import "./Conteneur_Glaces_Generique.scss";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { fetchAdmin } from "../../utils/fetchAdmin";

export default function ConteneurGlaces({
  idType,
  actif,
  titre,
  afficherCheckbox = false,
  bioSeulement = false,
}) {
  const [glaces, setGlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");


  useEffect(() => {
    const chargerGlaces = async () => {
      try {
        setErreur("");

        let url = `${API_URL}/api/glaces?`;
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

      const response = await fetchAdmin(`${API_URL}/api/glaces/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          actif: nouvelleValeur,
        }),
      });
      const data = await response.json();
      // console.log("Réponse du serveur :", data);

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

const glacesAffichees = bioSeulement
  ? glaces.filter((glace) => Number(glace.bio) === 1)
  : glaces;

  return (
    <div className="conteneur-glaces-colone">
      <h3 className="titre-conteneur-glaces-type">{titre}</h3>
      <ul className="conteneur-glaces-liste">
        {glacesAffichees.map((glace) => (
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
                {Number(glace.bio) !== 1 && (
                  <span className="mention-non-bio"> Non BIO</span>
                )}
              </label>
            ) : (
              <>
                {glace.nom_glace}
                {Number(glace.bio) !== 1 && (
                  <span className="mention-non-bio"> Non BIO</span>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
