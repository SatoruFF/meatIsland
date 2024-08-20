import Logo from "../../../../shared/components/Logo";

import styles from "./styles.module.less";
import CatalogTabs from "./CatalogTabs";

const Header = () => {
  return (
    <div>
      <div className={styles.containerLogo}>
        <Logo />
      </div>
      <div className={styles.containerCatalogTabs}>
        <CatalogTabs />
      </div>
    </div>
  );
};

export default Header;
