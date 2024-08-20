import { Routes, Route } from "react-router-dom";

import Catalog from "../features/Catalog";
import Home from "../features/Home";

import routes from "../shared/utils/routes";

import "../styles/App.css";
import CategoryContainer from "../features/Catalog/components/Body/CategoryContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.catalogs} element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
