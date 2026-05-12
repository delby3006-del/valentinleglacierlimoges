import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { fetchAdmin } from "../../utils/fetchAdmin";
import "./Conteneur_Boissons_Generique.scss";

export default function Conteneur_Boissons_Generique({
  idType,
  titre,
  admin = false,
}) {
  const [boissons, setBoissons] = useState([]);

  const chargerBoissons = async () => {
    try {
      const res = await fetch(`${API_URL}/api/boissons`);

      if (!res.ok) {
        throw new Error("Erreur serveur");
      }

      const data = await res.json();

      const typeTrouve = data.find((t) => Number(t.id_type) === Number(idType));

      if (typeTrouve) {
        setBoissons(typeTrouve.boissons || []);
      } else {
        setBoissons([]);
      }
    } catch (error) {
      console.error("Erreur boissons :", error);
    }
  };

  useEffect(() => {
    chargerBoissons();

    const interval = setInterval(chargerBoissons, 65000);
    return () => clearInterval(interval);
  }, [idType]);

  // 🔥 Toggle admin
  const toggleBoisson = async (id, actifActuel) => {
    try {
      const nouvelleValeur = Number(actifActuel) === 1 ? 0 : 1;

      const response = await fetchAdmin(
        `${API_URL}/api/boissons/boisson/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({ actif: nouvelleValeur }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.succes) {
        throw new Error(data.erreur || "Erreur mise à jour");
      }

      setBoissons((prev) =>
        prev.map((b) =>
          b.id_boisson === id ? { ...b, actif: nouvelleValeur } : b,
        ),
      );
    } catch (error) {
      console.error("Erreur update boisson :", error);
    }
  };

  const boissonsAffichees = admin
    ? boissons
    : boissons.filter((b) => Number(b.actif) === 1);

  if (!admin && boissonsAffichees.length === 0) {
    return null;
  }

  return (
    <div className="conteneur-boissons-generique">
      <h3 className="titre-boissons">{titre.replace("Boissons ", "")}</h3>

      <ul className="liste-boissons">
        {boissonsAffichees.map((boisson) => (
          <li key={boisson.id_boisson} className="item-boisson">
            {admin ? (
              <label className="ligne-boisson">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={Number(boisson.actif) === 1}
                  onChange={() =>
                    toggleBoisson(boisson.id_boisson, boisson.actif)
                  }
                />
                <span>{boisson.nom_boisson}</span>
              </label>
            ) : (
              boisson.nom_boisson
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
