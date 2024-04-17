var userdata = {
  name: "Raj",
  id: 101,
  email: "raj@gmail.com",
  isMarried: false,
};
console.log(userdata);
console.log("------------------------");

delete userdata.isMarried;
delete userdata["id"];
console.log(userdata);
