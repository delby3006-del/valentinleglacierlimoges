import Conteneur_Italiennes_Generique from "../Conteneur_Italiennes_Generique/Conteneur_Italiennes_Generique";
import "../Conteneur_Italiennes/Conteneur_Italiennes.scss";

export default function Conteneur_Admin_Italiennes() {
  return (
    <section className="italienne" id="section-italiennes">
      <div className="conteneur-italiennes">
        <h2>Italiennes</h2>
        <Conteneur_Italiennes_Generique afficherCheckbox={true} />
      </div>
    </section>
  );
}
