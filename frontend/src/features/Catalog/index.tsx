import CatalogBody from "./components/Body/index";
import Footer from "../../shared/components/Footer";
import Header from "./components/Header/index";

import styles from "./stylesCatalog.module.less";

export default function CatalogPage() {
  return (
    <div className={styles.conteinerCatalog}>
      <Header />
      <CatalogBody />
      <Footer />
    </div>
  );
}
