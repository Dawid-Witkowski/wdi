// Function to display the images
function currentImage(n) {
    var i;
    // Get all elements with the class name "imageClass"
    var images = document.getElementsByClassName("imageClass");
    console.log("Number of images:", images.length);
    console.log("Index n:", n);
    // Get all elements with the class name "dot" (navigation dots)
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    // Remove the "active" class from all navigation dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Display the image corresponding to the current index
    images[n - 1].style.display = "block";
    // Add the "active" class to the corresponding navigation dot
    dots[n - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    var currImg = 1;
    window.setInterval(function() {
        if(currImg === 3) {
            currImg = 1;
        } else {
            currImg += 1;
        }
        currentImage(currImg);
    }, 2500);
});