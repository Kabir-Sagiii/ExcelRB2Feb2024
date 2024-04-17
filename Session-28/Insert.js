var userdata = {
  name: "Raj",
  id: 101,
  email: "raj@gmail.com",
  isMarried: false,
};
console.log(userdata);
console.log("----------------------");

userdata.city = "Delhi";
userdata.country = "India";
userdata["pincode"] = 34567;

console.log(userdata);
