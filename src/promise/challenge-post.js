import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-oriogin",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "Leo Hacker",
  price: 2023,
  description: "subido en post",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));
