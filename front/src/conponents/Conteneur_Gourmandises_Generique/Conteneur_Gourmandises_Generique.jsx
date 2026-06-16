import { useEffect, useState, useCallback } from "react";
import { API_URL } from "../../config";
import { fetchAdmin } from "../../utils/fetchAdmin";
import "./Conteneur_Gourmandises_Generique.scss";

export default function Conteneur_Gourmandises_Generique({ admin = false }) {
  const [gourmandises, setGourmandises] = useState([]);

  const chargerGourmandises = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/gourmandises`);

      if (!res.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await res.json();
      // console.log("Données gourmandises :", data);
      setGourmandises(data);
    } catch (error) {
      console.error("Erreur gourmandises :", error);
    }
  }, []);

  useEffect(() => {
    chargerGourmandises();

    const interval = setInterval(chargerGourmandises, 65000);

    return () => clearInterval(interval);
  }, [chargerGourmandises]);

  const toggleTypeGourmandise = async (id, actifActuel) => {
    try {
      const nouvelActif = Number(actifActuel) === 1 ? 0 : 1;

      const response = await fetchAdmin(
        `${API_URL}/api/gourmandises/type/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ actif: nouvelActif }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.succes) {
        throw new Error(data.erreur || "Erreur mise à jour type");
      }

      if (nouvelActif === 1) {
        const autoResponse = await fetchAdmin(
          `${API_URL}/api/gourmandises/type/${id}/activer-garnitures`,
          {
            method: "PUT",
          },
        );

        const autoData = await autoResponse.json();

        if (!autoResponse.ok || !autoData.succes) {
          throw new Error(autoData.erreur || "Erreur activation auto");
        }
      }

      await chargerGourmandises();
    } catch (error) {
      console.error("Erreur update type gourmandise :", error);
    }
  };

  const toggleLiaisonGarniture = async (idLiaison, actifActuel) => {
    try {
      const response = await fetchAdmin(
        `${API_URL}/api/gourmandises/liaison/${idLiaison}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            actif: Number(actifActuel) === 1 ? 0 : 1,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.succes) {
        throw new Error(data.erreur || "Erreur mise à jour liaison");
      }

      setGourmandises((prev) =>
        prev.map((gourmandise) => ({
          ...gourmandise,
          garnitures: gourmandise.garnitures?.map((garniture) =>
            garniture.id_liaison === idLiaison
              ? {
                  ...garniture,
                  actif: Number(garniture.actif) === 1 ? 0 : 1,
                }
              : garniture,
          ),
        })),
      );
    } catch (error) {
      console.error("Erreur update liaison :", error);
    }
  };

  const gourmandisesAffichees = admin
    ? gourmandises
    : gourmandises.filter((g) => Number(g.actif) === 1);

  if (!admin && gourmandisesAffichees.length === 0) {
    return null;
  }

  return (
    <section className="gourmandises" id="section-gourmandises">
      <h2 className="titre-conteneur-gourmandises">
        {admin ? "Gestion des Gourmandises" : "Nos Gourmandises"}
      </h2>

      <div className="conteneur-gourmandises">
        {gourmandisesAffichees.map((gourmandise) => (
          <div
            className="carte-gourmandises"
            key={gourmandise.id_gourmandise_type}
          >
            <div className="carte-gourmandises-header">
              <h3 className="carte-gourmandises-titre">
                {gourmandise.nom_gourmandise_type}
              </h3>

              {admin && (
                <label className="checkbox-admin-gourmandise">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={Number(gourmandise.actif) === 1}
                    onChange={() =>
                      toggleTypeGourmandise(
                        gourmandise.id_gourmandise_type,
                        gourmandise.actif,
                      )
                    }
                  />
                </label>
              )}
            </div>

            <ul>
              {gourmandise.garnitures?.map((garniture) => {
                if (!admin && Number(garniture.actif) !== 1) return null;

                return (
                  <li key={garniture.id_liaison} className="ligne-garniture">
                    {admin && (
                      <label className="checkbox-admin-garniture">
                        <input
                          className="checkbox"
                          type="checkbox"
                          checked={Number(garniture.actif) === 1}
                          onChange={() =>
                            toggleLiaisonGarniture(
                              garniture.id_liaison,
                              garniture.actif,
                            )
                          }
                        />
                      </label>
                    )}
                    <span>{garniture.nom_garniture}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
