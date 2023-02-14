export const isValidEmail = (email) => {
  return email.includes("@");
};

export const isValidPw = (pw) => {
  return pw.length >= 8;
};
