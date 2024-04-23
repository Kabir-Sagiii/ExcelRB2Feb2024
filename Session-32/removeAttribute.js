function removeMyAttribute() {
  var inputDomElement = document.querySelector("input");
  var h2DomElement = document.querySelector("h2");

  h2DomElement.removeAttribute("class");
  inputDomElement.removeAttribute("placeholder");
  inputDomElement.removeAttribute("id");
}
