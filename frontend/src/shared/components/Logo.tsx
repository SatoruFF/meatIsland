import styles from "./styles.module.less";

const Logo = () => {
  return (
    <span className={styles.containerLogo}>
      <h1 className={styles.titleLogo}>Мясной Остров</h1>
      <p className={styles.iconLogo} />
    </span>
  );
};

export default Logo;
