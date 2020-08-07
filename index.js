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
    expression.continuousText = true;
    box.value = "";
}

// reuseable variable for the textbox
const box = document.getElementById("box");

// math expression object
const expression = {
    firstNumber: "",
    secondNumber: "",
    continuousText: true,
    method: "",
    memoryNumber: 0,
};

// loops through number keys and displays them on the screen
const numberKeys = document.getElementsByClassName("number");

for (let i = 0; i < numberKeys.length; i++) {
    const button = numberKeys[i];
    button.addEventListener("click", function (e) {
        if (expression.continuousText === true) {
            box.value = box.value + e.target.value;
        } else {
            box.value = e.target.value;
            expression.continuousText = !expression.continuousText;
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
        expression.continuousText = false;
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
    expression.continuousText = false;
    expression.firstNumber = number;
    expression.secondNumber = "";
}

let memory = document.getElementById("memory");
document.getElementById("memory-plus").addEventListener("click", () => {
    expression.memoryNumber = expression.memoryNumber + parseFloat(box.value);
    memory.textContent = `Memory: ${expression.memoryNumber}`;
});

document.getElementById("memory-minus").addEventListener("click", () => {
    expression.memoryNumber = expression.memoryNumber - parseFloat(box.value);
    memory.textContent = `Memory: ${expression.memoryNumber}`;
});

document.getElementById("memory-recall").addEventListener("click", () => {
    box.value = expression.memoryNumber;
});

document.getElementById("memory-clear").addEventListener("click", () => {
    expression.memoryNumber = 0;
    memory.textContent = `Memory: ${expression.memoryNumber}`;
});

document.getElementById("all-clear").addEventListener("click", () => {
    clearBoxValue();
    expression.memoryNumber = 0;
});

// function to check only allow numbers in text box
function isTextInputANumber(e) {
    return e.which > 47 && e.which < 58 ? true : false;
}
