import React from "react";
import styles from "./style.module.less";
import cn from "classnames";
import { Typography } from "antd";

const { Title, Text } = Typography;

const Contacts = () => {
  return (
    <>
      <div className={cn(styles["contacts-wrapper"])}>
        <div className={cn(styles["contacts-title"])}>
          Заинтересовала наша продукция? Свяжитесь: +7 937 615-26-44.
        </div>
        <div
          className={cn(styles["contacts-content-limit"], styles["content"])}
        >
          <div className={cn(styles["contacts__content-main"])}>
            <Title level={2} className={cn(styles["contacts_mainestTitle"])}>
              Контакты организации ООО "Мясной остров":
            </Title>
            <div
              className={cn(
                styles["contacts__left-side"],
                "animate__animated",
                "animate__fadeInLeft"
              )}
            >
              <Typography style={{ marginBottom: "10px" }}>
                <Title level={3}>Контакты отдела продаж:</Title>
                <Text style={{ fontSize: "21px" }}>+7 937 615-26-44</Text>
                <Title level={3}>Email:</Title>
                <Text copyable>myasnoi@mail.ru</Text>
              </Typography>
              <Typography>
                <div className={cn(styles["contacts_leftSide__adresses"])}>
                  <Title level={3}>Адрес точки продаж:</Title>
                  <Text>420059 РТ, Казань, ул. Фатыха Амирхана, д.21</Text>
                  <Title level={3}>Режим работы:</Title>
                  <Text>Пн-Пт: с 8:00 до 17:00 Сб-Вс: Выходной </Text>
                </div>
              </Typography>
            </div>
            <div
              className={cn(
                styles["contacts__right-side"],
                "animate__animated",
                "animate__fadeInRightBig"
              )}
            >
              <div className={cn(styles["contacts__right-side-title"])}>
                Точка продаж на карте:
              </div>
              <div className={cn(styles["contacts__right-side-map"])}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a64fc5fe991ec44ce63fa8e6cfb0ea07a64e4e2a76847f075e5f00cb0fee774&amp;source=constructor"
                  width="1207"
                  height="720"
                  className={cn(styles.cityMap)}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
