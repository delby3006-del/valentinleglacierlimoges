import "./Conteneur_Presentation_Images.scss";

export default function Conteneur_Presentation_Images() {
  return (
    <div className="font-image-glace">
      <div className="deuxieme-font-image-glace"></div>
      <div className="troisieme-font-image-glace"></div>
      <img
        src="/images/glace3B.png"
        alt="Glace 3 boules de différentes saveurs"
        className="image-presentation"
      />
    </div>
  );
}
