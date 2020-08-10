//
// ---------------------------------------------Calculator-----------------------------------------------
//
document.addEventListener("DOMContentLoaded", () => {
    clearBoxValue();
});

const textBox = document.getElementById("text-box");

const expression = {
    firstNumber: "",
    secondNumber: "",
    method: "",
    memoryNumber: 0,
    decimalInValue: false,
    editFirstNumber: true,
    continuousText: true,
};

document.getElementById("decimal").addEventListener("click", () => {
    for (let character of textBox.value) {
        if (character === ".") {
            return;
        }
    }
    if (expression.continuousText) {
        if (textBox.value.length > 17) {
            return;
        } else {
            textBox.value += ".";
        }
    } else {
        textBox.value = ".";
        expression.continuousText = true;
    }
});

const numberKeys = document.getElementsByClassName("number");
for (let i = 0; i < numberKeys.length; i++) {
    const numberKey = numberKeys[i];
    numberKey.addEventListener("click", function (e) {
        if (expression.continuousText) {
            if (textBox.value.length > 17) {
                return;
            } else {
                textBox.value += e.target.value;
            }
        } else {
            textBox.value = e.target.value;
            expression.continuousText = true;
        }
    });
}

const methodKeys = document.getElementsByClassName("method");
for (let i = 0; i < methodKeys.length; i++) {
    const methodKey = methodKeys[i];
    methodKey.addEventListener("click", () => {
        expression.continuousText = false;
        expression.editFirstNumber = false;
        displayAnswer();
        expression.method = methodKey.id;
    });
}

document.getElementById("equal").addEventListener("click", () => {
    expression.continuousText = false;
    expression.editFirstNumber = true;
    displayAnswer();
    expression.method = "";
});

function displayAnswer() {
    if (expression.firstNumber === "") {
        expression.firstNumber = parseFloat(textBox.value);
        return;
    } else if (isNaN(expression.firstNumber)) {
        expression.firstNumber = "";
        textBox.value = "";
        return;
    }

    expression.secondNumber = parseFloat(textBox.value);
    if (isNaN(expression.secondNumber)) {
        textBox.value = "";
        return;
    }
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
    textBox.value = result;
    updateExpression(result);
}

function updateExpression(number) {
    expression.firstNumber = number;
    expression.secondNumber = "";
    expression.continuousText = false;
}

function clearBoxValue() {
    expression.firstNumber = "";
    expression.secondNumber = "";
    expression.method = "";
    expression.continuousText = true;
    textBox.value = "";
}
