class MyStatic {
    name:string;
   static city:string

   constructor(){
    this.name = "Sagar",
    MyStatic.city = "Pune"
   }

   print(){
    console.log(this.name,MyStatic.city)
   }

   static changeCity(){
 this.city = "Mumbai"

   }
}

var obj1 = new MyStatic()
obj1.print()

var obj2 = new MyStatic()
obj2.print()

MyStatic.changeCity()
obj1.print()
obj2.print()
