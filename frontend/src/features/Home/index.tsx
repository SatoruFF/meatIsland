import { Anchor } from "antd";
import cn from "classnames";

import MainCard from "./components/MainCard";
import Navbar from "../Catalog/components/Body/components/Navbar";

import styles from "./style.module.less";
import Reviews from "./components/Reviews/Review";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Maps from "./components/Maps/Maps";
import Certificates from "./components/Certificates/Certificates";
import Footer from "../../shared/components/Footer";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <React.Fragment>
      <div className={styles.mainPage} id="part-1">
        <Navbar />
        <MainCard />
      </div>
      <div className={styles.reviews} id="part-2">
        <Reviews />
      </div>
      <div className={styles.contacts} id="part-3">
        <Maps />
      </div>
      <div className={styles.contacts} id="part-4">
        <Certificates />
      </div>
      <Footer isMain={true} />
    </React.Fragment>
  );
}
