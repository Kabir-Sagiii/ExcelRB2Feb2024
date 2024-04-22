function getInputValue() {
  //Get Dom element of Input Element using querySelector with id value
  var inputDomElement = document.querySelector("#name");

  //Get Dom element of Input Element using querySelector with className
  var inputDomElement = document.querySelector(".myclass");

  //Get Dom element of Input Element using querySelector with TagName
  var inputDomElement = document.querySelector("input");

  var content = inputDomElement.value;
  console.log(content);
}
