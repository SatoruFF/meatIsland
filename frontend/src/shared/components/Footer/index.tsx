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
          <p>© Мясной Остров, 2024</p>
          <p>ИП: Валиуллин Гумер Эмирович</p>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.numberContainer}>
          <div className={styles.title}>Номер для заказов</div>
          <div>
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
                ул. Фатыха Амирхана, д.21, г. Казань
              </a>
            </p>
            <p>
              <a href="https://yandex.ru/maps/-/CDs252KN" target="_blank">
                ул. Осиновский переулок, д.16А, г. Казань
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
