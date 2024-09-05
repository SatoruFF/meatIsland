import Logo from "../../../../shared/components/Logo";

import styles from "./styles.module.less";
import CatalogTabs from "./CatalogTabs";
import BurgerMenu from "../Body/components/BurgerMenu";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.containerLogo}>
        <BurgerMenu />
        <Logo />
      </div>
      <div className={styles.containerCatalogTabs}>
        <CatalogTabs />
      </div>
    </div>
  );
};

export default Header;
