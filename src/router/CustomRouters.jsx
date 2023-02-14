import React from "react";
import { Navigate } from "react-router-dom";
import Keys from "../constants/Keys";
import { getSavedItem } from "../utils/localStorage";
import { PUBLIC_ROUTE, PRIVATE_ROUTE } from "./ROUTE_INFO";

export const PublicRouter = ({ children }) => {
  const isLoggedIn = Boolean(getSavedItem(Keys.ACCESS_TOKEN));

  if (isLoggedIn) return <Navigate to={PRIVATE_ROUTE.todo.path} />;
  return <>{children}</>;
};

export const PrivateRouter = ({ children }) => {
  const isLoggedIn = Boolean(getSavedItem(Keys.ACCESS_TOKEN));

  if (isLoggedIn) return <>{children}</>;
  return <Navigate to={PUBLIC_ROUTE.signIn.path} />;
};
