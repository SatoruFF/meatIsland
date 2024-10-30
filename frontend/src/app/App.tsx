import { BrowserRouter } from "react-router-dom";
import cn from "classnames";

import AppRouter from "./AppRouter";
import "../styles/reset.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
