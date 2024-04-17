var obj1 = {
  name: "Raj Verma",
  id: 101,
  city: "delhi",
};

Object.seal(obj1);
obj1.city = "Mumbai";
delete obj1.city;
obj1.email = "abc@gmail.com";

console.log(obj1);
