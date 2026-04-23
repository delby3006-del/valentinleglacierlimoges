import ConteneurBoissons from "../Conteneur_Boissons_Generique/Conteneur_Boissons_Generique";
import "./Conteneur_Boissons.css";

export default function Conteneur_Boissons() {
  return (
    <section className="boissons" id="section-boissons">
      <h3 className="titre-conteneur-boissons">Nos Boissons</h3>
      <div className="bloc-boissons">
        <div className="colonnes-boissons">
          <ConteneurBoissons idType={1} titre="Chaudes" />
          <ConteneurBoissons idType={2} titre="Froides" />
        </div>
      </div>
    </section>
  );
}
