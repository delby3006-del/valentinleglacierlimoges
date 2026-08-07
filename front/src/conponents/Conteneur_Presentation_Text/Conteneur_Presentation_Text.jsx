import "./Conteneur_Presentation_Text.scss";
import Coordonnees from "../Coordonnees/Coordonnes";

export default function Conteneur_Presentation_Text() {
  return (
    <div className="conteneur-presentation-text">
      <h1 className="titre-presentation">
        Valentin <br />
        <small className="titre-secondary">le glacier</small>
      </h1>
      <img
        className="logo-bio-fond-vert"
        src="/images/logoeuropeenAB.png"
        alt="Logo Valentin le glacier"
      />
      <div className="description-presentation-container">
        <h2 className="description-presentation">
          Des glaces <br className="description-secondary" />
          biologiques & artisanals
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
          <p>AB · Artisanal</p>
        </div>
      </div>
    </div>
  );
}
