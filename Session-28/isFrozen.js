var obj1 = {
  name: "Raj Verma",
  id: 101,
  city: "delhi",
};

Object.freeze(obj1);

console.log(Object.isFrozen(obj1));
