document.getElementById("clear").addEventListener("click", () => {
    clearBoxValue();
});

document.getElementById("pi").addEventListener("click", () => {
    textBox.value = Math.PI;

    if (expression.editFirstNumber) {
        expression.firstNumber = Math.PI;
    }
});

document.getElementById("square").addEventListener("click", () => {
    if (textBox.value === "" || textBox.value === ".") {
        return;
    } else if (parseFloat(textBox.value) < 0) {
        alert("You can't take the Square Root of a negative number!");
        return;
    }
    textBox.value = Math.sqrt(textBox.value);

    if (expression.editFirstNumber) {
        expression.firstNumber = textBox.value;
    }
});

document.getElementById("negative").addEventListener("click", () => {
    if (textBox.value === "") {
        textBox.value = "-";
        expression.continuousText = true;
    } else {
        textBox.value -= textBox.value * 2;

        if (expression.editFirstNumber) {
            expression.firstNumber = textBox.value;
        }
    }
});

document.getElementById("percent").addEventListener("click", () => {
    if (textBox.value === "" || textBox.value === ".") {
        return;
    }

    textBox.value = parseFloat(textBox.value) * 0.01;

    if (expression.editFirstNumber) {
        expression.firstNumber = textBox.value;
    }
});

const memory = document.getElementById("memory-display");

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

    if (expression.editFirstNumber) {
        expression.firstNumber = expression.memoryNumber;
    }
});

document.getElementById("memory-clear").addEventListener("click", () => {
    expression.memoryNumber = 0;
    memory.textContent = `Memory: ${expression.memoryNumber}`;
});

document.getElementById("all-clear").addEventListener("click", () => {
    clearBoxValue();
    expression.memoryNumber = 0;
    memory.textContent = `Memory: ${expression.memoryNumber}`;
});

function isTextInputANumber(e) {
    return e.which > 47 && e.which < 58 ? true : false;
}
