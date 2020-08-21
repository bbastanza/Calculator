const textBox = document.getElementById("text-box");
const decimalKey = document.getElementById("decimal");
const numberKeys = document.getElementsByClassName("number");
const equalKey = document.getElementById("equal");
const methodKeys = document.getElementsByClassName("method");

window.onload = () => {
    clearBoxValue();
    for (let numberKey of numberKeys) {
        numberKey.addEventListener("click", function (e) {
            if (expression.continuousText) {
                textBox.value.length > 17 ? null : (textBox.value += e.target.value);
            } else {
                textBox.value = e.target.value;
                expression.continuousText = true;
            }
        });
    }
    for (let methodKey of methodKeys) {
        methodKey.addEventListener("click", () => {
            expression.continuousText = false;
            expression.editFirstNumber = false;
            displayAnswer();
            expression.method = methodKey.id;
        });
    }
};

const expression = {
    firstNumber: "",
    secondNumber: "",
    method: "",
    memoryNumber: 0,
    editFirstNumber: true,
    continuousText: true,
};

decimalKey.addEventListener("click", () => {
    for (let character of textBox.value) {
        if (character === ".") return;
    }

    if (expression.continuousText) {
        textBox.value.length > 17 ? null : (textBox.value += ".");
    } else {
        textBox.value = ".";
        expression.continuousText = true;
    }
});

equalKey.addEventListener("click", () => {
    expression.continuousText = false;
    expression.editFirstNumber = true;
    displayAnswer();
    expression.method = "";
});

function displayAnswer() {
    if (expression.firstNumber === "") return (expression.firstNumber = parseFloat(textBox.value));
    else if (isNaN(expression.firstNumber)) {
        expression.firstNumber = "";
        textBox.value = "";
        return;
    }

    expression.secondNumber = parseFloat(textBox.value);

    if (isNaN(expression.secondNumber)) return (textBox.value = "");

    const firstNumber = expression.firstNumber;
    const secondNumber = expression.secondNumber;

    switch (expression.method) {
        case "plus":
            addNumbers(firstNumber, secondNumber);
            break;
        case "minus":
            subtractNumbers(firstNumber, secondNumber);
            break;
        case "multiply":
            multiplyNumbers(firstNumber, secondNumber);
            break;
        case "divide":
            divideNumbers(firstNumber, secondNumber);
            break;
        default:
            return;
    }
}

function addNumbers(number1, number2) {
    const result = parseFloat(number1) + parseFloat(number2);
    if (!checkResultLength(result)) return;
    textBox.value = result;
    updateExpression(result);
}

function subtractNumbers(number1, number2) {
    const result = parseFloat(number1) - parseFloat(number2);
    if (!checkResultLength(result)) return;
    textBox.value = result;
    updateExpression(result);
}

function multiplyNumbers(number1, number2) {
    const result = parseFloat(number1) * parseFloat(number2);
    if (!checkResultLength(result)) return;
    textBox.value = result;
    updateExpression(result);
}

function divideNumbers(number1, number2) {
    const result = parseFloat(number1) / parseFloat(number2);
    if (!checkResultLength(result)) return;
    textBox.value = result;
    updateExpression(result);
}

function updateExpression(number) {
    expression.firstNumber = number;
    expression.secondNumber = "";
    expression.continuousText = false;
}

function checkResultLength(result) {
    if (result.toString().length > 19) {
        alert("That number is a little too big for this app... Sorry :(");
        return false;
    }
    return true;
}

function clearBoxValue() {
    expression.firstNumber = "";
    expression.secondNumber = "";
    expression.method = "";
    expression.continuousText = true;
    textBox.value = "";
}
