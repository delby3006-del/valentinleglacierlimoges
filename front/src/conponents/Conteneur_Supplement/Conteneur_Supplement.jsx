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
    return <Conteneur_Italiennes />;
  }

  if (!italiennesVisibles && granitesVisibles) {
    return <Conteneur_Granites />;
  }

  return (
    <section className="section-supplements-saison">
      <h2 className="titre-supplements-saison">Les suppléments de saison</h2>

      <div className="conteneur-supplements-saison">
        <div className="bloc-supplement-saison">
          <h3 className="titre-bloc-supplement">Nos Glaces Italiennes</h3>

          <div className="carte-supplement-saison">
            <Conteneur_Italiennes_Generique version="supplement" />
          </div>
        </div>

        <div className="bloc-supplement-saison">
          <h3 className="titre-bloc-supplement">Nos Granités</h3>

          <div className="carte-supplement-saison">
            <Conteneur_Granites_Generique version="supplement" />
          </div>
        </div>
      </div>
    </section>
  );
}
