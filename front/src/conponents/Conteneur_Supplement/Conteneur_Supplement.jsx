import { useState } from "react";
import Conteneur_Italiennes_Generique from "../Conteneur_Italiennes_Generique/Conteneur_Italiennes_Generique";
import Conteneur_Italiennes from "../Conteneur_Italiennes/Conteneur_Italiennes";
import Conteneur_Granites from "../Conteneur_granites/Conteneur_Granites";
import Conteneur_Granites_Generique from "../Conteneur_Granites_Generique/Conteneur_Granites_Generique";
import "../Conteneur_Supplement/Conteneur_Supplement.scss";

export default function Conteneur_Supplements() {
  const [italiennesVisibles, setItaliennesVisibles] = useState(false);
  const [granitesVisibles, setGranitesVisibles] = useState(false);
  const [italiennesChargees, setItaliennesChargees] = useState(false);
  const [granitesChargees, setGranitesChargees] = useState(false);

  const handleItaliennesChange = (visible) => {
    setItaliennesVisibles(visible);
    setItaliennesChargees(true);
  };

  const handleGranitesChange = (visible) => {
    setGranitesVisibles(visible);
    setGranitesChargees(true);
  };

  if (!italiennesChargees || !granitesChargees) {
    return (
      <div style={{ display: "none" }}>
        <Conteneur_Italiennes_Generique
          onAfficherBlocChange={handleItaliennesChange}
          version="supplement"
        />

        <Conteneur_Granites_Generique
          onAfficherBlocChange={handleGranitesChange}
          version="supplement"
        />
      </div>
    );
  }

if (!italiennesVisibles && !granitesVisibles) {
  return null;
}

if (italiennesVisibles && !granitesVisibles) {
  return (
    <section id="section-supplements-saison">
      <Conteneur_Italiennes />
    </section>
  );
}

if (!italiennesVisibles && granitesVisibles) {
  return (
    <section id="section-supplements-saison">
      <Conteneur_Granites />
    </section>
  );
}


return (
  <section
    className="section-supplements-saison"
    id="section-supplements-saison"
  >
    <h2 className="titre-supplements-saison">
      Les suppléments de saison
    </h2>

      <div className="conteneur-supplements-saison">
        <div className="bloc-supplement-saison">
          <h3 className="titre-bloc-supplement">Nos Glaces à l'Italiennes
            <img src="/images/logoeuropeenAB.png" alt="Italiennes" className="logo-bio-fond-vert-titre-supplement" />
          </h3>

          <div className="carte-supplement-saison">
            <Conteneur_Italiennes_Generique version="supplement" />
          </div>
        </div>

        <div className="bloc-supplement-saison">
          <h3 className="titre-bloc-supplement">Nos Granités
            <img src="/images/logoeuropeenAB.png" alt="Granités" className="logo-bio-fond-vert-titre-supplement" />
          </h3>

          <div className="carte-supplement-saison">
            <Conteneur_Granites_Generique version="supplement" />
          </div>
        </div>
      </div>
    </section>
  );
}
