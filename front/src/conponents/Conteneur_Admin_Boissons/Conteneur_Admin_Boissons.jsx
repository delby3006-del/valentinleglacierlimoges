import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { fetchAdmin } from "../../utils/fetchAdmin";
import Conteneur_Boissons_Generique from "../Conteneur_Boissons_Generique/Conteneur_Boissons_Generique";
import "../Conteneur_Boissons_Generique/Conteneur_Boissons_Generique.scss";
import "../Conteneur_Boissons/Conteneur_Boissons.scss";
import "./Conteneur_Admin_Boissons.scss";

export default function Conteneur_Admin_Boissons() {
  const [typesBoissons, setTypesBoissons] = useState([]);

  const chargerTypesBoissons = async () => {
    try {
      const res = await fetch(`${API_URL}/api/boissons`);

      if (!res.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await res.json();
      setTypesBoissons(data);
    } catch (error) {
      console.error("Erreur types boissons :", error);
    }
  };

  useEffect(() => {
    chargerTypesBoissons();
  }, []);

  const passerEnPremier = async (idType) => {
    try {
      const nouvelOrdre = typesBoissons.map((type) => ({
        id_type: type.id_type,
        ordre_affichage: Number(type.id_type) === Number(idType) ? 1 : 2,
      }));

      const response = await fetchAdmin(`${API_URL}/api/boissons/ordre`, {
        method: "PUT",
        body: JSON.stringify({ ordre: nouvelOrdre }),
      });

      const data = await response.json();

      if (!response.ok || !data.succes) {
        throw new Error(data.erreur || "Erreur ordre boissons");
      }

      await chargerTypesBoissons();
    } catch (error) {
      console.error("Erreur changement ordre boissons :", error);
    }
  };

  return (
    <section className="boissons" id="section-boissons">
      <h3 className="titre-conteneur-boissons">Gestion des Boissons</h3>

      <div className="admin-ordre-boissons">
        <p>Choisir la catégorie à afficher en premier :</p>

        {typesBoissons.map((type) => (
          <label key={type.id_type} className="admin-ordre-boisson-ligne">
            <input
              className="checkbox"
              type="radio"
              name="ordre-boissons"
              checked={Number(type.ordre_affichage) === 1}
              onChange={() => passerEnPremier(type.id_type)}
            />

            {type.nom_type.replace("Boissons ", "")}
          </label>
        ))}
      </div>

      <div className="bloc-boissons">
        <div className="colonnes-boissons">
          {typesBoissons.map((type) => (
            <Conteneur_Boissons_Generique
              key={type.id_type}
              idType={type.id_type}
              titre={type.nom_type}
              admin={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
