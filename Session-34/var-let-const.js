function f1() {
  var city = "delhi"; //function scope

  if (true) {
    var gender = "male"; //function scope
    console.log(city);
  }
  switch ("pune") {
    case "pune":
      console.log(city);
      console.log(gender);

    case "mumbai":
      console.log(city);
  }
  console.log(gender);
}

function f2() {
  let city = "delhi";
  const id = 101;

  if (true) {
    var price = 123;
    let gender = "male";
    const pin = 123;
    console.log(city);
    if (true) {
      let country = "india";
      console.log(gender, pin);
    }
    console.log(country); //invalid
  }

  switch ("pune") {
    case "pune":
      console.log(city);
      console.log(gender, pin); // Invalid

    case "mumbai":
      console.log(city);
  }
  console.log(gender, pin); //Invalid
}
