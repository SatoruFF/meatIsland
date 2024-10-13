import Logo from "../../../../shared/components/Logo";

import styles from "./styles.module.less";
import CatalogTabs from "./CatalogTabs";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <BurgerMenu />
        <div className={styles.catalogContainerLogo}>
          <Logo />
        </div>
      </div>
      <div className={styles.containerCatalogTabs}>
        <CatalogTabs />
      </div>
    </div>
  );
};

export default Header;
