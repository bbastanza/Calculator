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
    decimalInValue: false,
    editFirstNumber: true,
};

const singleKeyExpression = {
    firstNumberPi: false,
    firstNumberNegative: false,
    firstNumberPercent: false,
    firstNumberSquareRoot: false,
    secondNumberPi: false,
    secondNumberNegative: false,
    secondNumberPercent: false,
    secondNumberSquareRoot: false,
};

const decimal = document.getElementById("decimal").addEventListener("click", () => {
    if ((box.value = "")) {
        box.value = ".";
        expression.decimalInValue = true;
    } else if (!expression.decimalInValue) {
        box.value = box.value + ".";
        expression.decimalInValue = true;
    }
});

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

    let firstNumber = checkForNegative(expression.firstNumber, singleKeyExpression.firstNumberNegative);
    firstNumber = checkForPi(firstNumber, singleKeyExpression.firstNumberPi);
    firstNumber = checkForPercent(firstNumber, singleKeyExpression.firstNumberPercent);
    firstNumber = checkForSquareRoot(firstNumber, singleKeyExpression.firstNumberSquareRoot);
    let secondNumber = checkForNegative(expression.secondNumber, singleKeyExpression.secondNumberNegative);
    secondNumber = checkForPi(secondNumber, singleKeyExpression.secondNumberPi);
    secondNumber = checkForPercent(secondNumber, singleKeyExpression.secondNumberPercent);
    secondNumber = checkForSquareRoot(secondNumber, singleKeyExpression.secondNumberSquareRoot);

    if (expression.method === "plus") {
        addNumbers(firstNumber, secondNumber);
    } else if (expression.method === "minus") {
        subtractNumbers(firstNumber, secondNumber);
    } else if (expression.method === "multiply") {
        multiplyNumbers(firstNumber, secondNumber);
    } else if (expression.method === "divide") {
        divideNumbers(firstNumber, secondNumber);
    }
}

// updates the "expression" with the current data
function updateExpression(number) {
    expression.continuousText = false;
    expression.firstNumber = number;
    expression.secondNumber = "";
    resetSingleKeys();
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
// single key expressions
document.getElementById("pi").addEventListener("click", () => {
    box.value = Math.PI;
    if (expression.editFirstNumber) {
        singleKeyExpression.firstNumberPi = !singleKeyExpression.firstNumberPi;
    } else {
        singleKeyExpression.secondNumberPi = !singleKeyExpression.secondNumberPi;
    }
});

document.getElementById("square").addEventListener("click", () => {
    if (box.value === "") {
        return;
    }
    box.value = Math.sqrt(box.value);
    if (expression.editFirstNumber) {
        singleKeyExpression.firstNumberSquareRoot = !singleKeyExpression.firstNumberSquareRoot;
    } else {
        singleKeyExpression.secondNumberSquareRoot = !singleKeyExpression.secondNumberSquareRoot;
    }
});

document.getElementById("negative").addEventListener("click", () => {
    if (box.value === "") {
        box.value = "-";
    } else {
        box.value = -box.value;
        if (expression.editFirstNumber) {
            singleKeyExpression.firstNumberNegative = !singleKeyExpression.firstNumberNegative;
        } else {
            singleKeyExpression.secondNumberNegative = !singleKeyExpression.secondNumberNegative;
        }
    }
});

document.getElementById("percent").addEventListener("click", () => {
    if (box.value === "") {
        return;
    }
    box.value = parseFloat(box.value) * 0.01;
    if (expression.editFirstNumber) {
        singleKeyExpression.firstNumberPercent = !singleKeyExpression.firstNumberPercent;
    } else {
        singleKeyExpression.secondNumberPercent = !singleKeyExpression.secondNumberPercent;
    }
});

function resetSingleKeys() {
    singleKeyExpression.firstNumberPi = false;
    singleKeyExpression.firstNumberNegative = false;
    singleKeyExpression.firstNumberPercent = false;
    singleKeyExpression.firstNumberSquareRoot = false;
    singleKeyExpression.secondNumberPi = false;
    singleKeyExpression.secondNumberNegative = false;
    singleKeyExpression.secondNumberPercent = false;
    singleKeyExpression.secondNumberSquareRoot = false;
}

function checkForNegative(number, singleKeyExpression) {
    if (singleKeyExpression) {
        number = -number;
    }
    return number;
}

function checkForPi(number, singleKeyExpression) {
    if (singleKeyExpression) {
        number = Math.PI;
    }
    return number;
}
function checkForPercent(number, singleKeyExpression) {
    if (singleKeyExpression) {
        number = number * 0.01;
    }
    return number;
}
function checkForSquareRoot(number, singleKeyExpression) {
    if (singleKeyExpression) {
        number = Math.sqrt(number);
    }
    return number;
}
