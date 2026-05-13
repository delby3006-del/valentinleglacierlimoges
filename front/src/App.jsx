import "./App.css";
import { Routes, Route } from "react-router-dom";

import Page_accueil from "./pages/Page_Accueil.jsx";
import Page_login from "./pages/Page_Login.jsx";
import Page_admin from "./pages/Page_Admin.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page_accueil />} />
        <Route path="/login" element={<Page_login />} />
        <Route path="admin" element={<Page_admin />} />
        <Route path="/tv" element={<Pages_TV_Principale />} />
      </Routes>
    </>
  );
}

export default App;
