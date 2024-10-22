import _ from "lodash";
import qs from "qs";
import cn from "classnames"
import { Outlet, useParams } from "react-router-dom";
import { Input } from "antd";

import BasketProduct from "./components/BasketProduct";

import styles from "./stylesBody.module.less";
import useProducts from "../../../../store/storeProducts";
import { getProducts } from "../../../../services/productService";

const CatalogBody = () => {
  const { setProducts } = useProducts();
  const { id: queryCategoryId } = useParams();

  // TODO: тут зачем то повторяем логику другой компоненты и хардкодим фильтры с полями,
  // по хорошему заняться рефактором
  const getCachedProducts = _.memoize(async (query) => {
    const { data } = await getProducts(query);
    return _.sortBy(data, "id");
  });

  const fetchSearchedProducts = _.debounce(async (value: string) => {
    let queryObject: any = {
      filters: {},
    };
  
    if (queryCategoryId) {
      queryObject.filters.category = queryCategoryId;
  
      const searchValue = value.trim().toLowerCase();
      if (searchValue) {
        queryObject.filters.name = { $containsi: searchValue };
      }
    } else {
      queryObject.filters.recommendation = true;
    }
  
    const queryString = qs.stringify(queryObject, { encode: false });
  
    const decodedQueryString = decodeURIComponent(queryString);
  
    const products = await getCachedProducts(`?${decodedQueryString}`);
    setProducts(products);
  }, 300);
  

  const handleSearchInput = (value: string) => {
    fetchSearchedProducts(value);
  };

  return (
    <div className={styles.catalog}>
      <div className={styles.basketContainer}>
        <Input
          onChange={(e) => handleSearchInput(e.target.value)}
          className={cn(styles.catalogSearch)}
          placeholder="Поиск товара..."
        />
        <BasketProduct />
      </div>
      <div className={styles.categoryContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default CatalogBody;
