import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../conponents/Haeder/Header";
import Conteneur_Admin_Glaces from "../conponents/Conteneur_Admin_Glaces/Conteneur_Admin_Glaces";
import Conteneur_Admin_Gourmandises from "../conponents/Conteneur_Admin_Gourmandises/Conteneur_Admin_Gourmandises";
import Conteneur_Admin_Boissons from "../conponents/Conteneur_Admin_Boissons/Conteneur_Admin_Boissons";
import Conteneur_Admin_Italiennes from "../conponents/Conteneur_Admin_Italiennes/Conteneur_Admin_Italiennes";
import Conteneur_Admin_Granites from "../conponents/Conteneur_Admin_Granites/Conteneur_Admin_Granites";

export default function Page_admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Header mode="admin" />
      <Conteneur_Admin_Glaces />
      <Conteneur_Admin_Italiennes />
      <Conteneur_Admin_Granites />
      <Conteneur_Admin_Gourmandises />
      <Conteneur_Admin_Boissons />
    </div>
  );
}
