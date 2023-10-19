import { postData } from "./utils/HttpReq.js";
import { getCookie, setCookie } from "./utils/cookie.js";
const formInput = document.querySelectorAll("input");
const formBtn = document.querySelector("button");

const submitHandler = async (e) => {
  e.preventDefault();
  const username = formInput[0].value;
  const password = formInput[1].value;
  const data = {
    username,
    password,
  };
  const response = await postData("auth/login", data);
  setCookie(response.token);
  location.assign("index.html");
};
const init = () => {
  const cookie = getCookie();
  if (cookie) {
    location.assign("index.html");
  }
};

formBtn.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", init);
