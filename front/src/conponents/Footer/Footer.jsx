import "./Footer.css";
import Coordonnees from "../Coordonnees/Coordonnes.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-blocs">
        {/* Bloc 1 */}
        <div className="footer-bloc">
          <h3 className="footer-titre">Nous Trouver</h3>
          <Coordonnees
            showAdresse={true}
            showTelephone={true}
            showCode={true}
          />
        </div>
        {/* Bloc 2 */}
        <div className="footer-bloc footer-centre">
          <h3 className="footer-titre">Nos Horaires</h3>

          <p>Ouvert du mardi au samedi </p>
          <p>de 12h30 à 19h</p>
          <p>Le dimanche et lundi </p>
          <p>de 14h00 à 18h (selon la météo)</p>
        </div>

        {/* Bloc 3 */}
        <div className="footer-bloc">
          <h3 className="footer-titre">Notre Engagement</h3>

          <p>Certifié Agriculture Biologique</p>
          <p>Produits 100% artisanaux</p>
          <p>+70 parfums disponibles</p>
        </div>
      </div>
    </footer>
  );
}
