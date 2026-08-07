import { useState } from "react";
import Conteneur_Granites_Generique from "../Conteneur_Granites_Generique/Conteneur_Granites_Generique";
import "./Conteneur_Granites.scss";

export default function Conteneur_Granites() {
  const [afficherBloc, setAfficherBloc] = useState(true);

  if (!afficherBloc) {
    return null;
  }

  return (
    <section className="section-granites" id="section-granites">
      <h3 className="titre-granites">Nos Granités <img src="/images/logoeuropeenAB.png" alt="Granités" className="logo-bio-fond-vert-titre-granites" /></h3>

      <Conteneur_Granites_Generique onAfficherBlocChange={setAfficherBloc} />
    </section>
  );
}
