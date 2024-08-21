import CatalogBody from "./components/Body/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";

import styles from "./stylesCatalog.module.less";

export default function CatalogPage() {
  return (
    <div className={styles.conteinerCatalog}>
      <Header />
      <CatalogBody />
    </div>
  );
}
