import "./Conteneur_Presentation_Text.css";
import Coordonnees from "../Coordonnees/Coordonnes";

export default function Conteneur_Presentation_Text() {
  return (
    <div className="conteneur-presentation-text">
      <h1 className="titre-presentation">
        Valentin <br />
        <span className="titre-secondary">le glacier</span>
      </h1>
      <div className="description-presentation-container">
        <h2 className="description-presentation">
          Des glaces & sorbets <br className="description-secondary" />
          100% biologiques & artisanales
        </h2>
        <img
          className="logo-terreadelice"
          src="/images/logo_terreadelice.png"
          alt="Logo terre adélice"
        />
      </div>
      <p className="description-text">
        Au cœur de Limoges, nous vous accueillons avec des créations glacées
        façonnées artisanalement, avec des ingrédients certifiés bio
        soigneusement choisis.
      </p>
      <button className="btn-decouvrir">Voir notre carte</button>
      <div className="separateur"></div>
      <div className="info-lieux">
        <div className="divers">
          <p>Adresse</p>
          <p>Téléphone</p>
          <p>Label</p>
        </div>
        <div className="info-coordonnees">
          <Coordonnees showTelephone={false} />
          <Coordonnees showAdresse={false} />
          <p>AB · 100% Bio Artisanal</p>
        </div>
      </div>
    </div>
  );
}
