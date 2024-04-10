function printEvenOdd(x) {
  //x = 10
  if (x % 2 === 0) {
    //10%2 ===0
    // 0 === 0 : true
    console.log("It is a Even Number");
  }

  if (x % 2 != 0) {
    //10%2 != 0
    // 0 != 0 : false
    console.log("It is a Odd Number");
  }
}

printEvenOdd(10);
