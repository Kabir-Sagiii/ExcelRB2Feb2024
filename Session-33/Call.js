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

add.call(obj1, 50, 50);

add.call(obj2, 50, 50);

add.call(obj3, 50, 50);

add.apply(obj1, [100, 100]);

add.apply(obj2, [100, 100]);
