import styles from "../styles.module.less";

const TitleHeader = () => {
  return (
    <>
      <div className={styles.containerTitleHeader}>
        <h2>
          <span className={styles.titleHalal}>Халяльное</span> фермерское мясо и
          полуфабрикаты
        </h2>
        <h3>
          — это свежая и качественная продукция, соответствующая строгим
          стандартам. У нас есть стейки, котлеты и домашние колбасы. Насладитесь
          натуральными продуктами для любого повода!
        </h3>
      </div>
      <span className={styles.IconHalal} />
    </>
  );
};

export default TitleHeader;
