import _ from "lodash";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { message, Spin } from "antd";

import basketStore from "../../../../../store/storeBascet";
import styles from "../stylesBody.module.less";
import ProductModal from "./ProductModal";
import { getProducts } from "../../../../../services/productService";

interface CategoryAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}

interface ProductAttributes {
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  available: boolean;
  weight: number | null;
  StockQuantity: number | null;
  tradePrice: number | null;
  category: {
    data: CategoryData;
  };
  image: string | null;
}

interface IProduct {
  id: number;
  attributes: ProductAttributes;
}

const ProductItem = React.memo(() => {
  const { id: queryCategoryId } = useParams();
  const { addToBasket } = basketStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openItemModal, setOpenItemModal] = useState<IProduct | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCachedProducts = _.memoize(async (query) => {
    const { data } = await getProducts(query);
    return _.sortBy(data, "id");
  });

  const fetchProductsByCategory = useCallback(async () => {
    try {
      setIsLoading(true);
      const queryByCategory = queryCategoryId
        ? `?filters[category]=${queryCategoryId}`
        : `?filters[recommendation]=true`; // if not filtered by query, try fetch only recommended products
      const products = await getCachedProducts(queryByCategory);
      setProducts(products);
    } catch (e: any) {
      console.error(e.message);
      message.error("Что-то пошло не так при загрузке товаров.");
    } finally {
      setIsLoading(false);
    }
  }, [queryCategoryId]);

  useEffect(() => {
    fetchProductsByCategory();
  }, [fetchProductsByCategory]);

  const addToBasketClick = (item: IProduct) => {
    addToBasket(item);
    setIsModalOpen(false);
  };

  const openModal = (item: IProduct) => {
    setOpenItemModal(item);
    setIsModalOpen(true);
  };

  const cancelModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Spin />;
  }

  if (!products.length) {
    return <h1> В данной категории нет товаров </h1>;
  }

  return (
    <div className={styles.gridContainer}>
      {products.map((item: IProduct) => (
        <div key={item.id} className={styles.item}>
          <div onClick={() => openModal(item)}>
            <img
              className={styles.imageItem}
              src={
                _.get(item, [
                  "attributes",
                  "image",
                  "data",
                  "0",
                  "attributes",
                  "url",
                ]) ||
                "https://roscontrol.com/files/original_images/articles/94/cf/94cfa966daf5ef5409cb.jpg"
              }
              alt={item.attributes.name}
            />
            <div className={styles.itemContent}>
              <h3 className={styles.title}>{item.attributes.name}</h3>
              <p className={styles.description}>
                {item.attributes.description}
              </p>
              <div className={styles.numInfo}>
                <p className={styles.price}>{item.attributes.price} ₽</p>
                {item.attributes.weight && (
                  <p className={styles.weight}>{item.attributes.weight} кг</p>
                )}
              </div>
            </div>
          </div>
          <div onClick={() => addToBasket(item)} className={styles.addBtn}>
            <p>Добавить в корзину</p>
          </div>
        </div>
      ))}
      {openItemModal && (
        <ProductModal
          item={openItemModal}
          isOpen={isModalOpen}
          onClose={cancelModal}
          addToBasket={addToBasketClick}
        />
      )}
    </div>
  );
});

export default ProductItem;
