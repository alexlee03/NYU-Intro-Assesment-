// Obtain the img element, and assign it to the image variable
let image = src
var src = document.getElementById("pet").getAttribute("src")


// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = changeSize.addEventListener("shrink-grow")
//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "25px"
  }
  else {
    image.style.height = "100px"
  }
})