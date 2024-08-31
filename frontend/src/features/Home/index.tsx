import MainCard from "./components/MainCard";
import Navbar from "../Catalog/components/Body/components/Navbar";

import styles from "./style.module.less";
import Reviews from "./components/Reviews/Review";
import Contacts from "./components/Contacts/Contacts";

export default function HomePage() {
  return (
    <div>
      <div className={styles.mainPage}>
        <Navbar />
        <MainCard />
      </div>
      <div className={styles.reviews}>
        <Reviews />
      </div>
      <div className={styles.contacts}>
        <Contacts />
      </div>
    </div>
  );
}
