var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // playSound(randomChosenColour);
}