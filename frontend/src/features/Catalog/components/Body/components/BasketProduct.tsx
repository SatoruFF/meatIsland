import _ from "lodash";
import styles from "../stylesBody.module.less";
import { useEffect, useState } from "react";
import basketStore from "../../../../../store/storeBascet";
import ProductModal from "./ProductModal";

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

  const openModal = (item) => {
    setOpenItemModal(item);
    setIsModalOpen(true);
  };

  const cancelModal = () => {
    setIsModalOpen(false);
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
                src="https://roscontrol.com/files/original_images/articles/94/cf/94cfa966daf5ef5409cb.jpg"
                alt={product.title}
              />
              <div className={styles.itemDetails}>
                <p>{product.title}</p>
                <p>{product.weight}</p>
                <p>{product.price}</p>
              </div>
            </div>
            <div className={styles.itemCount}>
              <button
                onClick={() =>
                  (product?.quantity || 1) > 1
                    ? decreaseQuantity(product.id)
                    : removeFromCart(product.id)
                }
              >
                -
              </button>
              <p>{product?.quantity || 1}</p>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
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
          <div className={styles.addBasket}>Оформить доставку</div>
        </>
      )}
      <ProductModal
        item={openItemModal}
        isOpen={isModalOpen}
        onClose={cancelModal}
      />
    </div>
  );
};

export default BasketProduct;
