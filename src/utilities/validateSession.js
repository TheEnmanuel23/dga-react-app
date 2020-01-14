export default () => {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  return email && password;
};
