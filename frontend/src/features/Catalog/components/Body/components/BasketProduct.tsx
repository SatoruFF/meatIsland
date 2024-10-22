import _ from "lodash";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "../stylesBody.module.less";
import { useEffect, useState } from "react";
import basketStore from "../../../../../store/storeBasket";
import ProductModal from "./ProductModal";
import DeliveryModal from "./DeliveryModal";

const BasketProduct = () => {
  const {
    basket,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalPrice,
  } = basketStore();

  const [basketProduct, setBasketProduct] = useState(basket);
  const [countProduct, setCountProduct] = useState<number>(0);
  const [sumPrice, setSumPrice] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openItemModal, setOpenItemModal] = useState({});
  const [isOpenFormDeliveryModal, setOpenFormDeliveryModal] = useState(false);

  const openModal = (item) => {
    setOpenItemModal(item);
    setIsModalOpen(true);
  };

  const openFormModal = () => {
    setOpenFormDeliveryModal(true);
  };

  const cancelModal = () => {
    setIsModalOpen(false);
    setOpenFormDeliveryModal(false);
  };

  useEffect(() => {
    const newCountProduct = Object.keys(basket).length;
    setBasketProduct(basket);
    setSumPrice(getTotalPrice());
    setCountProduct(newCountProduct);
  }, [basket, cart]);

  return (
    <div className={styles.basket}>
      <div className={styles.basketHeader}>
        <h3>Корзина</h3>
        <div className={styles.countBasket}>{countProduct}</div>
      </div>
      {countProduct > 0 ? (
        _.map(basketProduct, (product) => (
          <div key={product.id} className={styles.basketItem}>
            <div
              className={styles.containerClick}
              onClick={() => openModal(product)}
            >
              <img
                className={styles.imageBasketItem}
                src={
                  _.get(product, [
                    "attributes",
                    "image",
                    "data",
                    "0",
                    "attributes",
                    "url",
                  ]) ||
                  "https://roscontrol.com/files/original_images/articles/94/cf/94cfa966daf5ef5409cb.jpg"
                }
                alt={product.attributes.name}
              />
              <div className={styles.itemDetails}>
                <p>{product.attributes.name}</p>
                <p>{product.attributes.weight}</p>
                <p>{product.attributes.price} ₽</p>
              </div>
            </div>
            <div className={styles.itemCount}>
              <button
                className={styles.btnCount}
                onClick={() =>
                  product?.quantity === 1
                    ? removeFromCart(product.id)
                    : decreaseQuantity(product.id)
                }
              >
                <MinusOutlined />
              </button>
              <p>{product?.quantity || 1}</p>
              <button
                className={styles.btnCount}
                onClick={() => increaseQuantity(product.id)}
              >
                <PlusOutlined />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>Тут пока пусто :(</div>
      )}
      {countProduct > 0 && (
        <>
          <div className={styles.sum}>
            <p>Итого</p>
            <p>{sumPrice}₽</p>
          </div>
          <div className={styles.addBasket} onClick={openFormModal}>
            Оформить доставку
          </div>
        </>
      )}
      <ProductModal
        item={openItemModal}
        isOpen={isModalOpen}
        onClose={cancelModal}
      />
      <DeliveryModal
        items={basketProduct}
        isOpen={isOpenFormDeliveryModal}
        onClose={cancelModal}
        countProduct={countProduct}
        sumPrice={sumPrice}
      />
    </div>
  );
};

export default BasketProduct;
