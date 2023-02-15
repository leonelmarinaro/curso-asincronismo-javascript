//callbac de suma
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 5, sum));

//setTimeout funcion anonima
setTimeout(function () {
  console.log("Hola mundo");
}, 2000);

//setTimeout con callback a greeting
function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2500, "Leonel");
