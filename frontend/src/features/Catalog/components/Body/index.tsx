import { Routes, Route } from "react-router-dom";

import CategoryContainer from "./CategoryContainer";

import routes from "../../../../shared/utils/routes";

import styles from "./stylesBody.module.less";

const CatalogBody = () => {
  return (
    <div className={styles.catalogBody}>
      <Routes>
        <Route path={routes.category} element={<CategoryContainer />} />
      </Routes>
    </div>
  );
};

export default CatalogBody;
