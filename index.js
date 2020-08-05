const box = document.getElementById("box");

const numberKeys = document.getElementsByClassName("number");

for (let i = 0; i < numberKeys.length; i++) {
        const button = numberKeys[i];
        button.addEventListener("click", function (e) {
                box.value = box.value + e.target.value;
        });
}

const functionKeys = document.getElementsByClassName("function");
let expression = {
        firstNumber: "",
        method: "",
        secondNumber: "",
};

for (let i = 0; i < functionKeys.length; i++) {
        const method = functionKeys[i];
        method.addEventListener("click", function (e) {
                expression.firstNumber = box.value;
                expression.method = method.id;
                box.value = "";
        });
}

document.getElementById("equal").addEventListener("click", () => {
        expression.secondNumber = box.value;
        let result;
        if (expression.method === "plus") {
                result = addNumbers(expression.firstNumber, expression.secondNumber);
        } else if (expression.method === "minus") {
                result = subtractNumbers(expression.firstNumber, expression.secondNumber);
        } else if (expression.method === "multiply") {
                result = multiplyNumbers(expression.firstNumber, expression.secondNumber);
        } else if (expression.method === "divide") {
                result = divideNumbers(expression.firstNumber, expression.secondNumber);
        }
        expression.firstNumber = result;
});

function addNumbers(number1, number2) {
        const result = parseFloat(number1) + parseFloat(number2);
        box.value = result;
        return result;
}

function subtractNumbers(number1, number2) {
        const result = parseFloat(number1) - parseFloat(number2);
        box.value = result;
        return result;
}

function multiplyNumbers(number1, number2) {
        const result = parseFloat(number1) * parseFloat(number2);
        box.value = result;
        return result;
}

function divideNumbers(number1, number2) {
        const result = parseFloat(number1) / parseFloat(number2);
        box.value = result;
        return result;
}

document.getElementById("clear").addEventListener("click", () => {
        expression.firstNumber = "";
        expression.method = "";
        expression.secondNumber = "";
        box.value = "";
});
