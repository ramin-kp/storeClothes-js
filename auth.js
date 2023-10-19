import { postData } from "./utils/HttpReq.js";
import { authHandler } from "./utils/authorization.js";
import { setCookie } from "./utils/cookie.js";
import { closeModal, showModal } from "./utils/modal.js";
import { validators } from "./utils/validation.js";
const formInput = document.querySelectorAll("input");
const formBtn = document.querySelector(".form__btn");
const modalBtn = document.querySelector(".modal__btn");

const submitHandler = async (e) => {
  e.preventDefault();
  const username = formInput[0].value;
  const password = formInput[1].value;
  const data = {
    username,
    password,
  };
  const validation = validators(username, password);
  if (typeof validation === "string") {
    showModal(validation);
  } else {
    const response = await postData("auth/login", data);
    setCookie(response.token);
    location.assign("index.html");
  }
};

formBtn.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", authHandler);
modalBtn.addEventListener("click", closeModal);
