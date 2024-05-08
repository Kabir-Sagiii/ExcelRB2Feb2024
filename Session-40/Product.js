class Product {
  id;
  pname;
  price;
  rating;
  totalAmount;

  constructor(id, pname, price, rating) {
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.rating = rating;
    this.totalAmount = 0;
  }

  //   constructor() {
  //     this.id = 501;
  //     this.pname = "Samsung Galaxy";
  //     this.price = 90000;
  //     this.rating = 4.3;
  //     this.totalAmount = 0;
  //   }

  printAllDetails() {
    console.log(this.id, this.pname, this.price, this.rating);
  }

  fntotalAmount(qty) {
    this.totalAmount = this.price * qty;
    console.log(this.totalAmount);
  }
}

var product1 = new Product(101, "Iphone 15", 150000, 4.5);

var product2 = new Product(501, "Samsung Galaxy", 130000, 4.6);

var product3 = new Product(301, "Vivo A24", 30000, 3.9);

product1.printAllDetails();

product2.printAllDetails();

product3.printAllDetails();

// product1.price = 130000;
// product1.printAllDetails();
