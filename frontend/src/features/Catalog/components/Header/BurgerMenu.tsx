import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./styles.module.less";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../../constants/paths";

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (anchor: string) => {
    navigate(PATHS.WELCOME_PATH, { state: { scrollTo: anchor } });
  };
  return (
    <>
      <div className={styles.BurgerContainer} onClick={toggleMenu}>
        {isMenuOpen ? (
          <CloseOutlined style={{ fontSize: 25, color: "#fff" }} />
        ) : (
          <MenuOutlined style={{ fontSize: 25 }} />
        )}
      </div>
      <div
        className={`${styles.SideMenu} ${
          isMenuOpen ? styles.MenuOpen : styles.MenuClosed
        }`}
      >
        <div className={styles.MenuContent}>
          <div
            className={styles.MenuItem}
            onClick={() => handleNavigate("part-0")}
          >
            О нас
          </div>
          <div
            className={styles.MenuItem}
            onClick={() => handleNavigate("part-1")}
          >
            Отзывы
          </div>
          <div
            className={styles.MenuItem}
            onClick={() => handleNavigate("part-2")}
          >
            Наши магазины
          </div>
          <div
            className={styles.MenuItem}
            onClick={() => handleNavigate("part-3")}
          >
            Сертификаты
          </div>
          <div
            className={styles.MenuItem}
            onClick={() => handleNavigate("part-4")}
          >
            Контакты
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
