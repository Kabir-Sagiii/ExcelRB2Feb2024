function getAction() {
  var inputDomElement = document.querySelector("input");

  var paraDomElement = document.querySelector("p");

  var h2DomElement = document.querySelector("h2");
  h2DomElement.style.color = "green";

  var content = inputDomElement.value;

  paraDomElement.innerText = content;

  paraDomElement.style.color = "white";
  paraDomElement.style.fontSize = "30px";
  paraDomElement.style.fontStyle = "italic";
  paraDomElement.style.backgroundColor = "black";
  paraDomElement.style.padding = "20px";
}
