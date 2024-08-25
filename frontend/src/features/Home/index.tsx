import Body from "./components/Body/index";
import Footer from "./components/Footer/index";
import MainCard from "./components/MainCard";
import Header from "./components/Header/index";

import styles from "./style.module.less";

export default function HomePage() {
  return (
    <>
      <div className={styles.HeaderHome}>
        <MainCard />
      </div>
    </>
  );
}
