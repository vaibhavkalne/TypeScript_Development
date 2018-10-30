// The application flow starts when you create an an object.
// Please starts from object creation.
var CalculatorApp = (function () {
    // This is a constructor function to create an object
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEventListener();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumberElement = document.querySelector('#firstNumber');
        CalculatorApp.secondNumberElement = document.querySelector('#secondNumber');
        CalculatorApp.operatorButtonElement = document.querySelector('#operator');
        CalculatorApp.equalsButtonElement = document.querySelector('#equals-button');
        CalculatorApp.resultButtonElement = document.querySelector('#result-button');
        CalculatorApp.plusButtonElement = document.querySelector('#plus-button');
        CalculatorApp.minusButtonElement = document.querySelector('#minus-button');
        CalculatorApp.multiButtonElement = document.querySelector('#multiply-button');
        CalculatorApp.divButtonElement = document.querySelector('#divide-button');
        CalculatorApp.resetButtonElement = document.querySelector('#clear-button');
        // The control jumps back to constructor function
    };
    CalculatorApp.addEventListener = function () {
        CalculatorApp.plusButtonElement.addEventListener('click', CalculatorApp.changePlusOpearator);
        CalculatorApp.minusButtonElement.addEventListener('click', CalculatorApp.changeMinusOperator);
        CalculatorApp.multiButtonElement.addEventListener('click', CalculatorApp.changeMultiOperator);
        CalculatorApp.divButtonElement.addEventListener('click', CalculatorApp.changeDivOperator);
        CalculatorApp.resetButtonElement.addEventListener('click', CalculatorApp.resetAll);
        CalculatorApp.equalsButtonElement.addEventListener('click', CalculatorApp.calculate);
    };
    // This is to add all event listeners for buttons
    CalculatorApp.changePlusOpearator = function () {
        CalculatorApp.operatorButtonElement.textContent = '+';
    };
    CalculatorApp.changeMinusOperator = function () {
        CalculatorApp.operatorButtonElement.textContent = '-';
    };
    CalculatorApp.changeMultiOperator = function () {
        CalculatorApp.operatorButtonElement.textContent = '*';
    };
    CalculatorApp.changeDivOperator = function () {
        CalculatorApp.operatorButtonElement.textContent = '/';
    };
    CalculatorApp.resetAll = function () {
        CalculatorApp.firstNumberElement.value = '';
        CalculatorApp.secondNumberElement.value = '';
        CalculatorApp.operatorButtonElement.textContent = '+';
        CalculatorApp.resultButtonElement.textContent = 'RESULT';
    };
    CalculatorApp.calculate = function () {
        var firstNumber = CalculatorApp.firstNumberElement.value;
        var secondNumber = CalculatorApp.secondNumberElement.value;
        var operator = CalculatorApp.operatorButtonElement.textContent.trim();
        var result = 0;
        if (firstNumber !== '' && secondNumber !== '') {
            var num1 = parseFloat(firstNumber);
            var num2 = parseFloat(secondNumber);
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    result = 0;
                    break;
            }
            CalculatorApp.resultButtonElement.textContent = result.toString();
        }
        else {
            CalculatorApp.resultButtonElement.textContent = 'RESULT';
        }
    };
    return CalculatorApp;
}());
// Flow Starts Here
// Object Creation
var calculatorApp = new CalculatorApp();
