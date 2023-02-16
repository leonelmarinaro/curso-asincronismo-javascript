function* generator(array) {
  for (let valor of array) {
    yield valor;
  }
}

const iterador = generator([
  "Leonel",
  "Marinaro",
  "Leonel",
  "Marinaro",
  "Leonel",
  "Marinaro",
]);

console.log(iterador.next().value); //Leonel
console.log(iterador.next().value); //Marinaro
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value); //undefined
console.log(iterador.next().value); //undefined

function* iteraFruta(frutas) {
  for (let fruta of frutas) {
    yield fruta;
  }
}

const frutas = ["pera", "banana", "manzana"];
const arrayFrutas = iteraFruta(frutas);

console.log(arrayFrutas.next().value);
console.log(arrayFrutas.next().value);
console.log(arrayFrutas.next().value);
console.log(arrayFrutas.next().value);
