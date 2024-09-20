import _ from "lodash";
import basketStore from "../../../../../store/storeBascet";
import styles from "../stylesBody.module.less";
import React, { useEffect, useState } from "react";
import ProductModal from "./ProductModal";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../../../../services/productService";
import { message, Spin } from "antd";

interface IProductAttributes {
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  available: boolean;
  weight: string | null; 
  StockQuantity: number | null;
  tradePrice: number | null;
  // TODO: need to add sequense with category for filter item
}

interface IProduct {
  id: number;
  attributes: IProductAttributes;
}


const ProductItem = React.memo(() => {

  const location = useLocation();
  const { addToBasket } = basketStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openItemModal, setOpenItemModal] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const addToBasketClick = (item) => {
    addToBasket(item);
    setIsModalOpen(false);
  };

  const openModal = (item) => {
    setOpenItemModal(item);
    setIsModalOpen(true);
  };

  const cancelModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div className={styles.gridContainer}>
      {_.map(products, (item: IProduct) => (
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
                <p className={styles.description}>{item.attributes.description}</p>
                <div className={styles.numInfo}>
                  <p className={styles.price}>{item.attributes.price} ₽</p>
                  <p className={styles.weight}>{item.attributes.weight}</p>
                </div>
              </div>
            </div>
            <div onClick={() => addToBasket(item)} className={styles.addBtn}>
              <p>Добавить в корзину</p>
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
