import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import _ from "lodash";
import { PATHS } from "../../../../../constants/paths";

import styles from "../styles.module.less";

interface Tab {
  title: string;
  id: string;
}

const CatalogTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>("");

  const tabsMenu: { [key: number]: Tab } = {
    1: { title: "Мясо", id: "1" },
    2: { title: "Колбаса", id: "2" },
    3: { title: "Пельмени", id: "3" },
    4: { title: "Фарш", id: "4" },
    5: { title: "Говядина", id: "5" },
    6: { title: "Баранина", id: "6" },
    7: { title: "Сосиски", id: "7" },
  };

  useEffect(() => {
    if (location.pathname === PATHS.CATALOG_PATH) {
      const firstKey: any = Object.keys(tabsMenu)[0];
      const firstCategory = tabsMenu[firstKey];
      handleTabClick(firstCategory.id);
    }
  }, []);

  useEffect(() => {
    const currentTab = Object.values(tabsMenu).find((tab) =>
      location.pathname.includes(tab.id)
    );
    if (currentTab) {
      setActiveTab(currentTab.id);
    }
  }, [location.pathname]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const path = PATHS.CATALOG_PATH_ID.replace(":id", id);
    navigate(path);
  };

  return (
    <span className={styles.catalogTabs}>
      {_.map(tabsMenu, (tab) => (
        <div
          onClick={() => handleTabClick(tab.id)}
          className={`${styles.catalogTab} ${
            activeTab === tab.id ? styles.activeTab : ""
          }`}
          key={tab.id}
        >
          {tab.title}
        </div>
      ))}
    </span>
  );
};

export default CatalogTabs;
