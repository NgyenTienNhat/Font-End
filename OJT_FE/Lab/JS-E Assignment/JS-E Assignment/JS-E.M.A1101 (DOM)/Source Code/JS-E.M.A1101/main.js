const images = ["img1.jpg", "img2.png", "img3.png"];
let index = 0;

// cach 1

// // Add your code here
// // Task 1
// var imageContainer = document.querySelector(".img-container");
// var nextBtn = document.querySelector(".next");
// var backBtn = document.querySelector(".back");

// backBtn.addEventListener("click", function () {
//   // Add your code here
//   // Task 3.1
//   index = (index + images.length - 1) % images.length;
//   renderImage();
//   console.log(index);
// });
// nextBtn.addEventListener("click", function () {
//   // Add your code here
//   // Task 3.2
//   index = (index + 1) % images.length;
//   renderImage();
//   console.log(index);
// });
// // Add your code here
// // Task 2

// function renderImage() {
//   imageContainer.innerHTML = '<img src="./images/' + images[index] + '">';
// }
// renderImage();

// cach 2

// Add your code here
// Task 1
var imageContainer = document.querySelector(".img-container");
var nextBtn = document.querySelector(".next");
var backBtn = document.querySelector(".back");

backBtn.addEventListener("click", function () {
  // Add your code here
  // Task 3.1
  //Decrease value of variable index by 1
  index = index - 1;
  //Check if that variable is less then 0 then set it to 0
  if (index < 0) {
    index = 0;
  }
  //Call the function renderImage() from Task 2
  renderImage();
});
nextBtn.addEventListener("click", function () {
  // Add your code here
  // Task 3.2
  //Increase value of variable index by 1
  index = index + 1;
  //Check if that variable is greater or equal the length of array images then set index to the  length of images - 1
  if (index >= images.length) {
    index = images.length - 1;
  }
  //Call the function renderImage() from Task 2
  renderImage();
});
// Add your code here
// Task 2
function renderImage() {
  imageContainer.innerHTML = '<img src="./images/' + images[index] + '">';
}
renderImage();
