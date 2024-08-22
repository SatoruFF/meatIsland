import _ from "lodash";
import styles from "../stylesBody.module.less";

const ProductItem = () => {
  interface Item {
    title: string;
    id: string;
    price: number;
    description: string;
    weight: string;
  }

  const mockItems: { [key: number]: Item } = {
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
    5: {
      title: "Говядина",
      id: "5",
      price: 550,
      description:
        "Кусок говядины высшего сорта, идеально для стейков и запекания.",
      weight: "1 кг",
    },
    6: {
      title: "Баранина",
      id: "6",
      price: 600,
      description:
        "Свежее мясо ягненка, идеальный выбор для приготовления шашлыка.",
      weight: "1 кг",
    },
    7: {
      title: "Сосиски",
      id: "7",
      price: 300,
      description: "Нежные и сочные сосиски с легким ароматом копчения.",
      weight: "0.4 кг",
    },
  };

  return (
    <div className={styles.gridContainer}>
      {_.map(mockItems, (item) => {
        return (
          <div key={item.id} className={styles.item}>
            <img
              className={styles.imageItem}
              src="https://roscontrol.com/files/original_images/articles/94/cf/94cfa966daf5ef5409cb.jpg"
              alt={item.title}
            />
            <div className={styles.itemContent}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.numInfo}>
                <p className={styles.price}>{item.price} ₽</p>
                <p className={styles.weight}>{item.weight}</p>
              </div>
            </div>
            <div className={styles.addBtn}>
              <p>Добавить в корзину</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
