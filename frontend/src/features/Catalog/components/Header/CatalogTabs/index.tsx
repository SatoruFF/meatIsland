import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import _ from "lodash";
import { Empty, Spin, message } from "antd";

import { PATHS } from "../../../../../constants/paths";
import styles from "../styles.module.less";
import { getCategories } from "../../../../../services/productService";

type ItemAttrs = {
  name: string;
}

interface Category {
  id: string;
  attributes: ItemAttrs
}

interface Tab {
  title: string;
  id: string;
}

interface CategoryItems {
  [id: string]: Tab;
}

const CatalogTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>("");
  const [categoryItems, setCategoryItems] = useState<CategoryItems>({});
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const mapCategoryItems = (data: Category[]): CategoryItems => {
    const result: CategoryItems = {};
    console.log("DATA", data);
    
    _.forEach(data, (item) => {
      result[item.id] = { title: item.attributes.name, id: item.id };
    });
    console.log("res", result);
    
    return result;
  };

  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        setIsLoading(true)
        const data = await getCategories();        
        setCategoryItems(mapCategoryItems(data));
      } catch(e: any) {
        console.error(e.message)
        message.error("Что-то пошло не так при загрузке категорий.");
      } finally {
        setIsLoading(false)
      }
    };

    fetchCategoryItems();
  }, []);

  // Update active tab when categories or location.pathname changes
  useEffect(() => {
    if (_.isEmpty(categoryItems)) return;    
    const currentTab = Object.values(categoryItems).find((tab) =>
      location.pathname.includes(tab.id)
    );
    if (currentTab) {
      setActiveTab(currentTab.id);
    } else {
      setActiveTab("");
    }
  }, [categoryItems, location.pathname]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    const path = PATHS.CATALOG_PATH_ID.replace(":id", id);
    navigate(path);
  };

  return (
    <div className={styles.catalogTabsContainer}>
      <span className={styles.catalogTabs}>
        {isLoading && <Spin/>}
        {!_.isEmpty(categoryItems) && (
          _.map(categoryItems, (tab) => (
            <div
              onClick={() => handleTabClick(tab.id)}
              className={`${styles.catalogTab} ${
                activeTab === tab.id ? styles.activeTab : ""
              }`}
              key={tab.id}
            >
              {tab.title}
            </div>
          ))
        )}
      </span>
    </div>
  );
};

export default CatalogTabs;
