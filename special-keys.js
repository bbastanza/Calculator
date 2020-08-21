const clearButton = document.getElementById("clear");
const piButton = document.getElementById("pi");
const squareRootButton = document.getElementById("square");
const negativeButton = document.getElementById("negative");
const percentButton = document.getElementById("percent");
const memoryPlusButton = document.getElementById("memory-plus");
const memoryMinusButton = document.getElementById("memory-minus");
const memoryRecallButton = document.getElementById("memory-recall");
const memoryClearButton = document.getElementById("memory-clear");
const allClearButton = document.getElementById("all-clear");
const memoryDisplay = document.getElementById("memory-display");

clearButton.addEventListener("click", () => {
    clearBoxValue();
});

piButton.addEventListener("click", () => {
    textBox.value = Math.PI;

    if (expression.editFirstNumber) return (expression.firstNumber = Math.PI);
});

squareRootButton.addEventListener("click", () => {
    switch (textBox.value) {
        case "":
            console.log(1);
            break;
        case ".":
            console.log(2);
            break;
        default:
            if (parseFloat(textBox.value) < 0) return alert("You can't take the Square Root of a negative number!");
            textBox.value = Math.sqrt(textBox.value);
            if (expression.editFirstNumber) return (expression.firstNumber = textBox.value);
    }
});

negativeButton.addEventListener("click", () => {
    if (textBox.value === "") {
        textBox.value = "-";
        expression.continuousText = true;
    } else {
        textBox.value = -textBox.value;

        if (expression.editFirstNumber) return (expression.firstNumber = textBox.value);
    }
});

percentButton.addEventListener("click", () => {
    switch (textBox.value) {
        case "":
            break;
        case ".":
            break;
        default:
            textBox.value = parseFloat(textBox.value) * 0.01;
            if (expression.editFirstNumber) return (expression.firstNumber = textBox.value);
    }
});

memoryPlusButton.addEventListener("click", () => {
    expression.memoryNumber = expression.memoryNumber + parseFloat(textBox.value);
    memoryDisplay.textContent = `Memory: ${expression.memoryNumber}`;
});

memoryMinusButton.addEventListener("click", () => {
    expression.memoryNumber = expression.memoryNumber - parseFloat(textBox.value);
    memoryDisplay.textContent = `Memory: ${expression.memoryNumber}`;
});

memoryRecallButton.addEventListener("click", () => {
    textBox.value = expression.memoryNumber;

    if (expression.editFirstNumber) return (expression.firstNumber = expression.memoryNumber);
});

memoryClearButton.addEventListener("click", () => {
    expression.memoryNumber = 0;
    memoryDisplay.textContent = `Memory: ${expression.memoryNumber}`;
});

allClearButton.addEventListener("click", () => {
    clearBoxValue();
    expression.memoryNumber = 0;
    memoryDisplay.textContent = `Memory: ${expression.memoryNumber}`;
});

function isTextInputANumber(e) {
    return e.which > 47 && e.which < 58 ? true : false;
}
