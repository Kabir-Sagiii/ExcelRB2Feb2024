var obj1 = {
  name: "Raj Verma",
  id: 101,
  city: "delhi",
};

Object.seal(obj1);

var value = Object.isSealed(obj1);

console.log(value);
