import { Modal } from "antd";

import React, { useEffect, useState } from "react";

import styles from "../stylesBody.module.less";

const ProductModal = ({ item, isOpen, onClose, addToBasket }) => {
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
  }, []);

  if (!isOpen || !item) return null;

  return (
    <Modal
      title={<h2 className={styles.modalTitle}>{item.attributes.name}</h2>}
      open={isOpen}
      footer={null}
      onCancel={onClose}
      width={modalWidth}
    >
      <div className={styles.productModal}>
        <div className={styles.container}>
          <img
            className={styles.imageItem}
            src="https://roscontrol.com/files/original_images/articles/94/cf/94cfa966daf5ef5409cb.jpg"
            alt={item.attributes.name}
          />
          <div className={styles.itemContent}>
            <p className={styles.description}>{item.attributes.description}</p>
            {item.attributes?.composition && (
              <div className={styles.composition}>
                <p>Состав:</p> {item.attributes.composition}
              </div>
            )}

            <div className={styles.numInfo}>
              <p className={styles.price}>{item.attributes.price} ₽</p>
              <p className={styles.weight}>{item.attributes.weight}</p>
            </div>
          </div>
        </div>
        {addToBasket && (
          <div onClick={() => addToBasket(item)} className={styles.addBtn}>
            <p>Добавить в корзину</p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProductModal;
