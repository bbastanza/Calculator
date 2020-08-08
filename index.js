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
const textBox = document.getElementById("box");

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

const decimal = document.getElementById("decimal").addEventListener("click", () => {
    if ((textBox.value = "")) {
        textBox.value = ".";
        expression.decimalInValue = true;
    } else if (!expression.decimalInValue) {
        textBox.value = textBox.value + ".";
        expression.decimalInValue = true;
    }
});

// loops through number keys and displays them on the screen
const numberKeys = document.getElementsByClassName("number");

for (let i = 0; i < numberKeys.length; i++) {
    const button = numberKeys[i];
    button.addEventListener("click", function (e) {
        if (expression.continuousText === true) {
            textBox.value = textBox.value + e.target.value;
        } else {
            textBox.value = e.target.value;
            expression.continuousText = !expression.continuousText;
        }
    });
}

// click functions for the math method buttons
document.getElementById("plus").addEventListener("click", () => {
    expression.editFirstNumber = false;
    displayAnswer();
    expression.method = "plus";
});

document.getElementById("minus").addEventListener("click", () => {
    expression.editFirstNumber = false;
    displayAnswer();
    expression.method = "minus";
});

document.getElementById("multiply").addEventListener("click", () => {
    expression.editFirstNumber = false;
    displayAnswer();
    expression.method = "multiply";
});

document.getElementById("divide").addEventListener("click", () => {
    expression.editFirstNumber = false;
    displayAnswer();
    expression.method = "divide";
});

document.getElementById("equal").addEventListener("click", () => {
    expression.editFirstNumber = true;
    displayAnswer();
    updateExpression(textBox.value);
    expression.method = "";
});

// math functions--> passes the result to the update expression function
function addNumbers(number1, number2) {
    const result = parseFloat(number1) + parseFloat(number2);
    textBox.value = result;
    updateExpression(result);
}

function subtractNumbers(number1, number2) {
    const result = parseFloat(number1) - parseFloat(number2);
    textBox.value = result;
    updateExpression(result);
}

function multiplyNumbers(number1, number2) {
    const result = parseFloat(number1) * parseFloat(number2);
    textBox.value = result;
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
        expression.firstNumber = parseFloat(textBox.value);
        expression.continuousText = false;
        return;
    }
    expression.secondNumber = parseFloat(textBox.value);

    const firstNumber = expression.firstNumber;
    const secondNumber = expression.secondNumber;

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

function updateExpression(number) {
    expression.continuousText = false;
    expression.firstNumber = number;
    expression.secondNumber = "";
}

let memory = document.getElementById("memory");
document.getElementById("memory-plus").addEventListener("click", () => {
    expression.memoryNumber = expression.memoryNumber + parseFloat(textBox.value);
    memory.textContent = `Memory: ${expression.memoryNumber}`;
});

document.getElementById("memory-minus").addEventListener("click", () => {
    expression.memoryNumber = expression.memoryNumber - parseFloat(textBox.value);
    memory.textContent = `Memory: ${expression.memoryNumber}`;
});

document.getElementById("memory-recall").addEventListener("click", () => {
    textBox.value = expression.memoryNumber;
    if ((expression.editFirstNumber = true)) {
        expression.firstNumber = textBox.value;
    }
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
    textBox.value = Math.PI;
    if (expression.editFirstNumber) {
        expression.firstNumber = Math.PI;
    }
});

document.getElementById("square").addEventListener("click", () => {
    if (textBox.value === "") {
        return;
    }
    if (parseFloat(textBox.value) < 0) {
        alert("You can't take the Square Root of a negative number!");
        return;
    }
    textBox.value = Math.sqrt(textBox.value);
    if (expression.editFirstNumber) {
        expression.firstNumber = math.sqrt(expression.firstNumber);
    }
});

document.getElementById("negative").addEventListener("click", () => {
    if (textBox.value === "") {
        textBox.value = "-";
    } else {
        textBox.value = -textBox.value;
        if (expression.editFirstNumber) {
            expression.firstNumber = -expression.firstNumber;
        }
    }
});

document.getElementById("percent").addEventListener("click", () => {
    if (textBox.value === "") {
        return;
    }
    textBox.value = parseFloat(textBox.value) * 0.01;
    if (expression.editFirstNumber) {
        expression.firstNumber = expression.firstNumber * 0.01;
    }
});
