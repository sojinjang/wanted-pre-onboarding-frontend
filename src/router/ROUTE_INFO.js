import React from "react";

import { SignUp, SignIn, Todo } from "../pages";

export const PUBLIC_ROUTE = {
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
