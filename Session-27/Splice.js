var data = [10, 20, 30, 40, 50, 60, 70, 89, true];
console.log(data);
console.log("----------------------");

//it remove one element from index 2
data.splice(2, 1);

//it remove 6 elements from index 2
data.splice(2, 6);

//it will all element from index 2
data.splice(2);

// it will add new element before index 2
data.splice(2, 0, "Sagar");

// it will add new elements before index 2
data.splice(2, 0, "Sagar", "Kabir");

console.log(data);
