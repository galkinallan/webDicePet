function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var randomNumberOne = getRandomInt(1,7);
var randomDiceImage = "dice" + randomNumberOne + ".png";
var imageSourse = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src" , imageSourse);
var randomNumberTwo = getRandomInt(1,7)
randomDiceImage = "dice" + randomNumberTwo + ".png";
imageSourse = "images/" + randomDiceImage;
image2.setAttribute("src", imageSourse);


if(randomNumberOne > randomNumberTwo){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomNumberOne < randomNumberTwo){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
