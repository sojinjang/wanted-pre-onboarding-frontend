import React, { useState, useEffect } from "react";
import { isValidEmail, isValidPw } from "../utils/validator";
import ApiUrl from "../constants/ApiUrl";
import { post } from "../utils/api";

const SignUp = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [isEnable, setIsEnable] = useState(false);
  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onClickSignUp = async () => {
    try {
      await post(ApiUrl.SIGN_UP, inputValue);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    setIsEnable(isValidEmail(inputValue.email) && isValidPw(inputValue.password));
  }, [inputValue]);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-[5vh] p-[5vh]">회원가입</h1>
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
          onClick={onClickSignUp}
          className="bg-blue-400 m-2 p-2 rounded-lg disabled:opacity-30"
          data-testid="signup-button"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
