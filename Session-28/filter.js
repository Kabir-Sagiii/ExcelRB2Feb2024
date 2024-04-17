var arr = [10, 20, 30, 40, 50]; //[]

var filteredArray = arr.filter(function (element, index) {
  return element <= 20;
});

console.log(filteredArray);
