import "./Conteneur_Page_Loger.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Logeur() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const gererConnexion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/connexion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            motDePasse,
          }),
        },
      );

      const data = await response.json();

      if (data.succes) {
        localStorage.setItem("admin", JSON.stringify(data.admin));
        navigate("/admin");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Erreur connexion :", error);
      setMessage("Erreur serveur");
    }
  };

  return (
    <div className="page-de-connexion">
      <div>
        <Link to="/" className="lien-sans-style">
          <p className="info-connexion">
            IL N’EST ACTUELLEMENT PAS POSSIBLE DE CREER DE COMPTE
          </p>
        </Link>
      </div>

      <img
        src="/images/logo_valentin.png"
        alt="Logo Valentin le glacier"
        className="logo-connexion"
      />

      <div className="formulaire">
        <form id="formulaire" onSubmit={gererConnexion}>
          <label htmlFor="email">E-mail</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            className="information-connection"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <label htmlFor="mdp">Mot de passe</label>
          <br />
          <input
            type="password"
            id="mdp"
            name="mdp"
            className="information-connection"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
          <br />

          <input
            type="submit"
            value="Se connecter"
            className="connection-button"
          />
        </form>

        {message && <p className="message-connexion">{message}</p>}
      </div>
    </div>
  );
}
