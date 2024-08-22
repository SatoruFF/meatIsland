import { BrowserRouter } from "react-router-dom";
import cn from "classnames";

import AppRouter from "./AppRouter";
import Navbar from "../features/Catalog/components/Body/components/Navbar";
import resetStyles from "../styles/reset.module.less";

function App() {
  return (
    <div className={cn(resetStyles)}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
