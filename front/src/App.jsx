import "./App.css";
import { Routes, Route } from "react-router-dom";

import Page_accueil from "./pages/Page_Accueil.jsx";
import Page_login from "./pages/Page_Login.jsx";
import Page_admin from "./pages/Page_Admin.jsx";
import Pages_TV_Principale from "./pages/Pages_TV_Pricipale.jsx";
import Page_Mention_Legale from "./pages/Page_Mention_Legale.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page_accueil />} />
        <Route path="/login" element={<Page_login />} />
        <Route path="admin" element={<Page_admin />} />
        <Route path="/tv" element={<Pages_TV_Principale />} />
        <Route path="/mention-legale" element={<Page_Mention_Legale />} />
      </Routes>
    </>
  );
}

export default App;
