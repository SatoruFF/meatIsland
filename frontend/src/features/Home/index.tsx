import Body from "./components/Body/index";
import Footer from "./components/Footer/index";
import TitleHeader from "./components/Header/HomeMenu/TitleHeader";
import Header from "./components/Header/index";

import styles from "./stylesHome.module.less";

export default function Home() {
  return (
    <>
      <div className={styles.HeaderHome}>
        <Header />
        <TitleHeader />
      </div>
      <div className={styles.BodyHome}>
        <Body />
      </div>
      <div className={styles.FooterHome}>
        <Footer />
      </div>
    </>
  );
}
