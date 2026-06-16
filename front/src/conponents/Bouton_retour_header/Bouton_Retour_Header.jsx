import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Bouton_Retour_Header.scss";

export default function BoutonRetourHaut() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const gererScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", gererScroll);

    return () => {
      window.removeEventListener("scroll", gererScroll);
    };
  }, []);

  const retourHaut = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`bouton-retour-haut ${visible ? "visible" : ""}`}
      alt="Retour en haut de la page"
      onClick={retourHaut}
    >
      <FaArrowUp />
    </button>
  )
}
