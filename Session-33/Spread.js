var userData = {
  username: "Jay shah",
  id: 101,
  city: "Mumbai",
};

var anotherUser = {
  ...userData,
  state: "MH",
  pincode: 6789654,
  username: "Amit Pandey",
};

var newObj = {
  ...anotherUser,
};

// console.log(newObj);

var arr1 = [10, 20, 30, 40];

var arr2 = [true, ...arr1, "Hello"];

console.log(arr2);
