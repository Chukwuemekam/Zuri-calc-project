let currentInput = '0';
let operator = '';
let firstOperand = '';
let expression = '';

function updateDisplay() {
    document.getElementById('result').value = expression !== '' ? expression : currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    expression += number;
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    currentInput = '0';
    expression += ' ' + op + ' ';
    updateDisplay();
}

function calculate() {
    let result;
    const secondOperand = currentInput;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if (secondOperand === '0') {
                result = 'Error: Division by zero';
            } else {
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
            }
            break;
        default:
            result = currentInput;
            break;
    }
    expression = result.toString();
    currentInput = result.toString();
    operator = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    firstOperand = '';
    expression = '';
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        expression += '.';
        updateDisplay();
    }
}

// Initialize display
updateDisplay();
