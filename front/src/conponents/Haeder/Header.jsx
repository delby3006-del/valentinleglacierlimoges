import "./Header.scss";
import Coordonnees from "../Coordonnees/Coordonnes.jsx";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import Nav_Dynamique from "../Nav_Dynamique/Nav_Dynamique.jsx";

export default function Header({ mode = "site" }) {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <div>
      <div className="bandeau-superieur">
        <div className="header-coordonnee">
          <Coordonnees showTelephone={false} />
          <p className="info-header">
            Glaces BIO et Artisanals
          </p>
          <Coordonnees showAdresse={false} />
        </div>
      </div>

      <div className="barre-nav">
        <div className="logo-valentin">
          <Link to="/">
            <img
              src="/images/logo_valentin.png"
              alt="Logo Valentin le glacier"
            />
          </Link>
        </div>

        <nav className="nav" aria-label="Navigation principale">
          <Nav_Dynamique mode={mode} scrollTo={scrollTo} />

          <p>
            <img
              className="logo-bio-"
              src="/images/logoeuropeenAB1.png"
              alt="Logo bio"
            />
            BIO
          </p>

          <Link to={mode === "admin" ? "/" : "/login"}>
            <FaLock
              className="cadena-fermer"
              alt="Se connecter"
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}