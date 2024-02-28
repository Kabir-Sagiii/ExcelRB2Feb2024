function getDetails(myobj) {
    console.log(myobj);
    myobj.print();
}
getDetails({ name: "S", id: 1, print: function () { console.log("hello"); } });
