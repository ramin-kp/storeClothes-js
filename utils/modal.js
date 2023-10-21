const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal__text");

const showModal = (text) => {
  modal.classList.add("flex");
  modal.classList.remove("hidden");
  modalText.innerText = text;
};

const closeModal = () => {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
};
export { showModal, closeModal };
