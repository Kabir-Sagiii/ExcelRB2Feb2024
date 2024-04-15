function fnDoWhile() {
  var x = 11;
  do {
    console.log(x); //11 12 13
    x++; //12 13
  } while (x > 10 && x < 20); //true && true = true

  console.log("do while terminated");
}

fnDoWhile();
