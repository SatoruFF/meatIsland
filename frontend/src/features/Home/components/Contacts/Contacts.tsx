import React from "react";
import styles from "./style.module.less";
import cn from "classnames";
import { Typography } from "antd";
import Navbar from "../../../Catalog/components/Body/components/Navbar";

const { Title, Text } = Typography;

const Contacts = () => {
  return (
    <>
      <Navbar />
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.199436112049!2d49.1293348764855!3d55.82449758646711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead55f41ae78f%3A0x6d2436e4a1640707!2z0YPQuy4g0KTQsNGC0YvRhdCwINCQ0LzQuNGA0YXQsNC90LAsIDIxLCDQmtCw0LfQsNC90YwsINCg0LXRgdC_LiDQotCw0YLQsNGA0YHRgtCw0L0sIDQyMDEyNg!5e0!3m2!1sru!2sru!4v1724789411293!5m2!1sru!2sru"
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
