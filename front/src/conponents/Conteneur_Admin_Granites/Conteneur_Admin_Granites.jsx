import Conteneur_Granites_Generique from "../Conteneur_Granites_Generique/Conteneur_Granites_Generique";
import "./Conteneur_Admin_Granites.scss";

export default function Conteneur_Admin_Granites() {
  return (
    <section className="section-admin-granites">
      <h3 className="titre-admin-granites">Gestion des Granités</h3>

      <Conteneur_Granites_Generique afficherCheckbox={true} />
    </section>
  );
}
