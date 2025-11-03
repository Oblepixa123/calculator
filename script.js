function appendNumber(number) {
  const display = document.getElementById("display");
  display.value += number;

}

function appendOperator(operator) {
  const display  =  document.getElementById("display");
  display.value += `${operator}`;
}

function clearDisplay() {
  const display  =  document.getElementById("display");
  display.value = "";
}

function calculatorResult() {
  const display  =  document.getElementById("display");
  display.value = eval(display.value);
}
