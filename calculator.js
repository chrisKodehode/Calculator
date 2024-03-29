/*
    TODO:
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

// Create an empty array to store numbers and operators for calculations
let calculationArray = [];

// Create multiple click event listeners for numbers and operators
numberZero.addEventListener("click", function(event) {
    divDisplay.textContent += "0";
    calculationArray.push("0");
})

numberDot.addEventListener("click", function(event) {
    divDisplay.textContent += ".";
    calculationArray.push(".");
})

displayClear.addEventListener("click", function(event) {
    divDisplay.textContent = "";
    calculationArray = [];
})

// Calculating when = is pressed or clicked
signEquals.addEventListener("click", function(event) {
    // Join the array into a string
    let calculationString = calculationArray.join('');

    // Use eval() to calculate it
    let result = eval(calculationString);

    // Display the result
    divDisplay.textContent = result;

    // Clear the calculationArray for the next calculation
    calculationArray = [];
})

numberOne.addEventListener("click", function(event) {
    divDisplay.textContent += "1";
    calculationArray.push("1");
})

numberTwo.addEventListener("click", function(event) {
    divDisplay.textContent += "2";
    calculationArray.push("2");
})

numberThree.addEventListener("click", function(event) {
    divDisplay.textContent += "3";
    calculationArray.push("3");
})

numberFour.addEventListener("click", function(event) {
    divDisplay.textContent += "4";
    calculationArray.push("4");
})

numberFive.addEventListener("click", function(event) {
    divDisplay.textContent += "5";
    calculationArray.push("5");
})

numberSix.addEventListener("click", function(event) {
    divDisplay.textContent += "6";
    calculationArray.push("6");
})

numberSeven.addEventListener("click", function(event) {
    divDisplay.textContent += "7";
    calculationArray.push("7");
})

numberEight.addEventListener("click", function(event) {
    divDisplay.textContent += "8";
    calculationArray.push("8");
})

numberNine.addEventListener("click", function(event) {
    divDisplay.textContent += "9";
    calculationArray.push("9");
})

addition.addEventListener("click", function(event) {
    divDisplay.textContent += "+";
    calculationArray.push("+");
})

subtraction.addEventListener("click", function(event) {
    divDisplay.textContent += "-";
    calculationArray.push("-");
})

multiplication.addEventListener("click", function(event) {
    divDisplay.textContent += "*";
    calculationArray.push("*");
})

division.addEventListener("click", function(event) {
    divDisplay.textContent += "/";
    calculationArray.push("/");
})

// Declare and assign keycodes to corresponding actions
let keyMap = {
    // Normal keyboard numbers and Numpad Numbers
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",

    // Numpad and Operators (Standard keyboard)
    "*": "*",
    "+": "+",
    "-": "-",
    ".": ".",
    "/": "/",

    // "=" and "Enter"
    "=": "=",
    "Enter": "=",

    // "Backspace" and "Delete" maps to "clear"
    "Backspace": "backspace",
    "Delete": "clear",
}


// Create an event listener for easier number input
document.addEventListener('keydown', function(event) {
    let action = keyMap[event.key];

    // If the key pressed is a mapped key
    if (action) {

        // If the action is a number and display has less than 28 characters
        if (!isNaN(action) && divDisplay.textContent.length < 28) {
            divDisplay.textContent += action;
            calculationArray.push(action);
        } 

        // If action is not a number and the last character is not an operator
        else if (isNaN(action) && !isNaN(divDisplay.textContent.slice(-1)) && divDisplay.textContent.length < 28) {
            if (action === "=") {
                let calculationString = calculationArray.join('');
                let result = eval(calculationString);
                divDisplay.textContent = result;
                calculationArray = [result];
            } else if (action === "backspace") {
                // remove last character from display and calculation array
                divDisplay.textContent = divDisplay.textContent.slice(0, -1);
                calculationArray.pop();
            } else if (action !== "clear") {
                divDisplay.textContent += action;
                calculationArray.push(action);
            }
        }

        // If the action is "clear"
        else if (action === "clear") {
            divDisplay.textContent = "";
            calculationArray = [];
        }
    }
});