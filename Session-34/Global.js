var city = "Delhi"; // This Variable scope is Global

function f1() {
  // Scope of the f1 function is Global
  console.log(city);
}

if (true) {
  var gender = "male"; // this is not in the global
  console.log(city);
  function f2() {
    // f2 is not in the global scope
  }
}
