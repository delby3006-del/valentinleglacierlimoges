import "./Conteneur_Presentation.css";
import Conteneur_Presentation_Images from "../Conteneur_Presentation_Images/Conteneur_Presentation_Images.jsx";
import Conteneur_Presentation_Text from "../Conteneur_Presentation_Text/Conteneur_Presentation_Text.jsx";

export default function Conteneur_Presentation() {
  return (
    <section className="conteneur-presentation" id="conteneur-presentation">
      <Conteneur_Presentation_Images />
      <Conteneur_Presentation_Text />
    </section>
  );
}
