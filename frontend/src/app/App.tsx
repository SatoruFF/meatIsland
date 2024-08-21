import { Routes, Route } from "react-router-dom";

import CatalogPage from "../features/Catalog";
import HomePage from "../features/Home";

import routes from "../shared/utils/routes";

import "../styles/App.css";
import CategoryContainer from "../features/Catalog/components/Body/CategoryContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.catalogs} element={<CatalogPage />} />
      </Routes>
    </>
  );
}

export default App;
