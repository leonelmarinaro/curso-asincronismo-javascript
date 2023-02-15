const promise = new Promise(function (resolve, reject) {
  resolve("Estoy resuelta!");
});

const cows = 11;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} on the farm, we can make the order`);
  } else {
    reject(`We haven't a enought cows to make the order`);
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Finally the Promise"));
