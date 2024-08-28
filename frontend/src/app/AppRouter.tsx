import { Routes, Route, Navigate } from "react-router-dom";

import { PATHS } from "../constants/paths";
import { publicRoutes } from "../routes/public";
import { privateRoutes } from "../routes/private";
import CatalogPage from "../features/Catalog";
import CategoryContainer from "../features/Catalog/components/Body/components/CategoryContainer";
import React from "react";

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
              element={React.createElement(item.element)} // Правильный синтаксис
            />
          ))}
        </>
      ) : (
        <>
          {publicRoutes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={React.createElement(item.element)} // Правильный синтаксис
            />
          ))}
        </>
      )}
      <Route path={PATHS.CATALOG_PATH} element={<CatalogPage />}>
        <Route path=":id" element={<CategoryContainer />} />
      </Route>
      <Route path="/*" element={<Navigate replace to={PATHS.WELCOME_PATH} />} />
    </Routes>
  );
};

export default AppRouter;
