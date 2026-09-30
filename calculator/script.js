const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const signButton = document.getElementById("sign");
const percentButton = document.getElementById("percent");

const historyList = document.getElementById("historyList");
const clearHistoryButton = document.getElementById("clearHistory");


let currentValue = "0";
let previousValue = null;
let operator = null;
let waitingForOperand = false;

let history = [];


/* =========================
   DISPLAY
========================= */

function updateDisplay() {
  display.textContent = formatNumber(currentValue);
}


function formatNumber(value) {

  if (value === "Error") {
    return "Error";
  }

  const parts = value.split(".");

  const integerPart = parts[0];
  const decimalPart = parts[1];

  const formattedInteger =
    Number(integerPart).toLocaleString("en-US");

  if (decimalPart !== undefined) {
    return formattedInteger + "." + decimalPart;
  }

  return formattedInteger;
}


/* =========================
   NUMBER INPUT
========================= */

function inputNumber(number) {

  if (waitingForOperand) {

    currentValue = number;

    waitingForOperand = false;

  }

  else if (
    number === "." &&
    currentValue.includes(".")
  ) {

    return;

  }

  else if (
    currentValue === "0" &&
    number !== "."
  ) {

    currentValue = number;

  }

  else {

    currentValue += number;

  }

  updateDisplay();
}


/* =========================
   OPERATORS
========================= */

function chooseOperator(nextOperator) {

  const inputValue = parseFloat(currentValue);

  if (
    operator &&
    waitingForOperand
  ) {

    operator = nextOperator;

    updateActiveOperator(nextOperator);

    return;
  }


  if (previousValue === null) {

    previousValue = inputValue;

  }

  else if (operator) {

    const result = calculate(
      previousValue,
      inputValue,
      operator
    );

    currentValue = String(result);

    previousValue = result;

    updateDisplay();
  }


  operator = nextOperator;

  waitingForOperand = true;

  updateActiveOperator(nextOperator);
}


/* =========================
   CALCULATION
========================= */

function calculate(
  first,
  second,
  operation
) {

  switch (operation) {

    case "+":
      return first + second;

    case "-":
      return first - second;

    case "×":
      return first * second;

    case "÷":

      if (second === 0) {
        return "Error";
      }

      return first / second;

    default:
      return second;
  }
}


/* =========================
   EQUALS
========================= */

function calculateResult() {

  if (
    operator === null ||
    previousValue === null
  ) {

    return;
  }


  const firstValue = previousValue;

  const secondValue = parseFloat(currentValue);

  const selectedOperator = operator;


  const result = calculate(
    firstValue,
    secondValue,
    selectedOperator
  );


  const expression =
    `${formatNumber(String(firstValue))} ${selectedOperator} ${formatNumber(String(secondValue))}`;


  addToHistory(
    expression,
    String(result)
  );


  currentValue = String(result);

  previousValue = null;

  operator = null;

  waitingForOperand = true;


  updateDisplay();

  clearActiveOperator();
}


/* =========================
   CLEAR
========================= */

function clearCalculator() {

  currentValue = "0";

  previousValue = null;

  operator = null;

  waitingForOperand = false;

  updateDisplay();

  clearActiveOperator();
}


/* =========================
   PLUS / MINUS
========================= */

function toggleSign() {

  if (
    currentValue === "0" ||
    currentValue === "Error"
  ) {

    return;
  }


  currentValue =
    String(parseFloat(currentValue) * -1);

  updateDisplay();
}


/* =========================
   PERCENT
========================= */

function calculatePercentage() {

  if (currentValue === "Error") {
    return;
  }


  currentValue =
    String(parseFloat(currentValue) / 100);

  updateDisplay();
}


/* =========================
   OPERATOR HIGHLIGHT
========================= */

function updateActiveOperator(
  selectedOperator
) {

  operatorButtons.forEach(button => {

    button.classList.remove("active");

    if (
      button.dataset.op === selectedOperator
    ) {

      button.classList.add("active");

    }

  });
}


function clearActiveOperator() {

  operatorButtons.forEach(button => {

    button.classList.remove("active");

  });

}


/* =========================
   HISTORY
========================= */

function addToHistory(
  expression,
  result
) {

  history.unshift({
    expression: expression,
    result: result
  });


  if (history.length > 20) {
    history.pop();
  }


  renderHistory();
}


function renderHistory() {

  historyList.innerHTML = "";


  if (history.length === 0) {

    historyList.innerHTML =
      `<p class="empty-history">
        No calculations yet
      </p>`;

    return;
  }


  history.forEach((item, index) => {

    const historyItem =
      document.createElement("div");

    historyItem.className =
      "history-item";


    historyItem.innerHTML = `
      <div class="history-expression">
        ${item.expression} =
      </div>

      <div class="history-result">
        ${formatNumber(item.result)}
      </div>
    `;


    historyItem.addEventListener(
      "click",
      () => {

        currentValue = item.result;

        previousValue = null;

        operator = null;

        waitingForOperand = true;

        updateDisplay();

        clearActiveOperator();

      }
    );


    historyList.appendChild(historyItem);

  });

}


/* =========================
   CLEAR HISTORY
========================= */

clearHistoryButton.addEventListener(
  "click",
  () => {

    history = [];

    renderHistory();

  }
);


/* =========================
   BUTTON EVENTS
========================= */

numberButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      inputNumber(
        button.dataset.num
      );

    }
  );

});


operatorButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      chooseOperator(
        button.dataset.op
      );

    }
  );

});


clearButton.addEventListener(
  "click",
  clearCalculator
);


equalsButton.addEventListener(
  "click",
  calculateResult
);


signButton.addEventListener(
  "click",
  toggleSign
);


percentButton.addEventListener(
  "click",
  calculatePercentage
);


/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener(
  "keydown",
  event => {

    const key = event.key;


    if (
      key >= "0" &&
      key <= "9"
    ) {

      inputNumber(key);

      return;
    }


    if (key === ".") {

      inputNumber(".");

      return;
    }


    if (key === "+") {

      chooseOperator("+");

      return;
    }


    if (key === "-") {

      chooseOperator("-");

      return;
    }


    if (key === "*") {

      chooseOperator("×");

      return;
    }


    if (key === "/") {

      event.preventDefault();

      chooseOperator("÷");

      return;
    }


    if (
      key === "Enter" ||
      key === "="
    ) {

      calculateResult();

      return;
    }


    if (
      key === "Escape" ||
      key === "Delete"
    ) {

      clearCalculator();

      return;
    }


    if (key === "%") {

      calculatePercentage();

    }

  }
);


/* =========================
   INITIALIZE
========================= */

updateDisplay();

renderHistory();
