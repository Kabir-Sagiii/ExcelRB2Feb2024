// function f1() {
//   var pin = 234;
//   function fn() {
//     console.log(pin);
//   }

//   fn();
// }

// f1();

function f1() {
  var pin = 234;
  return function fn() {
    console.log(pin); //Lexical Scoping
  };
} //Clousers

var x = f1();

x();
