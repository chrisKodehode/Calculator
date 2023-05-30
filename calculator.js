/*
    TODO:
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
let keyCodeMap = {
    // "48" to "57" maps to the numbers "0" to "9",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",

    // "96" to "105" maps to the numbers "0" to "9",
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    
    // "106" maps to "*",
    106: "*",
    // "107" maps to "+"
    107: "+",
    // "109" maps to "-"
    109: "-",
    // "110" maps to "."
    110: ".",
    // "111" maps to "/"
    111: "/",
    
    // "13" maps to "="
    13: "=",
    // "8" maps to "clear"
    8: "clear",
    // "46" maps to "clear"
    46: "clear",
    // "190" maps to "."
    190: ".",
}