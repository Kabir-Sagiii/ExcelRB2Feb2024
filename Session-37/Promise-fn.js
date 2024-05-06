function createPromise() {
  return new Promise(function (resolve, reject) {
    resolve({ name: "S1" });
  });
}

var promiseObject = createPromise();

promiseObject
  .then(function (data) {
    console.log("then() executed");
    console.log(data);
  })
  .catch(function (error) {});

createPromise()
  .then(function (data) {
    console.log("then() executed");
    console.log(data);
  })
  .catch(function (error) {});
