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
      title={<h2 className={styles.modalTitle}>{item.title}</h2>}
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
            alt={item.title}
          />
          <div className={styles.itemContent}>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.composition}>
              <p>Состав:</p> {item?.composition}
            </div>

            <div className={styles.numInfo}>
              <p className={styles.price}>{item.price} ₽</p>
              <p className={styles.weight}>{item.weight}</p>
            </div>
          </div>
        </div>
        <div onClick={() => addToBasket(item)} className={styles.addBtn}>
          <p>Добавить в корзину</p>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
