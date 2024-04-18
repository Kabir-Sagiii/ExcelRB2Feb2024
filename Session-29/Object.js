var obj = {
  name: "Sagar",
  city: "Delhi",
  fn: [10, 20, 30, 40],
  address: {
    state: "Delhi",
    country: "India",
  },
  f1: function () {
    console.log("Anony is called");
  },
  f2: () => {
    console.log("Arrow is called");
  },
};

obj.f1();
obj.f2();

console.log(obj.address.country);

console.log(obj.fn[1]);

console.log(obj.name);

console.log(obj["name"]);
