var promiseObject = new Promise(function (resolve, reject) {
  resolve([
    { name: "Sagar", city: "Delhi" },
    { name: "Saniya", city: "Hyd" },
  ]);
});

// console.log(promiseObject);

var promiseObj = new Promise(function (resolve, reject) {
  reject({ status: false, error: "Something went wrong" });
});

console.log(promiseObj);
