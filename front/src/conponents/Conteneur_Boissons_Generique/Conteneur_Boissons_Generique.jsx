import { useEffect, useState } from "react";
import "./Conteneur_Boissons_Generique.css";

export default function Conteneur_Boissons_Generique({ idType, titre }) {
  const [boissons, setBoissons] = useState([]);

  useEffect(() => {
    const chargerBoissons = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/boissons");

        if (!res.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await res.json();
        const type = data.find((t) => t.id_type === idType);

        if (type) {
          const boissonsActives = type.boissons.filter(
            (b) => Number(b.actif) === 1,
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
