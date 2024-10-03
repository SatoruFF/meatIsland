import cn from "classnames";
import styles from "./style.module.less";
import image from "./assets/photo_2024-10-03_21-26-21.png";

const Certificates = () => {
  return (
    <div className={cn(styles["certificates-wrapper"])}>
      <div className={cn(styles["certificates-content"])}>
        <div className={cn(styles["cert-title"])}>Сертификат</div>
        <img className={cn(styles["cert-image"])} src={image}></img>
      </div>
    </div>
  );
};

export default Certificates;
