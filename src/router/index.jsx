import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { PublicRouter, PrivateRouter } from "./CustomRouters";
import { PUBLIC_ROUTE_ARR, PRIVATE_ROUTE_ARR } from "./ROUTE_INFO";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        {PUBLIC_ROUTE_ARR.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={<PublicRouter>{route.element}</PublicRouter>}
              key={index}
            />
          );
        })}
        {PRIVATE_ROUTE_ARR.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={<PrivateRouter>{route.element}</PrivateRouter>}
              key={index}
            />
          );
        })}
      </Routes>
    </HashRouter>
  );
};

export default Router;
