import React from "react";
import styles from "./style.module.less";
import cn from "classnames";
import { Typography } from "antd";
import Footer from "../../../../shared/components/Footer";

const { Title, Text } = Typography;

const Maps = () => {
  return (
    <>
      <div className={cn(styles["maps-wrapper"])}>
        <div className={cn(styles["maps-content-limit"], styles["content"])}>
          <div className={cn(styles["maps__content-main"])}>
            <div className={cn(styles["maps__right-side"])}>
              <div className={cn(styles["maps__right-side-title"])}>
                Точка продаж на карте:
              </div>
              <div className={styles.ContainerMaps}>
                <div className={cn(styles["maps__right-side-map"])}>
                  <div className={styles.titleMap}>
                    Казань, ул. Фатыха Амирхана, д.21:
                  </div>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a64fc5fe991ec44ce63fa8e6cfb0ea07a64e4e2a76847f075e5f00cb0fee774&amp;source=constructor"
                    className={cn(styles.cityMap)}
                  ></iframe>
                </div>
                <div className={cn(styles["maps__right-side-map"])}>
                  <div className={styles.titleMap}>
                    Казань, ул. Татарстана, д.72:
                  </div>

                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a64fc5fe991ec44ce63fa8e6cfb0ea07a64e4e2a76847f075e5f00cb0fee774&amp;source=constructor"
                    className={cn(styles.cityMap)}
                  ></iframe>
                </div>
              </div>
            </div>
            <Footer isMain={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Maps;
