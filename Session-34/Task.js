var obj1 = {
  name: "Raj",
  gender: "male",
  details: function () {
    console.log(this.name, this.gender);
    // by defeault this  points to current object (obj1)
  },
};

obj1.details();

var obj2 = {
  name: "Sneha",
  gender: "female",
  details: () => {
    // this will not point the current object
    console.log(this.name, this.gender);
    console.log(this);
  },
};

obj2.details();
