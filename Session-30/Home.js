function changeStructure() {
  var h2DomElement = document.getElementById("title");
  h2DomElement.innerText = "Welcome to Javascript";

  var pDomElement = document.getElementById("para");
  pDomElement.innerText = "Javascript is All About Creating Dynamic UI";

  //Change the Button Content
  var buttonDomElement = document.getElementById("btn");
  buttonDomElement.innerText = "Manipulated";
}

function printKeys() {
  //implement the code to print all keys of document object in the console
  var h2DomElement = document.getElementById("title");
  for (let key in h2DomElement) {
    document.write(key);
    document.write("<br/>");
  }
}
