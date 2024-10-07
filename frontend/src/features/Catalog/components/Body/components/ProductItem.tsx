import _ from "lodash";
import basketStore from "../../../../../store/storeBascet";
import styles from "../stylesBody.module.less";
import React, { useEffect, useState } from "react";
import ProductModal from "./ProductModal";
import { useLocation, useParams } from "react-router-dom";
import { getProducts } from "../../../../../services/productService";
import { message, Spin } from "antd";

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
  const [openItemModal, setOpenItemModal] = useState({});
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Нужно отправлять запрос с фильтрацией, а не фильтровать тут
  const filterProductsByCategory = (categoryId: number) => {
    const filtered = products.filter((p: IProduct) => {
      const { attributes } = p;
      const currentCategoryRelation = _.get(attributes, [
        "category",
        "data",
        "id",
      ]);
      return currentCategoryRelation === categoryId;
    });
    setFilteredProducts(filtered);
  };

  // Вызов фильтрации при изменении категории
  useEffect(() => {
    if (queryCategoryId && products.length) {
      filterProductsByCategory(Number(queryCategoryId));
    }
  }, [queryCategoryId, products]);

  // Загрузка продуктов
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProducts();
        setProducts(data);
      } catch (e: any) {
        console.error(e.message);
        message.error("Что-то пошло не так при загрузке товаров.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

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

  if (!filteredProducts.length) {
    return (
      <h1 className={styles.titleDontProduct}>
        В данной категории к сожелению нет товаров
      </h1>
    );
  }

  return (
    <div className={styles.gridContainer}>
      {_.map(filteredProducts, (item: IProduct) => (
        <div key={item.id}>
          <div key={item.id} className={styles.item}>
            <div onClick={() => openModal(item)}>
              <img
                className={styles.imageItem}
                src="https://roscontrol.com/files/original_images/articles/94/cf/94cfa966daf5ef5409cb.jpg"
                alt={item.attributes.name}
              />
              <div className={styles.itemContent}>
                <h3 className={styles.title}>{item.attributes.name}</h3>
                <p className={styles.description}>
                  {item.attributes.description}
                </p>
              </div>
            </div>
            <div className={styles.footerItemCard}>
              <div className={styles.numInfo}>
                <p className={styles.price}>{item.attributes.price} ₽</p>
                <p className={styles.weight}>{item.attributes.weight}</p>
              </div>
              <div onClick={() => addToBasket(item)} className={styles.addBtn}>
                <p>Добавить в корзину</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <ProductModal
        item={openItemModal}
        isOpen={isModalOpen}
        onClose={cancelModal}
        addToBasket={addToBasketClick}
      />
    </div>
  );
});

export default ProductItem;
