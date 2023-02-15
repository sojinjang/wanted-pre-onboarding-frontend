import React from "react";

import { Home, SignUp, SignIn, Todo } from "../pages";

export const PUBLIC_ROUTE = {
  home: {
    path: "/",
    element: <Home />,
  },
  signUp: {
    path: "/signup",
    element: <SignUp />,
  },
  signIn: {
    path: "/signin",
    element: <SignIn />,
  },
};

export const PRIVATE_ROUTE = {
  todo: {
    path: "/todo",
    element: <Todo />,
  },
};

export const PUBLIC_ROUTE_ARR = Object.values(PUBLIC_ROUTE);
export const PRIVATE_ROUTE_ARR = Object.values(PRIVATE_ROUTE);
