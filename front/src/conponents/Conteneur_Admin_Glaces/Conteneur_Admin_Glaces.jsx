import "./Conteneur_Admin_Glaces.css";
import ConteneurGlaces from "../Conteneur_Glace_Generique/Conteneur_Glaces_Generique";

export default function Conteneur_Admin_Glaces() {
  return (
    <section className="conteneur-glaces" id="conteneur-glaces">
      <div className="conteneur-glaces-fond">
        <div className="conteneur-glaces-colone">
          <section className="section-conteneur-glaces">
            <div className="conteneur-glaces-parfumes">
              <ConteneurGlaces
                idType={1}
                titre="🍦 Crèmes Glacées"
                afficherCheckbox={true}
              />
            </div>

            <div className="conteneur-glaces-parfumes">
              <ConteneurGlaces
                idType={2}
                titre="🍧 Sorbets"
                afficherCheckbox={true}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
