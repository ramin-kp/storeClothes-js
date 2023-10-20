import { getCookie } from "./utils/cookie.js";

const loginBtn = document.querySelector(".header__login");
const dashboardBtn = document.querySelector(".header__dashboard");

const init = () => {
  const cookie = getCookie();
  console.log(cookie);
  console.log(loginBtn, dashboardBtn);
  if (!cookie) {
    dashboardBtn.style.display = "none";
  } else if (cookie) {
    loginBtn.style.display = "none";
  }
};
document.addEventListener("DOMContentLoaded", init);
