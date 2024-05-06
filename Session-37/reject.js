var promiseObj = new Promise(function (resolve, reject) {
  reject({ status: false, error: "Something went wrong" });
});

console.log(promiseObj);
