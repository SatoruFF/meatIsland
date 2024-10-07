import cn from "classnames";
import styles from "./style.module.less";

const Reviews = () => (
  <div className={cn(styles.reviewsContainer)}>
    <div className={cn(styles.reviewsTitle)}>
      <h2>Отзывы</h2>
    </div>
    <div className={cn(styles.reviewItem)}>
      <h3 className={cn(styles.reviewName)}>Иван Иванов:</h3>
      <p className={cn(styles.reviewText)}>
        "Очень нравится этот магазин, в отличие от рынка где всегда помимо куска
        мяса по итогу купишь огромную кость, тут если купил филе значит так и
        есть. Очень приятный персонал, рубщик мяса всегда пойдет на встречу и
        сделает именно так как его попросишь, ну и отдельное спасибо за
        внимательность Линаре! Так держать следите за качеством продукции и люди
        будут продолжать к вам ходить."
      </p>
    </div>
    <div className={cn(styles.reviewItem)}>
      <h3 className={cn(styles.reviewName)}>Анна Смирнова:</h3>
      <p className={cn(styles.reviewText)}>
        "Хорошие продавцы,прекрасный ассортимент. Всё свежее,есть хороший выбор
        мяса и мясных полуфабрикатов! Особенно рекомендую пельмени 👍."
      </p>
    </div>
    <div className={cn(styles.reviewItem)}>
      <h3 className={cn(styles.reviewName)}>Сергей Петров:</h3>
      <p className={cn(styles.reviewText)}>
        "Неплохой сервис, но есть к чему стремиться."
      </p>
    </div>
    <div className={cn(styles.reviewItem)}>
      <h3 className={cn(styles.reviewName)}>Ольга:</h3>
      <p className={cn(styles.reviewText)}>
        "Хинкали ну очень вкусно. Начинка мясная, специи, тесто все идеально.
        Прям настоящие..) Заказала ещё котлеты и ёжики. На вид отлично. Доставка
        в течении 1,5 часов по городу. Спасибо за вкусную еду."
      </p>
    </div>
    <div className={styles.reviewPlatform}>
      <h3>Больше живых отзывов тут:</h3>
      <div className={styles.platforms}>
        <div>
          <a
            href="https://yandex.ru/maps/43/kazan/?ll=49.131778%2C55.823855&mode=poi&poi%5Bpoint%5D=49.131917%2C55.823776&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1240345437&tab=reviews&z=19.48"
            target="yandex"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yandex_logo_2021_Russian.svg/1024px-Yandex_logo_2021_Russian.svg.png"
              alt="Логотип Yandex"
            />
          </a>
        </div>
        <div>
          <a
            href="https://2gis.ru/kazan/firm/70000001027154843/tab/reviews?m=49.133815%2C55.823596%2F16.46"
            target="2gic"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d8/2gis-Logo.png"
              alt="Логотип 2GIS"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.avito.ru/brands/38a9256b59c93ddf292e59dd1f36e382/all/produkty_pitaniya?src=search_seller_info&sellerId=36854782a196876b8a208546e589aa7d"
            target="avito"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Avito_logo1.png/640px-Avito_logo1.png"
              alt="Логотип Avito"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Reviews;
