import _ from "lodash";
import styles from "../stylesBody.module.less";
import { useEffect, useState } from "react";

const Basket = () => {
  interface Item {
    title: string;
    id: string;
    price: number;
    description: string;
    weight: string;
  }

  const items: { [key: number]: Item } = {
    1: {
      title: "Мясо",
      id: "1",
      price: 500,
      description:
        "Свежая говядина высшего сорта, идеально подходит для жарки и тушения.",
      weight: "1 кг",
    },
    2: {
      title: "Колбаса",
      id: "2",
      price: 350,
      description:
        "Колбаса с натуральными специями, сделана по традиционному рецепту.",
      weight: "0.5 кг",
    },
    3: {
      title: "Пельмени",
      id: "3",
      price: 250,
      description:
        "Домашние пельмени с сочным мясным фаршем, идеальный выбор для быстрого ужина.",
      weight: "1 кг",
    },
    4: {
      title: "Фарш",
      id: "4",
      price: 400,
      description:
        "Смесь из свежей свинины и говядины, идеально подходит для котлет и других блюд.",
      weight: "1 кг",
    },
  };

  const [countProduct, setCountProduct] = useState<number>(0);
  const [sumPrice, setSumPrice] = useState<number>(0);

  useEffect(() => {
    const newCountProduct = Object.keys(items).length;

    let newSumPrice = 0;

    _.forEach(items, (item) => {
      newSumPrice += item.price;
    });

    setSumPrice(newSumPrice);
    setCountProduct(newCountProduct);
  }, [items]);

  return (
    <div className={styles.basket}>
      <div className={styles.basketHeader}>
        <h3>Корзина</h3>
        <div className={styles.countBasket}>{countProduct}</div>
      </div>
      {countProduct > 0 ? (
        _.map(items, (item) => (
          <div key={item.id} className={styles.basketItem}>
            <img
              className={styles.imageBasketItem}
              src="https://roscontrol.com/files/original_images/articles/94/cf/94cfa966daf5ef5409cb.jpg"
              alt={item.title}
            />
            <div className={styles.itemDetails}>
              <p>{item.title}</p>
              <p>{item.weight}</p>
              <p>{item.price}</p>
            </div>
            <div className={styles.itemCount}>
              <p> - </p>
              <p>2</p>
              <p> + </p>
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
          <div className={styles.addBasket}>Оформит доставку</div>
        </>
      )}
    </div>
  );
};
export default Basket;
