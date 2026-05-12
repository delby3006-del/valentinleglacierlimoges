import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { fetchAdmin } from "../../utils/fetchAdmin";
import "./Conteneur_Granites_Generique.scss";

export default function Conteneur_Granites_Generique({
  afficherCheckbox = false,
  onAfficherBlocChange,
  version = "normal",
}) {
  const [granites, setGranites] = useState([]);
  const [chargementTermine, setChargementTermine] = useState(false);

  const chargerGranites = async () => {
    try {
      setChargementTermine(false);

      const url = afficherCheckbox
        ? `${API_URL}/api/granites`
        : `${API_URL}/api/granites?actif=1`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await res.json();
      setGranites(data);
    } catch (error) {
      console.error("Erreur chargement granités :", error);
    } finally {
      setChargementTermine(true);
    }
  };

  useEffect(() => {
    chargerGranites();
  }, [afficherCheckbox]);

  const modifierActif = async (idGranite, nouvelEtat) => {
    try {
      const res = await fetchAdmin(`${API_URL}/api/granites/${idGranite}`, {
        method: "PUT",
        body: JSON.stringify({
          actif: nouvelEtat ? 1 : 0,
        }),
      });

      if (!res.ok) {
        throw new Error("Erreur modification granité");
      }

      setGranites((anciensGranites) =>
        anciensGranites.map((granite) =>
          granite.id_granite === idGranite
            ? { ...granite, actif: nouvelEtat ? 1 : 0 }
            : granite,
        ),
      );
    } catch (error) {
      console.error("Erreur update granité :", error);
    }
  };

  const modifierTousLesGranites = async (nouvelEtat) => {
    try {
      const res = await fetchAdmin(`${API_URL}/api/granites/tout`, {
        method: "PUT",
        body: JSON.stringify({
          actif: nouvelEtat ? 1 : 0,
        }),
      });

      if (!res.ok) {
        throw new Error("Erreur modification globale granités");
      }

      setGranites((anciensGranites) =>
        anciensGranites.map((granite) => ({
          ...granite,
          actif: nouvelEtat ? 1 : 0,
        })),
      );
    } catch (error) {
      console.error("Erreur update globale granités :", error);
    }
  };

  const granitesActifs = granites.filter(
    (granite) => Number(granite.actif) === 1,
  );

  const auMoinsUnActif = granitesActifs.length > 0;

  useEffect(() => {
    if (!afficherCheckbox && onAfficherBlocChange && chargementTermine) {
      onAfficherBlocChange(auMoinsUnActif);
    }
  }, [
    afficherCheckbox,
    chargementTermine,
    auMoinsUnActif,
    onAfficherBlocChange,
  ]);

  if (!afficherCheckbox && !chargementTermine) {
    return null;
  }

  if (!afficherCheckbox && granitesActifs.length === 0) {
    return null;
  }

  const granitesAAfficher = afficherCheckbox ? granites : granitesActifs;

  return (
    <div
      className={
        afficherCheckbox
          ? "granites-generique admin"
          : `granites-generique visiteur ${version}`
      }
    >
      {afficherCheckbox && (
        <label className="checkbox-global-granites">
          <input
            className="checkbox"
            type="checkbox"
            checked={auMoinsUnActif}
            onChange={(e) => modifierTousLesGranites(e.target.checked)}
          />
          Activer / désactiver tous les granités
        </label>
      )}

      <ul className="liste-granites">
        {granitesAAfficher.map((granite) => {
          const graniteActif = Number(granite.actif) === 1;

          return (
            <li
              key={granite.id_granite}
              className={
                graniteActif ? "item-granite actif" : "item-granite inactif"
              }
            >
              {afficherCheckbox && (
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={graniteActif}
                  onChange={(e) =>
                    modifierActif(granite.id_granite, e.target.checked)
                  }
                />
              )}

              <span>{granite.nom_granite}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
