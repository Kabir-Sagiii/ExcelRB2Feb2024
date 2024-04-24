var obj = {
  username: "raj",
  gender: "male",
  id: 101,
};

var { gender, username, id } = obj;

function getUserData() {
  //logic to print user name 5 times without using loop
  console.log(username, gender, id);
  console.log(username, obj.gender, obj.id);
  console.log(username, obj.gender, obj.id);
  console.log(username, obj.gender, obj.id);
  console.log(username, obj.gender, obj.id);
}
// getUserData();

var arr = ["raj", "sneha", "rohan", "chris", "Rahul"];

var [name1] = arr;

console.log(name3);
console.log(name1);

// console.log(arr[2]);
// console.log(arr[2]);
// console.log(arr[2]);
