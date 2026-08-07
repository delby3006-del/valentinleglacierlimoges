import "./Conteneur_Glaces.scss";
import ConteneurGlaces from "../Conteneur_Glaces_Generique/Conteneur_Glaces_Generique";

export default function Conteneur_Glaces() {
  return (
    <section className="conteneur-glaces" id="conteneur-glaces">
      <div className="conteneur-glaces-fond">
        <div className="conteneur-glaces-colone">
          <p className="titre-conteneur-glaces">NOTRE SÉLECTION</p>
          <h2 className="text-conteneur-glaces">Nos Parfums du Moment</h2>
          <p className="bio-conteneur-glaces">
            🌿 Agriculture Biologique certifiée
          </p>
          <section className="section-conteneur-glaces">
            <div className="conteneur-glaces-parfumes">
              <ConteneurGlaces    idType={1}actif={1} bioSeulement={true} titre="🍦 Crèmes Glacées" />
            </div>

            <div className="conteneur-glaces-parfumes">
              <ConteneurGlaces    idType={2} actif={1} bioSeulement={true} titre="🍧 Sorbets" />
            </div>
          </section>
          <div className="conteneur-glaces-emporter">
            <p className="text-conteneur-glaces-emporter">
              PLUS UN LARGE CHOIX ½ LITRE À EMPORTER
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
