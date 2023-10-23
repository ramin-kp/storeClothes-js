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
const list = document.querySelectorAll("li");
let products = null;
let inputText = "";
let category = "all-products";
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
const filteredProducts = () => {
  const filteredProducts = products.filter((product) => {
    if (category === "all-products") {
      return product.title.toLowerCase().includes(inputText);
    } else {
      return (
        product.title.toLowerCase().includes(inputText) &&
        product.category.includes(category)
      );
    }
  });
  showAllProducts(filteredProducts);
};
const searchHandler = () => {
  inputText = productsInput.value.trim().toLowerCase();
  filteredProducts();
};
const categoryHandler = (e) => {
  category = e.target.classList[0];
  list.forEach((item) => {
    if (item.classList === category) {
      item.classList.add("bg-blue-200");
    } else {
      item.classList.remove("bg-blue-200");
    }
  });
  filteredProducts();
};
document.addEventListener("DOMContentLoaded", init);
productsBtn.addEventListener("click", searchHandler);
modalBtn.addEventListener("click", closeModal);
list.forEach((item) => item.addEventListener("click", categoryHandler));
