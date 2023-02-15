import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTE } from "../router/ROUTE_INFO";

const Home = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Link
        to={PUBLIC_ROUTE.signUp.path}
        className="text-[5vh] my-[2vh] hover:text-blue-400 hover:scale-105 transition duration-500 ease-in-out"
      >
        회원가입
      </Link>
      <Link
        to={PUBLIC_ROUTE.signIn.path}
        className="text-[5vh] my-[2vh] hover:text-blue-400 hover:scale-105 transition duration-500 ease-in-out"
      >
        로그인
      </Link>
    </div>
  );
};

export default Home;
