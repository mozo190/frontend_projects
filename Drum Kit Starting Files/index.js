var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll('button')[i].addEventListener('click', makeSound);
  function makeSound() {
    const audio = new Audio(`./sounds/tom-{i}.mp3`);
    audio.play();
  };
};