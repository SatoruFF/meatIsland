import { Outlet } from "react-router-dom";

import BasketProduct from "./components/BasketProduct";

import styles from "./stylesBody.module.less";

const CatalogBody = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.basketContainer}>
        <BasketProduct />
      </div>
      <div className={styles.categoryContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default CatalogBody;
