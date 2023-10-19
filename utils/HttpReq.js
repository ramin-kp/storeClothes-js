const BASE_URL = "https://fakestoreapi.com";
const postData = async (path, data) => {
  const fetchData = await fetch(`${BASE_URL}/${path}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const json = await fetchData.json();
  console.log(json)
  return json
};

export { postData };
