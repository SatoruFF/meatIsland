import { Anchor } from "antd";
import cn from "classnames";

import MainCard from "./components/MainCard";
import Navbar from "../Catalog/components/Body/components/Navbar";

import styles from "./style.module.less";
import Reviews from "./components/Reviews/Review";
import Contacts from "./components/Contacts/Contacts";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <Anchor
        className={cn(styles.welcomeAnchor)}
        items={[
          {
            key: "part-1",
            href: "#part-1",
            title: "О нас",
          },
          {
            key: "part-2",
            href: "#part-2",
            title: "Отзывы",
          },
          {
            key: "part-3",
            href: "#part-3",
            title: "Контакты",
          },
        ]}
      />
      <div className={styles.mainPage} id="part-1">
        <Navbar />
        <MainCard />
      </div>
      <div className={styles.reviews} id="part-2">
        <Reviews />
      </div>
      <div className={styles.contacts} id="part-3">
        <Contacts />
      </div>
    </React.Fragment>
  );
}
