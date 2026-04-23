import "./Header.css";
import Coordonnees from "../Coordonnees/Coordonnes.jsx";
import { Link } from "react-router-dom";

export default function Header({ mode = "site" }) {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <div>
      <div className="header-coordonnee">
        <Coordonnees showTelephone={false} />
        <p className="info-header">🌿 Glaces & Sorbets 100% BIO · Artisanaux</p>
        <Coordonnees showAdresse={false} />
      </div>

      <div className="barre-nav">
        <div className="logo-valentin">
          <Link to={mode === "admin" ? "/" : "/login"}>
            <img
              src="/images/logo_valentin.png"
              alt="Logo Valentin le glacier"
            />
          </Link>
        </div>

        <nav className="nav" aria-label="Navigation principale">
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

              <a
                href="#section-gourmandises"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("section-gourmandises");
                }}
              >
                Nos Gourmandises
              </a>

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

          <p>🌿 100% BIO</p>
        </nav>
      </div>
    </div>
  );
}
