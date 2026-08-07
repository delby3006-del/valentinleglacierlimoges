import { useState } from "react";
import Conteneur_Italiennes_Generique from "../Conteneur_Italiennes_Generique/Conteneur_Italiennes_Generique";
import "./Conteneur_Italiennes.scss";
import "../Conteneur_Italiennes_Generique/Conteneur_Italiennes_Generique.scss";

export default function Conteneur_Italiennes() {
  const [afficherBloc, setAfficherBloc] = useState(true);

  if (!afficherBloc) {
    return null;
  }

  return (
    <section className="italienne" id="section-italiennes">
      <div className="conteneur-italiennes">
        <h2>Nos Glace à l'Italiennes
          <img src="/images/logoeuropeenAB.png" alt="Italiennes" className="logo-bio-fond-vert-titre-italiennes" />
        </h2>

        <Conteneur_Italiennes_Generique
          onAfficherBlocChange={setAfficherBloc}
        />
      </div>
    </section>
  );
}
