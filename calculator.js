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

// Create an empty array to store numbers and operators for calculations
let calculationArray = [];

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