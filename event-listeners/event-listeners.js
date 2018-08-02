// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg', './imgs/pexels-photo-46710.jpeg','./imgs/sunflower-sun-summer-yellow.jpg'];
var currentIndex = 0;
var myImags = document.getElementsByTagName("img")


function showNextPicture() {
  currentIndex++; 
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
}

myImags[currentIndex].addEventListener("click",function(event) {
	showNextPicture()
	myImags[0].src = pictures[currentIndex];
	})