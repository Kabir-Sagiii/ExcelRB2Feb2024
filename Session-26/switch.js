function operation(operator, value1, value2) {
  //+,50,60
  var result;
  switch (
    operator //* expression or expression value
  ) {
    case "+":
      result = value1 + value2; //50 + 60 = 110
      break;
    case "-":
      result = value1 - value2; //50-60 = -10
      break;
    case "*":
      result = value1 * value2; //50*60 = 3000
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      console.log("Invalid Arguments");
  }

  console.log(result);
}

operation("+", 50, 60);
