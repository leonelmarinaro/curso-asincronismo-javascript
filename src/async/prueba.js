const asynFn = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Async!!"), 2000)
      : reject(new Error("Error!!"));
  });
};

const anotherFn = async () => {
  const respuestaAsync = await asynFn();
  console.log(respuestaAsync);
  console.log("Segundo consoles de anotherFn");
};

console.log("Before");
anotherFn();
console.log("After");
