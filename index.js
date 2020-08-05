document.addEventListener("DOMContentLoaded", () => {
        clearBoxValue();
});
document.getElementById("clear").addEventListener("click", () => {
        expression.firstNumber = "";
        expression.secondNumber = "";
        expression.method = "";
        expression.isGoing = true;
        clearBoxValue();
});

function clearBoxValue() {
        box.value = "";
}

const box = document.getElementById("box");

const numberKeys = document.getElementsByClassName("number");

let expression = {
        firstNumber: "",
        secondNumber: "",
        isGoing: true,
        method: "",
};

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
        expression.method = "";
});

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

function updateExpression(number) {
        expression.isGoing = false;
        expression.firstNumber = number;
        expression.secondNumber = "";
}
