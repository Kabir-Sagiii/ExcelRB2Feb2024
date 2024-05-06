function User(name, city, gender) {
  this.username = name;
  this.cityname = city;
  this.gender = gender;
}

var user1 = new User("rohan", "Delhi", "male");

user1.id = 101;
console.log(user1);

var user2 = new User("Riya", "Bhopal", "female");
delete user2.cityname;
console.log(user2);

// User.country = "India";  Invalid

User.prototype.country = "India";

console.log(user1.country);
console.log(user2.country);
