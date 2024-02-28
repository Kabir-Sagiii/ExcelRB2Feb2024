var MyStatic = /** @class */ (function () {
    function MyStatic() {
        this.name = "Sagar",
            MyStatic.city = "Pune";
    }
    MyStatic.prototype.print = function () {
        console.log(this.name, MyStatic.city);
    };
    MyStatic.changeCity = function () {
        this.city = "Mumbai";
    };
    return MyStatic;
}());
var obj1 = new MyStatic();
obj1.print();
var obj2 = new MyStatic();
obj2.print();
MyStatic.changeCity();
obj1.print();
obj2.print();
