import { Routes, Route } from "react-router-dom";

import CategoryContainer from "./components/CategoryContainer";

import { PATHS } from "../../../../constants/paths";

import styles from "./stylesBody.module.less";
import Basket from "./components/Basket";

const CatalogBody = () => {
  return (
    <div className={styles.catalog}>
      <Basket />
      <div className={styles.categoryContainer}>
        <Routes>
          <Route path={PATHS.CATALOG_ITEM_PATH} element={<CategoryContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default CatalogBody;
