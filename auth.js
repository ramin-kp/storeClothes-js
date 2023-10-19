import { postData } from "./utils/HttpReq.js";
const formInput = document.querySelectorAll("input");
const formBtn = document.querySelector("button");

const submitHandler = (e) => {
  e.preventDefault();
  const username = formInput[0].value;
  const password = formInput[1].value;
  const data = {
    username,
    password,
  };
  postData("auth/login", data);
};

formBtn.addEventListener("click", submitHandler);
