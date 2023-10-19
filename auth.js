import { postData } from "./utils/HttpReq.js";
import { validators } from "./utils/validation.js";
const formInput = document.querySelectorAll("input");
const formBtn = document.querySelector("button");

const submitHandler =async (e) => {
  e.preventDefault();
  const username = formInput[0].value;
  const password = formInput[1].value;
  const data = {
    username,
    password,
  };
  const response =await postData("auth/login", data);
  validators(response.token);
  location.assign("./index.html")
};

formBtn.addEventListener("click", submitHandler);
