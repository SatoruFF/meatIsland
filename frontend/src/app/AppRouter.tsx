import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { PATHS } from "../constants/paths";
import { publicRoutes } from "../routes/public";
import { privateRoutes } from "../routes/private";

const AppRouter = () => {
  const isAuth = true; // need to implement auth in future

  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.concat(publicRoutes).map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </>
      ) : (
        <>
          {publicRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </>
      )}
      <Route path="/*" element={<Navigate replace to={PATHS.WELCOME_PATH} />} />
    </Routes>
  );
};

export default AppRouter;
