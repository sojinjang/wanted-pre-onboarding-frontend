import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { isValidEmail, isValidPw } from "../utils/validator";
import { post } from "../utils/api";
import { saveItem } from "../utils/localStorage";
import ApiUrl from "../constants/ApiUrl";
import Keys from "../constants/Keys";
import { PRIVATE_ROUTE } from "../router/ROUTE_INFO";

const SignIn = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [isEnable, setIsEnable] = useState(false);
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onClickSignIn = async () => {
    try {
      const response = await post(ApiUrl.SIGN_IN, inputValue);
      saveItem(Keys.ACCESS_TOKEN, response[Keys.ACCESS_TOKEN]);
      navigate(PRIVATE_ROUTE.todo.path);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    setIsEnable(isValidEmail(inputValue.email) && isValidPw(inputValue.password));
  }, [inputValue]);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-[5vh] p-[5vh]">로그인</h1>
      <div className="flex flex-col w-[40vw] text-center">
        <input
          name="email"
          onChange={handleInput}
          className="bg-slate-100 m-2 p-2 rounded-lg"
          data-testid="email-input"
        />
        <input
          name="password"
          onChange={handleInput}
          className="bg-slate-100 m-2 p-2 rounded-lg"
          data-testid="password-input"
        />
        <button
          disabled={!isEnable}
          onClick={onClickSignIn}
          className="bg-blue-400 m-2 p-2 rounded-lg disabled:opacity-30"
          data-testid="signin-button"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default SignIn;
