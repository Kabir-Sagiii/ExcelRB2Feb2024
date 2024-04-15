function printNumbers() {
  var x = 1;
  while (x >= 10) {
    //false
    console.log(x); //1 2 3
    x++; //11
  }
  console.log("While Got Terminated");
}

printNumbers();
