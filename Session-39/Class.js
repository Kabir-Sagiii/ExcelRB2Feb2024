class Users {
  username = "Raj";
  city = "Delhi";

  display() {
    console.log(this.username, this.city);
  }

  changeCity(newCity) {
    this.city = newCity;
    this.display();
  }
}

var user1 = new Users();
var user2 = new Users();
var user3 = new Users();
var user4 = new Users();

user1.display();

console.log(user1.city);

user1.changeCity("Hyderabad");

// user1.show();
