function getReactImage() {
  //Dom Element of the Image Element Using className
  var imageElementArray = document.getElementsByClassName("imageClass");

  var imageDomElement = imageElementArray[2];
  var h2DomElement = imageElementArray[1];

  h2DomElement.innerText = "React Title";
  imageDomElement.src =
    "https://www.krishnakantyadav.com/blog/wp-content/uploads/2022/03/ReactJS-Everything-You-Should-Know-About-It.png";
}

function getJavaImage() {
  //   Dom Element of the Image Element Using Id
  //   var imageDomElement = document.getElementById("image");

  //Get Dom Element of the Image Element Using TagName
  var imageElementArray = document.getElementsByTagName("img");
  var imageDomElement = imageElementArray[0];

  var ElementArray = document.getElementsByClassName("imageClass");

  ElementArray[1].innerText = "Java Title";

  imageDomElement.src = "https://wallpapercave.com/wp/wp7250087.jpg";
}
