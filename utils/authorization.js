import { getCookie } from "./cookie.js";

const authHandler = () => {
  const cookie = getCookie();
  console.log(location.pathname);
  if (
    (location.href.includes("auth") && cookie) ||
    (location.href.includes("dashboard") && !cookie)
  ) {
    location.assign("index.html");
  }
};

export { authHandler };
