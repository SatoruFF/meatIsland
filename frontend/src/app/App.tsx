import { BrowserRouter } from "react-router-dom";
import cn from "classnames";

import AppRouter from "./AppRouter";
import resetStyles from "../styles/reset.module.less";

function App() {
  return (
    <div className={cn(resetStyles)}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
