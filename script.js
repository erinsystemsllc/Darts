let display = document.getElementById('display');
let currentInput = '0';
let previousInput = null;
let operator = null;
let waitingForOperand = false;

function updateDisplay() {
    display.value = currentInput;
}

function inputNumber(num) {
    if (waitingForOperand) {
        currentInput = num;
        waitingForOperand = false;
    } else {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }
    updateDisplay();
}

function inputDecimal() {
    if (waitingForOperand) {
        currentInput = '0.';
        waitingForOperand = false;
    } else if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
    }
    updateDisplay();
}

function inputOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (previousInput === null) {
        previousInput = inputValue;
    } else if (operator) {
        const currentValue = previousInput || 0;
        const newValue = performCalculation(currentValue, inputValue, operator);

        if (newValue === 'Error') {
            currentInput = 'Error';
            previousInput = null;
            operator = null;
            waitingForOperand = true;
            updateDisplay();
            return;
        }

        currentInput = String(newValue);
        previousInput = newValue;
        updateDisplay();
    }

    waitingForOperand = true;
    operator = nextOperator;
}

function calculate() {
    const inputValue = parseFloat(currentInput);

    if (previousInput !== null && operator) {
        const newValue = performCalculation(previousInput, inputValue, operator);
        
        if (newValue === 'Error') {
            currentInput = 'Error';
        } else {
            currentInput = String(newValue);
        }
        
        previousInput = null;
        operator = null;
        waitingForOperand = true;
        updateDisplay();
    }
}

function performCalculation(firstOperand, secondOperand, operator) {
    let result;
    
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                return 'Error';
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return secondOperand;
    }
    
    // Round to avoid floating point precision issues
    return Math.round((result + Number.EPSILON) * 100000000) / 100000000;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = null;
    operator = null;
    waitingForOperand = false;
    updateDisplay();
}

function clearEntry() {
    currentInput = '0';
    updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        inputNumber(key);
    } else if (key === '.') {
        inputDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        inputOperator(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
        updateDisplay();
    }
});

// Initialize display
updateDisplay();