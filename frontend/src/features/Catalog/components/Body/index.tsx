import { Outlet } from "react-router-dom";

import Basket from "./components/Basket";

import styles from "./stylesBody.module.less";

const CatalogBody = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.basketContainer}>
        <Basket />
      </div>
      <div className={styles.categoryContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default CatalogBody;
