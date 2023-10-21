import { getData } from "./utils/HttpReq.js";
import { getCookie } from "./utils/cookie.js";
import { closeModal, showModal } from "./utils/modal.js";
import { shorten } from "./utils/shortenTitle.js";
const modalBtn = document.querySelector(".modal__btn");

const loginBtn = document.querySelector(".header__login");
const dashboardBtn = document.querySelector(".header__dashboard");
const loader = document.querySelector(".loader");
const productsContainer = document.querySelector(".products__container");
const productsBtn = document.querySelector(".products__btn");
const productsInput = document.querySelector(".products__input");
const category = document.querySelectorAll(".products__category");
let products = null;
const showAllProducts = (products) => {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const renderJsx = `
  <div class=" bg-white rounded-md p-3">
  <div class="flex items-center justify-between mb-2">
  <span class="p-1 bg-red-100 text-red-600 rounded">
  ${product.rating.count}<i class="fa-solid fa-user mr-1"></i></span>
  <span class="p-1 bg-yellow-100 text-yellow-500 rounded">${
    product.rating.rate
  }<i class="fa-solid fa-star mr-1"></i></span>
  </div>
  <div class="flex flex-col items-center justify-center mb-5">
  <img src=${product.image} class="w-[220px] h-[220px]" alt="" />
  </div>
  <h1 class="font-danaBold">${shorten(product.title)}</h1>
  <div class=" flex items-center justify-between my-4">
  <span class="font-danaMedium">قیمت: $ ${product.price}</span>
  <a href="#" class="flex-center w-10 h-7 bg-blue-500 text-white rounded cursor-pointer transition-all hover:bg-blue-700"><i class="fa-solid fa-cart-shopping"></i></a>
  </div>
  </div>`;
    productsContainer.innerHTML += renderJsx;
  });
};

const init = async () => {
  const cookie = getCookie();
  if (!cookie) {
    dashboardBtn.style.display = "none";
  } else if (cookie) {
    loginBtn.style.display = "none";
  }
  products = await getData("products");
  if (products) {
    loader.style.display = "none";
  } else if (!products) {
    showModal("با عرض پوزش،لطفا بعدا امتحان کنید");
  }
  showAllProducts(products);
};
const searchHandler = () => {
  const inputText = productsInput.value.trim().toLowerCase();
  if (!inputText) {
    productsInput.value = "";
    showAllProducts(products);
  } else {
    const productsFilter = products.filter((item) =>
      item.title.toLowerCase().includes(inputText)
    );
    if (!productsFilter.length) {
      showModal("محصولی یافت نشد.");
      productsInput.value = "";
      showAllProducts(products);
    } else {
      productsInput.value = "";
      showAllProducts(productsFilter);
    }

    console.log(productsFilter);
  }
};
const categoryHandler = () => {
  category.forEach((item) => (e) => console.log(e.target.value));
};
document.addEventListener("DOMContentLoaded", init);
productsBtn.addEventListener("click", searchHandler);
modalBtn.addEventListener("click", closeModal);
category.addEventListener("click", categoryHandler);
