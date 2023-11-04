document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "";
    let operator = "";
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;
            if (value >= '0' && value <= '9') {
                currentInput += value;
                display.value = currentInput;
            } else if (value === 'C') {
                clear();
            } else if (value === '=') {
                calculate();
            } else {
                setOperator(value);
            }
        });
    });

    function clear() {
        currentInput = "";
        operator = "";
        firstOperand = null;
        display.value = "";
    }

    function setOperator(op) {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            currentInput = "";
            operator = op;
        } else {
            calculate();
            operator = op;
        }
    }

    function calculate() {
        if (operator === "+") {
            currentInput = (firstOperand + parseFloat(currentInput)).toString();
        } else if (operator === "-") {
            currentInput = (firstOperand - parseFloat(currentInput)).toString();
        } else if (operator === "*") {
            currentInput = (firstOperand * parseFloat(currentInput)).toString();
        } else if (operator === "/") {
            currentInput = (firstOperand / parseFloat(currentInput)).toString();
        }
        display.value = currentInput;
        firstOperand = parseFloat(currentInput);
        currentInput = "";
        operator = "";
    }
});
