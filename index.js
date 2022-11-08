const btns = document.querySelectorAll('.drum');
//loops
for (let btn of btns) {
    btn.addEventListener('click', function () {
        // Detecting Button Press
        var buttonInnerHTML = btn.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}
//Detecting Keyboard Press
document.addEventListener('keypress', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var cash = new Audio('sounds/crash.mp3');
            cash.play();
            break;
        case "k":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default: console.log(buttonInnerHTML);
            break;
    }

}

//Animation when pressed
function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}
/* function handleClick() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
} */

/* function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){
        alert("Clean time!")
    }
}
var housekeeper1 = new HouseKeeper(10, 'Jannet', 'bedroom'); */

