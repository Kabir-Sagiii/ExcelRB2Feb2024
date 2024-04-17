var obj1 = {
  name: "Raj Verma",
  id: 101,
}; //Source

var obj2 = { id: 201 }; //Target

Object.assign(obj2, obj1);

console.log(obj2);
