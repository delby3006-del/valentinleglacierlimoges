import Conteneur_Presentation from "../conponents/Conteneur_Presentation/Conteneur_Presentation";
import BandeauDefilant from "../conponents/Bandeau_Deroulant/Bandeau_Deroulant";
import Conteneur_Histoire from "../conponents/Conteneur_Histoire/Conteneur_Histoire";
import Conteneur_Glaces from "../conponents/Conteneur_Glaces/Conteneur_Glaces";
import Conteneur_Gourmandises from "../conponents/Conteneur_Gourmandises/Conteneur_Gourmandises";
import Conteneur_Boissons from "../conponents/Conteneur_Boissons/Conteneur_Boissons";
import Header from "../conponents/Haeder/Header";
import Footer from "../conponents/Footer/Footer";

export default function Page_accueil() {
  return (
    <div>
      <Header mode="site" logoTo="/login" />
      <Conteneur_Presentation />
      <BandeauDefilant />
      <Conteneur_Histoire />
      <Conteneur_Glaces />
      <Conteneur_Gourmandises />
      <Conteneur_Boissons />
      <Footer />
    </div>
  );
}
