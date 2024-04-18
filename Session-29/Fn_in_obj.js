var data = {
  f1: function (name) {
    console.log("f1 is called", name);
  },
  f2: () => {
    console.log("f2 is called");
  },
};

data.f1("Sagar");
data.f2();
