class A {
  id;
  constructor() {
    this.id = 101;
  }
  display() {
    console.log(this.id);
  }

  changeId(id) {
    this.id = id;
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
    this.changeId();
    super.changeId();
  }
  changeId(id) {
    super.changeId();
    console.log("Previous Id", this.id);
    this.id = id;
    console.log("New Id", this.id);
  }
}

var b1 = new B();

b1.display();

b1.print();

b1.changeId(1000);
