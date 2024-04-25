function fn() {
  // Scope of fn is global

  var price = 7878; // this variable scope is function scope

  function getData() {
    // this function scope is function scope
    console.log("getdata is called");
  }
  getData();
  console.log(price);
}

getData(); // Invalid

console.log(price); //Invalid
