import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

export default function Nav_Dynamique({ mode = "site", scrollTo }) {
  const [gourmandisesActives, setGourmandisesActives] = useState(false);
  const [italiennesActives, setItaliennesActives] = useState(false);
const [granitesActifs, setGranitesActifs] = useState(false);

  useEffect(() => {
    const verifierGourmandises = async () => {
      try {
        const res = await fetch(`${API_URL}/api/gourmandises`);

        if (!res.ok) {
          throw new Error("Erreur serveur");
        }

        const data = await res.json();

        const actif = data.some(
          (gourmandise) => Number(gourmandise.actif) === 1
        );

        setGourmandisesActives(actif);
      } catch (error) {
        console.error("Erreur vérification gourmandises :", error);
        setGourmandisesActives(false);
      }
    };

    verifierGourmandises();

    const interval = setInterval(verifierGourmandises, 65000);

    return () => clearInterval(interval);
  }, []);

 useEffect(() => {
  const verifierProduitsSaison = async () => {
    try {
      const [resItaliennes, resGranites] = await Promise.all([
        fetch(`${API_URL}/api/italiennes`),
        fetch(`${API_URL}/api/granites`),
      ]);

      if (!resItaliennes.ok || !resGranites.ok) {
        throw new Error("Erreur serveur");
      }

      const italiennes = await resItaliennes.json();
      const granites = await resGranites.json();

const italiennesActivesTrouvees = italiennes.some(
  (italienne) => Number(italienne.actif) === 1
);
      

      const granitesActifsTrouves = granites.some(
        (granite) => Number(granite.actif) === 1
      );

      setItaliennesActives(italiennesActivesTrouvees);
      setGranitesActifs(granitesActifsTrouves);
    } catch (error) {
      console.error(
        "Erreur vérification produits de saison :",
        error
      );

      setItaliennesActives(false);
      setGranitesActifs(false);
    }
  };

  verifierProduitsSaison();

  const interval = setInterval(verifierProduitsSaison, 65000);

  return () => clearInterval(interval);
}, []);


  return (
    <>
      {mode === "admin" ? (
        <>
          <Link to="/admin/histoire">Notre Histoire</Link>
          <Link to="/admin/glaces">Nos Parfums</Link>
          <Link to="/admin/gourmandises">Nos Gourmandises</Link>
          <Link to="/admin/boissons">Boissons</Link>
          <Link to="/admin/infos">Infos Pratiques</Link>
        </>
      ) : (
        <>
          <a
            href="#conteneur-histoire"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("conteneur-histoire");
            }}
          >
            Notre Histoire
          </a>

          <a
            href="#conteneur-glaces"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("conteneur-glaces");
            }}
          >
            Nos Parfums
          </a>

          {gourmandisesActives && (
            <a
              href="#section-gourmandises"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("section-gourmandises");
              }}
            >
              Nos Gourmandises
            </a>
          )}

          {italiennesActives && granitesActifs && (
  <a
    href="#section-supplements-saison"
    onClick={(e) => {
      e.preventDefault();
      scrollTo("section-supplements-saison");
    }}
  >
    Au fil des saisons
  </a>
)}

{italiennesActives && !granitesActifs && (
  <a
    href="#section-supplements-saison"
    onClick={(e) => {
      e.preventDefault();
      scrollTo("section-supplements-saison");
    }}
  >
    Italiennes
  </a>
)}

{!italiennesActives && granitesActifs && (
  <a
    href="#section-supplements-saison"
    onClick={(e) => {
      e.preventDefault();
      scrollTo("section-supplements-saison");
    }}
  >
    Granités
  </a>
)}
          <a
            href="#section-boissons"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("section-boissons");
            }}
          >
            Nos boissons
          </a>

          <a href="#infos-pratiques">Infos Pratiques</a>
        </>
      )}
    </>
  );
}