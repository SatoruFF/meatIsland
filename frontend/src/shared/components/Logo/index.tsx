import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../constants/paths";

import styles from "./styles.module.less";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <span
      className={styles.containerLogo}
      onClick={() => navigate(PATHS.CATALOG_PATH)}
    >
      <h1 className={styles.titleLogo}>Мясной Остров</h1>
      <p className={styles.iconLogo} />
    </span>
  );
};

export default Logo;
