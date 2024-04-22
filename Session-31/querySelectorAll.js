function getInputValue() {
  var inputCollection = document.querySelectorAll("#name");

  var inputCollection = document.querySelectorAll(".myclass");

  var inputCollection = document.querySelectorAll("input");

  var inputDomElement = inputCollection[0];

  console.log(inputCollection);

  var content = inputDomElement.value;

  console.log(content);
}
