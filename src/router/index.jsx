import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PublicRouter, PrivateRouter } from "./CustomRouters";
import { PUBLIC_ROUTE_ARR, PRIVATE_ROUTE_ARR } from "./ROUTE_INFO";
import { Home } from "../pages";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
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
    </BrowserRouter>
  );
};

export default Router;
