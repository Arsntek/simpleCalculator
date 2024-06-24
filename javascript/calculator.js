const operands = document.querySelectorAll(".operand");
const clear = document.querySelector(".clear")
let display = document.querySelector("#display");
const operatorBtn = document.querySelectorAll(".operator")
const equalBtn = document.querySelectorAll(".equal")

let number1;
let number2;
let operator;
let displayValue = "";

function createListenerOperands() {
  operands.forEach((button) => {
    button.addEventListener("click", () => {
      displayValue = displayValue + button.textContent
      display.textContent = displayValue
    });
  });
}

function createListenerClear(){
  clear.addEventListener("click", () => {
    number1 = ""
    number2 = ""
    operator = ""
    display.textContent = 0
  })
}

function createListenerOperator(){
  operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
      number1 = parseInt(display.textContent)
      operator = button.textContent
      displayValue = ""
    })
  })
}

function createListenerEqual(){
  equalBtn.forEach((button) => {button.addEventListener("click", () => {
    number2 = parseInt(display.textContent)
    display.textContent = operate(operator,number1,number2)
  })})
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
  }
}

//Call to create listener for operands btn
createListenerOperands()
createListenerClear()
createListenerOperator()
createListenerEqual()
