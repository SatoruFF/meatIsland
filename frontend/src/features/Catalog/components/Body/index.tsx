import { Routes, Route } from "react-router-dom";

import CategoryContainer from "./components/CategoryContainer";

import routes from "../../../../shared/utils/routes";

import styles from "./stylesBody.module.less";
import Basket from "./components/Basket";

const CatalogBody = () => {
  return (
    <div className={styles.catalog}>
      <Basket />
      <div className={styles.categoryContainer}>
        <Routes>
          <Route path={routes.category} element={<CategoryContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default CatalogBody;
