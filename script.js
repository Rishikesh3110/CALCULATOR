// Initialize the display
let currentInput = '';

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Function to append operators
function appendOperator(operator) {
    currentInput += ` ${operator} `;
    document.getElementById('display').value = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        let result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
