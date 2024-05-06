var promiseObj = new Promise(function (resolve, reject) {
  reject({ status: false, error: "Failed to connect with Server" });

  resolve({ status: true, data: [{ name: "s1" }, { name: "s2" }] });
});

promiseObj
  .then(function (successdata) {
    console.log("then() executed");
    console.log(successdata);
  })
  .catch(function (errordata) {
    console.log("catch() executed");
    console.log(errordata);
  });
