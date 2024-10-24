import ProductItem from "./ProductItem";

import styles from "../stylesBody.module.less";

const MainCatalog = () => {
  return (
    <div>
      <div className={styles.mainCatalogTitleBlock}>
        <div className={styles.mainCard}>
          <h2 className={styles.mainCardTitle}>
            <span className={styles.titleHalal}>Халяльное</span> фермерское мясо
            и полуфабрикаты в Казани
          </h2>
          <p className={styles.mainCardDescriptions}>
            Cвежая и качественная продукция, соответствующая строгим стандартам.
            <br />У нас есть стейки, котлеты и домашние колбасы. Насладитесь
            натуральными продуктами для любого повода!
          </p>
        </div>
      </div>
      <div>
        <p className={styles.recomendText}>Рекомендации:</p>
        <ProductItem />
      </div>
    </div>
  );
};
export default MainCatalog;
