let buttons = document.getElementsByClassName("number");

let box = document.getElementById("box");

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener("click", function (e) {
    document.getElementById("box").value = document.getElementById("box").value + e.target.value;
  });
}

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
