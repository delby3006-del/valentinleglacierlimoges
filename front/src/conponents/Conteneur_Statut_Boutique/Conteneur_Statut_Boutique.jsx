import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import "./Conteneur_Statut_Boutique.scss";

export default function Conteneur_Statut_Boutique() {
  const [statut, setStatut] = useState(null);

  useEffect(() => {
    const chargerStatut = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/statut-boutique`,
        );

        if (!response.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await response.json();

        setStatut(data);
      } catch (error) {
        console.error("Erreur chargement statut boutique :", error);
      }
    };

    chargerStatut();

    const interval = setInterval(chargerStatut, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!statut) {
    return null;
  }

  return (
    <div
      className={`statut-boutique statut-boutique-${statut.statut}`}
    >
      <span className="statut-boutique-point"></span>

      <span>{statut.texte}</span>
    </div>
  );
}