import { Routes, Route } from "react-router-dom";

import CategoryContainer from "./CategoryContainer";

import routes from "../../../../shared/utils/routes";

const CatalogBody = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.category} element={<CategoryContainer />} />
      </Routes>
    </div>
  );
};

export default CatalogBody;
