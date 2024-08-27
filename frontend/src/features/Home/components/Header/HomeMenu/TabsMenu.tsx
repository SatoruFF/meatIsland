import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames"

import { PATHS } from "../../../../../constants/paths";
import styles from "../styles.module.less";

interface Tab {
  title: string;
  path: string;
}

const TabsMenu: React.FC = () => {

  const navigate = useNavigate()

  const [tabsMenu] = useState<{ [key: number]: Tab }>({
    1: { title: "Продукция", path: PATHS.CATALOG_PATH },
    2: { title: "Отзывы", path: PATHS.REVIEWS },
    3: { title: "Контакты", path: PATHS.CONTACTS },
  });

  return (
    <span className={styles.containerTabsMenu}>
      {Object.values(tabsMenu).map((tab, index) => (
        <div className={cn(styles.navigateItem)} onClick={() => navigate(tab.path)} key={index}>{tab.title}</div>
      ))}
    </span>
  );
};

export default TabsMenu;
