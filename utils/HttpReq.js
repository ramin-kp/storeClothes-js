import { showModal } from "./modal.js";

const BASE_URL = "https://fakestoreapi.com";

const postData = async (path, data) => {
  try {
    const fetchData = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await fetchData.json();
    return json;
  } catch (error) {
    showModal("با عرض پوزش،لطفا بعدا امتحان کنید");
  }
};

const getData = async (path) => {
  try {
    const data = await fetch(`${BASE_URL}/${path}`);
    const json = data.json();
    return json;
  } catch (error) {
    return false;
  }
};

export { postData, getData };
