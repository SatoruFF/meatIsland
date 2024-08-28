import cn from "classnames";
import styles from "./style.module.less";
import Navbar from "../../../Catalog/components/Body/components/Navbar";

const Reviews = () => (
  <>
    <Navbar />
    <div className={cn(styles.reviewsContainer)}>
      <h2 className={cn(styles.reviewsTitle)}>Отзывы</h2>
      <div className={cn(styles.reviewItem)}>
        <h3 className={cn(styles.reviewName)}>Иван Иванов</h3>
        <p className={cn(styles.reviewText)}>
          Отличный продукт, очень доволен!
        </p>
        <div className={cn(styles.reviewRating)}>Рейтинг: ⭐⭐⭐⭐⭐</div>
      </div>
      <div className={cn(styles.reviewItem)}>
        <h3 className={cn(styles.reviewName)}>Анна Смирнова</h3>
        <p className={cn(styles.reviewText)}>
          Хорошее качество, но доставка была медленной.
        </p>
        <div className={cn(styles.reviewRating)}>Рейтинг: ⭐⭐⭐⭐</div>
      </div>
      <div className={cn(styles.reviewItem)}>
        <h3 className={cn(styles.reviewName)}>Сергей Петров</h3>
        <p className={cn(styles.reviewText)}>
          Неплохой сервис, но есть к чему стремиться.
        </p>
        <div className={cn(styles.reviewRating)}>Рейтинг: ⭐⭐⭐</div>
      </div>
    </div>
  </>
);

export default Reviews;
