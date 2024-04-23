function addAttribute() {
  var inputDomElement = document.querySelector("input");
  var h2DomElement = document.querySelector("h2");
  inputDomElement.setAttribute("placeholder", "Enter Name");
  inputDomElement.setAttribute("id", "username");
  inputDomElement.setAttribute("class", "myClass");

  h2DomElement.setAttribute("class", "heading");
}
