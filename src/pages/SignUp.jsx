import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-[5vh] p-[5vh]">회원가입</h1>
      <div className="flex flex-col w-[40vw] text-center">
        <input className="bg-slate-100 m-2 p-2 rounded-lg" data-testid="email-input" />
        <input className="bg-slate-100 m-2 p-2 rounded-lg" data-testid="password-input" />
        <button
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
