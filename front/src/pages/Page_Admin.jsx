import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../conponents/Haeder/Header";
import Conteneur_Admin_Glaces from "../conponents/Conteneur_Admin_Glaces/Conteneur_Admin_Glaces";
import Conteneur_Admin_Gourmandises from "../conponents/Conteneur_Admin_Gourmandises/Conteneur_Admin_Gourmandises";

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
      <Conteneur_Admin_Gourmandises />
    </div>
  );
}
