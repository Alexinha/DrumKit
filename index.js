// alternatively using a while loop, where the initiate value should be adressed before the loop.

/*

let n = 0;
while (n < 7) {
  document.querySelectorAll("button")[n].addEventListener("click", function() {
    alert("I got clicked!");
  });
  n++;
}

*/

// for loop the variables/starting value are set in the "()" rather than in the "{}"
// or n < document.querySelectorAll("drum").length;

/********************   detect click and make it works in 7 different situations  *************************/
/***   a function in a function, leave the complicated one to later but make sure the value first  ***/
for (let n = 0; n < 7; n++) {
  document.querySelectorAll("button")[n].addEventListener("click", function() {

    makeSound(this.innerHTML); //when clicked the value passed in is html text letter
    buttonAnimation(this.innerHTML);

  });
}


/********* detect keyboard event and make it produce the keyboard "case" to trigger the function below ***********/

document.addEventListener("keydown", function(event) {

  makeSound(event.key); //when pressed on keyboard, the value passed in is the keycase produced by .key
  buttonAnimation(event.key);

});


/*****   the function that switch on and off, and wrap it up so that it can be used in other packages up above *****/

function makeSound(anyTabOrClick) {

  switch (anyTabOrClick) { //locate the switch via a value that's supoosed to contain "case" letters
    case "w": // when the text letter is a "w", switch on
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break; //switch off

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      let kickBase = new Audio("sounds/kick-bass.mp3");
      kickBase.play();
      break;

    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(this.innerHTML); //triggers when none of the cases match

  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // to add in more class to one element's class list
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
