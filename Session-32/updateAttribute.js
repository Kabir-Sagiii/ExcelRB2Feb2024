function updateMyAttribute() {
  var inputDomElement = document.querySelector("input");
  //   var btnDomelement = document.querySelector("button");
  var labelDomelement = document.querySelector("label");
  console.log(labelDomelement.innerText);

  if (inputDomElement.type === "password") {
    //text === "password"
    inputDomElement.setAttribute("type", "text");
    // btnDomelement.innerText = "Hide Password";
    labelDomelement.innerText = "Uncheck to Hide Password";
  } else {
    inputDomElement.setAttribute("type", "password");
    // btnDomelement.innerText = "Show Password";
    labelDomelement.innerText = "Check to Show Password";
  }
}
