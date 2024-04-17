var arr = [10, 20, 30, 40, 50]; //

//Whenver we want to perform same operation on each and every
//element of the array

// if we want to store the result of the operation in new Array

//then go for Map

var newArray = arr.map(function (element, index) {
  return element + 100;
});
console.log(arr);
console.log(newArray);
