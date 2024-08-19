import Logo from "./HomeMenu/Logo";
import TabsMenu from "./HomeMenu/TabsMenu";

import styles from "./styles.module.less";

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <Logo />
      <TabsMenu />
    </div>
  );
};

export default Header;
