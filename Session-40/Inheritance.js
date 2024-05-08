class A {
  id;
  constructor() {
    this.id = 101;
  }
  display() {
    console.log(this.id);
  }
}

class B extends A {
  name;

  constructor() {
    //Call of Parent class Constructor
    super(); //it represents Parent class Constructor
    this.name = "Sagar";
  }

  print() {
    console.log(this.name, this.id);
  }
}

var b1 = new B();

b1.display();

b1.print();
