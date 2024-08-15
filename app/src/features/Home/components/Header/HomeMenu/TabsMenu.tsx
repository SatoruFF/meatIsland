import React, { useState } from "react";

import styles from "../styles.module.less";

interface Tab {
  title: string;
}

const TabsMenu: React.FC = () => {
  const [tabsMenu] = useState<{ [key: number]: Tab }>({
    1: { title: "Продукция" },
    2: { title: "Отзывы" },
    3: { title: "Сертификаты" },
    4: { title: "Контакты" },
  });

  return (
    <span className={styles.containerTabsMenu}>
      {Object.values(tabsMenu).map((tab, index) => (
        <div key={index}>{tab.title}</div>
      ))}
    </span>
  );
};

export default TabsMenu;
