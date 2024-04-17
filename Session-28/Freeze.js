var obj1 = {
  name: "Raj Verma",
  id: 101,
  city: "delhi",
};

Object.freeze(obj1);

//invalid
obj1.city = "Mumbai";
delete obj1.name;
obj1.email = "abc@gmail.com";

console.log(obj1);
