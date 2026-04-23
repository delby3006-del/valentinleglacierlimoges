import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import "./Conteneur_Boissons_Generique.css";

export default function Conteneur_Boissons_Generique({ idType, titre }) {
  const [boissons, setBoissons] = useState([]);

  useEffect(() => {
    const chargerBoissons = async () => {
      try {
        const res = await fetch(`${API_URL}/api/boissons`);

        if (!res.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await res.json();
        console.log("Données boissons :", data);

        const typeTrouve = data.find(
          (t) => Number(t.id_type) === Number(idType),
        );

        if (typeTrouve) {
          const boissonsActives = (typeTrouve.boissons || []).filter(
            (b) => b.actif === true || Number(b.actif) === 1,
          );

          setBoissons(boissonsActives);
        } else {
          setBoissons([]);
        }
      } catch (error) {
        console.error("Erreur boissons :", error);
      }
    };

    chargerBoissons();

    const interval = setInterval(chargerBoissons, 5000);
    return () => clearInterval(interval);
  }, [idType]);

  return (
    <div className="conteneur-boissons-generique">
      <h3 className="titre-boissons">{titre}</h3>

      <ul className="liste-boissons">
        {boissons.map((boisson) => (
          <li key={boisson.id_boisson} className="item-boisson">
            {boisson.nom_boisson}
          </li>
        ))}
      </ul>
    </div>
  );
}
