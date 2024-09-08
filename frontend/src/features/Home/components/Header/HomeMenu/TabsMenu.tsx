import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import { PATHS } from "../../../../../constants/paths";
import styles from "../styles.module.less";

interface Tab {
  title: string;
  path: string;
}

const TabsMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <span className={styles.containerTabsMenu}>
      <div
        className={cn(styles.navigateItem)}
        onClick={() => navigate(PATHS.CATALOG_PATH)}
      >
        Продукция
      </div>
      <div className={cn(styles.navigateItem)}>
        <a href="#part-2">Отзывы</a>
      </div>
      <div className={cn(styles.navigateItem)}>
        <a href="#part-2">Контакты</a>
      </div>
      <div className={cn(styles.navigateItem)}>
        <a href="#part-3">Сертификаты</a>
      </div>
    </span>
  );
};

export default TabsMenu;
