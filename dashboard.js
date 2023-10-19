import { getCookie } from "./utils/cookie.js";

const init = () => {
  const cookie = getCookie();
  if (!cookie) {
    location.assign("index.html");
  }
};

document.addEventListener("DOMContentLoaded", init);
