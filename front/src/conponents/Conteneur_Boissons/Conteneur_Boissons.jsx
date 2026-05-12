import { useEffect, useState } from "react";
import ConteneurBoissons from "../Conteneur_Boissons_Generique/Conteneur_Boissons_Generique";
import { API_URL } from "../../config";
import "./Conteneur_Boissons.scss";

export default function Conteneur_Boissons() {
  const [typesBoissons, setTypesBoissons] = useState([]);

  useEffect(() => {
    const chargerTypes = async () => {
      try {
        const res = await fetch(`${API_URL}/api/boissons`);

        if (!res.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await res.json();

        // 🔥 On garde un seul objet par type
        const typesUniques = data.map((type) => ({
          id_type: type.id_type,
          nom_type: type.nom_type,
          ordre_affichage: type.ordre_affichage,
        }));

        setTypesBoissons(typesUniques);
      } catch (error) {
        console.error("Erreur types boissons :", error);
      }
    };

    chargerTypes();
  }, []);

  return (
    <section className="boissons" id="section-boissons">
      <h2 className="titre-conteneur-boissons">Nos Boissons</h2>

      <div className="bloc-boissons">
        <div className="colonnes-boissons">
          {typesBoissons.map((type) => (
            <ConteneurBoissons
              key={type.id_type}
              idType={type.id_type}
              titre={type.nom_type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
