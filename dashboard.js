import { getData } from "./utils/HttpReq.js";
import { authHandler } from "./utils/authorization.js";
const showUser = document.querySelector(".users__info");
const dashboard = document.querySelector(".dashboard");
const loader = document.querySelector(".loader");

const renderJsx = async () => {
  const userData = await getData("users");
  if (userData.length) {
    loader.style.display="none";
  }
  showUser.innerHtml = "";
  userData.forEach((user) => {
    const userJsx = `<div class="flex items-center justify-between w-[90%] p-3 my-5 mx-auto border-2 border-blue-300 rounded-md">
    <span class=" flex-center w-7 h-7 bg-blue-600 text-white rounded-md">${user.id}</span>
    <div>
    <h1 class="mb-2 font-danaBold text-blue-500">
    <i class="fa-solid fa-user ml-1"></i>
    نام کاربری:</h1>
    <h1 class="text-base font-danaMedium">${user.username}</h1>
    </div>
    <div>
    <h1 class="mb-2 font-danaBold text-blue-500">
    <i class="fa-solid fa-envelope ml-1"></i>
    ایمیل:</h1>
    <h1 class="text-base font-danaMedium">${user.email}</h1>
    </div>
    <div>
    <h1 class="mb-2 font-danaBold text-blue-500">
    <i class="fa-solid fa-phone ml-1"></i>
    شماره تماس:</h1>
    <h1 class="text-base font-danaMedium">${user.phone}</h1>
    </div>
    <div>
    <h1 class="mb-2 font-danaBold text-blue-500">
    <i class="fa-solid fa-location-dot ml-1"></i>
    آدرس:</h1>
    <h1 class="text-base font-danaMedium">${user.address.city} - ${user.address.street} - ${user.address.zipcode}</h1>
    </div>
    </div>`;
    showUser.innerHTML += userJsx;
  });
};
const init = () => {
  authHandler();
  renderJsx();
};
const logoutHandler = () => {
  document.cookie = "token=;max-age=0";
  location.assign("index.html");
};
document.addEventListener("DOMContentLoaded", init);
dashboard.addEventListener("click", logoutHandler);
