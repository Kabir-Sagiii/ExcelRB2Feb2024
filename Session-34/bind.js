var obj1 = {
  c: 100,
};

var obj2 = {
  c: 500,
};

var obj3 = {
  c: 1000,
};

function add(x, y) {
  var result = x + y + this.c;
  console.log(result);
}

// var add = add.bind(obj2);
// add(40, 40); // add()

var add = add.bind(obj3, 100, 100);
add();

// add.bind(obj1)(10, 10);

// add.bind(obj1, 20, 10)();
