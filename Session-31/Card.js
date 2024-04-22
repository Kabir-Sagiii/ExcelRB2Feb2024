function changeToRed() {
  var divDomElement = document.getElementById("card");
  var h3DomElement = document.querySelector("h3");

  divDomElement.classList.remove("cardGreen");
  divDomElement.classList.add("cardRed");

  h3DomElement.classList.remove("green");
  h3DomElement.classList.add("red");
}

function changeToGreen() {
  var divDomElement = document.getElementById("card");
  var h3DomElement = document.querySelector("h3");

  divDomElement.classList.remove("cardRed");
  divDomElement.classList.add("cardGreen");

  h3DomElement.classList.remove("red");
  h3DomElement.classList.add("green");
}
