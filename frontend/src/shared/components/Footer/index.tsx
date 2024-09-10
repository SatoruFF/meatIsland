import Logo from "../Logo";
import cn from "classnames";
import styles from "./styles.module.less";

const Footer = (props) => {
  return (
    <div
      className={cn(styles.footerContainer, {
        [styles.footerContainerWelcom]: props.isMain,
      })}
    >
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <div className={styles.name}>
          <p>© Мясной Остров, 2023</p>
          <p>ИП: Валиуллин Гумер Эмирович</p>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.numberContainer}>
          <div className={styles.title}>Номера для заказов</div>
          <div>
            <p>
              <a href="tel:+79308333811">+7 (930) 833-38-11</a>
            </p>
            <p>
              <a href="tel:+79308333811">+7 (930) 833-38-11</a>
            </p>
          </div>
        </div>
        <div className={styles.adressContainer}>
          <div className={styles.title}>Адреса наших магазинов в г.Казань</div>
          <div>
            <p>
              <a href="https://yandex.ru/maps/-/CDs252KN" target="_blank">
                ул. Фатыза Амирхана, д.21, г. Казань, Россия
              </a>
            </p>
            <p>
              <a href="https://yandex.ru/maps/-/CDs252KN" target="_blank">
                ул. Фатыза Амирхана, д.21, г. Казань, Россия
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
