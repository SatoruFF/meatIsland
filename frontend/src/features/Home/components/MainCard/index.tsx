import styles from "./style.module.less";

const MainCard = () => {
  return (
    <>
      <div className={styles.mainCardContainer}>
        <div className={styles.mainCard}>
          <h2 className={styles.mainCardTitle}>
            <span className={styles.titleHalal}>Халяльное</span> фермерское мясо
            и полуфабрикаты
          </h2>
          <p className={styles.mainCardDescriptions}>
            Cвежая и качественная продукция, соответствующая строгим стандартам.
            <br />У нас есть стейки, котлеты и домашние колбасы. Насладитесь
            натуральными продуктами для любого повода!
          </p>
        </div>
      </div>
      <span className={styles.IconHalal} />
    </>
  );
};

export default MainCard;
