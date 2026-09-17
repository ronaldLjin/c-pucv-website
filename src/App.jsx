import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import IndigenousCareVillage from "./pages/IndigenousCareVillage.jsx";
import RecapJan2023 from "./pages/RecapJan2023.jsx";
import RecapSep2022 from "./pages/RecapSep2022.jsx";

export default function App() {
  const { search, hash } = useLocation();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<IndigenousCareVillage />} />
        <Route path="/calgary-pop-up-care-village" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/indigenous-pop-up-care-village"
          element={<Navigate to={{ pathname: "/", search, hash }} replace />}
        />
        <Route path="/01-24-2023" element={<RecapJan2023 />} />
        <Route path="/09-27-2022" element={<RecapSep2022 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
