//your code here
const input = document.getElementById("input");
const clr = document.getElementById("clr");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const dot = document.getElementById("dot");
const ans = document.getElementById("ans");

const blocks = document.querySelectorAll(".block");

let currentValue = "0";
let operator = "";
let previousValue = "";

blocks.forEach((block) => {
  block.addEventListener("click", (e) => {
    const value = e.target.textContent;
    if (value === "C") {
      currentValue = "0";
      operator = "";
      previousValue = "";
    } else if (value === "." && !currentValue.includes(".")) {
      currentValue += ".";
    } else if (value === "=") {
      previousValue = operate(previousValue, currentValue, operator);
      currentValue = previousValue;
      operator = "";
    } else if (["+", "-", "&times;", "&divide;"].includes(value)) {
      previousValue = currentValue;
      currentValue = "0";
      operator = value;
    } else {
      if (currentValue === "0") {
        currentValue = value;
      } else {
        currentValue += value;
      }
    }
    input.value = currentValue;
  });
});


