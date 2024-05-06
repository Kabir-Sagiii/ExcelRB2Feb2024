function fnFetch() {
  return new Promise(function (resolve, reject) {
    resolve({
      status: true,
      data: [
        { name: "N1", city: "C1" },
        { name: "N2", city: "C2" },
      ],
    });
  });
}

async function getPromise() {
  try {
    var data = await fnFetch();
    console.log("successdata", data);
  } catch (error) {
    console.log("Error data", error);
  }
}

// function getPromise() {
//   fnFetch()
//     .then((results) => {
//       console.log(results);
//     })
//     .catch((error) => {});
// }

getPromise();

// var promiseObj = fnFetch();
// // console.log(promiseObj);
//   promiseObj.then().catch()

// fnFetch()
//   .then((successdata) => {
//     console.log(successdata);
//   })
//   .catch((errordata) => {});
