var randomNumber = Math.random();
randomNumber = randomNumber * 6;
randomNumber = Math.floor(randomNumber)+1;

var leftDiceImage = document.getElementById("leftDevice");

leftDiceImage.setAttribute('src', './images/dice' + randomNumber + '.png');

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2)+1;

var rightDiceImage = document.getElementById("right");

rightDiceImage.setAttribute('src', './images/dice' + randomNumber2 + '.png');

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}