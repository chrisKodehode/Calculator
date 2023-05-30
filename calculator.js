/*
    TODO:
    * Calculation for all operators and sum it then display sum to display box
    * Keydown event for all numbers and operators for easier input 
    ! 27-28 max characters in display box
    ! 1 max character in display box for decimal, equals & operators
*/

// Declare and assign the html buttons & display to a variable
let divDisplay       = document.getElementById("display");
const numberZero     = document.getElementById("number-0");
const numberDot      = document.getElementById("number-dot");
const displayClear   = document.getElementById("letter-C");
const signEquals     = document.getElementById("sign-equals");
const numberOne      = document.getElementById("number-1");
const numberTwo      = document.getElementById("number-2");
const numberThree    = document.getElementById("number-3");
const numberFour     = document.getElementById("number-4");
const numberFive     = document.getElementById("number-5");
const numberSix      = document.getElementById("number-6");
const numberSeven    = document.getElementById("number-7");
const numberEight    = document.getElementById("number-8");
const numberNine     = document.getElementById("number-9");
const addition       = document.getElementById("operator-addition")
const subtraction    = document.getElementById("operator-subtraction")
const multiplication = document.getElementById("operator-multiplication")
const division       = document.getElementById("operator-division")

numberZero.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "0") {
        event.textContent += 0;
    }

    divDisplay = event;
})

numberDot.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== ".") {
        event.textContent += ".";
    }

    divDisplay = event;
})

displayClear.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "") {
        event.textContent = "";
    }

    divDisplay = event;
})

numberOne.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "1") {
        event.textContent += 1;
    }

    divDisplay = event;
})

numberTwo.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "2") {
        event.textContent += 2;
    }

    divDisplay = event;
})

numberThree.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "3") {
        event.textContent += 3;
    }

    divDisplay = event;
})

numberFour.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "4") {
        event.textContent += 4;
    }

    divDisplay = event;
})

numberFive.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "5") {
        event.textContent += 5;
    }

    divDisplay = event;
})

numberSix.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "6") {
        event.textContent += 6;
    }

    divDisplay = event;
})

numberSeven.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "7") {
        event.textContent += 7;
    }

    divDisplay = event;
})

numberEight.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "8") {
        event.textContent += 8;
    }

    divDisplay = event;
})

numberNine.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "9") {
        event.textContent += 9;
    }

    divDisplay = event;
})

addition.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "+") {
        event.textContent += "+";
    }

    divDisplay = event;
})

subtraction.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "-") {
        event.textContent += "-";
    }

    divDisplay = event;
})

multiplication.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "*") {
        event.textContent += "*";
    }

    divDisplay = event;
})

division.addEventListener("click", function(event) {
    event = divDisplay
    if (event !== "/") {
        event.textContent += "/";
    }

    divDisplay = event;
})