//
// -------------------------- Project 5* Calculator-----------------------------------------------
//
document.addEventListener("DOMContentLoaded", () => {
        clearBoxValue();
});
document.getElementById("clear").addEventListener("click", () => {
        clearBoxValue();
});

// function for clear button and clear upon refesh
function clearBoxValue() {
        expression.firstNumber = "";
        expression.secondNumber = "";
        expression.method = "";
        expression.isGoing = true;
        box.value = "";
}

// reuseable variable for the textbox
const box = document.getElementById("box");

// math expression object
const expression = {
        firstNumber: "",
        secondNumber: "",
        isGoing: true,
        method: "",
        memoryNumber: 0,
};

// loops through number keys and displays them on the screen
const numberKeys = document.getElementsByClassName("number");

for (let i = 0; i < numberKeys.length; i++) {
        const button = numberKeys[i];
        button.addEventListener("click", function (e) {
                if (expression.isGoing === true) {
                        box.value = box.value + e.target.value;
                } else {
                        box.value = e.target.value;
                        expression.isGoing = !expression.isGoing;
                }
        });
}

// click functions for the math method buttons
document.getElementById("plus").addEventListener("click", () => {
        displayAnswer();
        expression.method = "plus";
});

document.getElementById("minus").addEventListener("click", () => {
        displayAnswer();
        expression.method = "minus";
});

document.getElementById("multiply").addEventListener("click", () => {
        displayAnswer();
        expression.method = "multiply";
});

document.getElementById("divide").addEventListener("click", () => {
        displayAnswer();
        expression.method = "divide";
});

document.getElementById("equal").addEventListener("click", () => {
        displayAnswer();
        updateExpression(box.value);
        expression.method = "";
});

// math functions--> passes the result to the update expression function
function addNumbers(number1, number2) {
        const result = parseFloat(number1) + parseFloat(number2);
        box.value = result;
        updateExpression(result);
}

function subtractNumbers(number1, number2) {
        const result = parseFloat(number1) - parseFloat(number2);
        box.value = result;
        updateExpression(result);
}

function multiplyNumbers(number1, number2) {
        const result = parseFloat(number1) * parseFloat(number2);
        box.value = result;
        updateExpression(result);
}

function divideNumbers(number1, number2) {
        const result = parseFloat(number1) / parseFloat(number2);
        box.value = result;
        updateExpression(result);
}

// function to display the answer on the screen by passing values to math functions
function displayAnswer() {
        if (expression.firstNumber === "") {
                expression.firstNumber = parseFloat(box.value);
                expression.isGoing = false;
                return;
        }
        expression.secondNumber = parseFloat(box.value);
        if (expression.method === "plus") {
                addNumbers(expression.firstNumber, expression.secondNumber);
        } else if (expression.method === "minus") {
                subtractNumbers(expression.firstNumber, expression.secondNumber);
        } else if (expression.method === "multiply") {
                multiplyNumbers(expression.firstNumber, expression.secondNumber);
        } else if (expression.method === "divide") {
                divideNumbers(expression.firstNumber, expression.secondNumber);
        }
}

// updates the "expression" with the current data
function updateExpression(number) {
        expression.isGoing = false;
        expression.firstNumber = number;
        expression.secondNumber = "";
}

// memory key functions
document.getElementById("memory-plus").addEventListener("click", () => {
        expression.memoryNumber = expression.memoryNumber + parseFloat(box.value);
});

document.getElementById("memory-minus").addEventListener("click", () => {
        expression.memoryNumber = expression.memoryNumber - parseFloat(box.value);
});

document.getElementById("memory-recall").addEventListener("click", () => {
        box.value = expression.memoryNumber;
});

document.getElementById("memory-clear").addEventListener("click", () => {
        expression.memoryNumber = 0;
});

document.getElementById("all-clear").addEventListener("click", () => {
        clearBoxValue();
        expression.memoryNumber = 0;
});

// single key expressions
document.getElementById("pi").addEventListener("click", () => {
        box.value = Math.PI;
});

document.getElementById("square").addEventListener("click", () => {
        if (box.value === "") {
                return;
        }
        box.value = Math.sqrt(box.value);
});

document.getElementById("negative").addEventListener("click", () => {
        if (box.value === "") {
                box.value = "-";
        } else {
                box.value = -box.value;
        }
});

document.getElementById("percent").addEventListener("click", () => {
        box.value = parseFloat(box.value) * 0.01;
});

// function to check only allow numbers in text box
function isValidNumber(e) {
        return e.which > 47 && e.which < 58 ? true : false;
}
