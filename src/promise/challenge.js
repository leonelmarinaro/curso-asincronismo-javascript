import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log("Finalizamos el fetchData");
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    //console.log(products); //lo comentamos para no ver toda la lista de productos por consola
    return fetchData(`${API}/products/${products[10].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title); 
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => {
    console.log(category.name);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Hemos terminado la petición"));
