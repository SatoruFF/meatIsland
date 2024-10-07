import { Modal } from "antd";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import styles from "../stylesBody.module.less";

const BasketModal = ({ items, isOpen, onClose, countProduct, sumPrice }) => {
  const [modalWidth, setModalWidth] = useState("60%"); // Начальная ширина модалки
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setModalWidth("90%");
      } else {
        setModalWidth("60%");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isOpen || !items) return null;

  return (
    <Modal
      title={<h2 className={styles.modalTitle}>В корзине:</h2>}
      open={isOpen}
      footer={null}
      onCancel={onClose}
      width={modalWidth}
    >
      <div className={styles.BasketModalContainer}>
        <div className={styles.productContainer}>
          {countProduct > 0 ? (
            <div>
              {_.map(items, (product) => (
                <div key={product.id} className={styles.basketItem}>
                  <div className={styles.containerClick}>
                    <img
                      className={styles.imageBasketItem}
                      src="https://roscontrol.com/files/original_images/articles/94/cf/94cfa966daf5ef5409cb.jpg"
                      alt={product.attributes.title}
                    />
                    <div className={styles.itemDetails}>
                      <p>{product.attributes.name}</p>
                      <p>{product.attributes.weight}</p>
                      <p>{product.attributes.price} ₽</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.sum}>
                <p>Итого</p>
                <p>{sumPrice} ₽</p>
              </div>
            </div>
          ) : (
            <div>Тут пока пусто :(</div>
          )}
        </div>

        <div className={styles.mainText}>
          К сожалению, сейчас доставку можно оформить только по телефону, но
          скоро всё изменится :)
          <div className={styles.adressContainer}>
            <div>
              <p>Заказать можно тут:</p>
              <div>
                по адресу ул. Фатыха Амирхана, д.21, г. Казань: +7 (930)
                833-38-11
              </div>
            </div>
            <div>
              <div>
                по адресу ул. Фатыха Амирхана, д.21, г. Казань: +7 (930)
                833-38-11
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BasketModal;
