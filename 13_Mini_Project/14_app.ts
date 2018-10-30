// The application flow starts when you create an an object.
// Please starts from object creation.

class CalculatorApp{
    private static firstNumberElement:HTMLInputElement;
    private static secondNumberElement:HTMLInputElement;
    private static operatorButtonElement:HTMLButtonElement;
    private static equalsButtonElement:HTMLButtonElement;
    private static resultButtonElement:HTMLButtonElement;
    private static plusButtonElement:HTMLButtonElement;
    private static minusButtonElement:HTMLButtonElement;
    private static multiButtonElement:HTMLButtonElement;
    private static divButtonElement:HTMLButtonElement;
    private static resetButtonElement:HTMLButtonElement;

    // This is a constructor function to create an object
    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEventListener();
}
    public static initialize(){
        CalculatorApp.firstNumberElement = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumberElement = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operatorButtonElement = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equalsButtonElement = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.resultButtonElement = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plusButtonElement = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButtonElement = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.multiButtonElement = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.divButtonElement = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.resetButtonElement = document.querySelector('#clear-button') as HTMLButtonElement;
        // The control jumps back to constructor function
    }

    public static addEventListener(){
        CalculatorApp.plusButtonElement.addEventListener('click',CalculatorApp.changePlusOpearator);
        CalculatorApp.minusButtonElement.addEventListener('click',CalculatorApp.changeMinusOperator);
        CalculatorApp.multiButtonElement.addEventListener('click',CalculatorApp.changeMultiOperator);
        CalculatorApp.divButtonElement.addEventListener('click',CalculatorApp.changeDivOperator);
        CalculatorApp.resetButtonElement.addEventListener('click',CalculatorApp.resetAll);
        CalculatorApp.equalsButtonElement.addEventListener('click',CalculatorApp.calculate);

    }
    // This is to add all event listeners for buttons
    public static changePlusOpearator(){
        CalculatorApp.operatorButtonElement.textContent = '+';
    }
    public static changeMinusOperator(){
        CalculatorApp.operatorButtonElement.textContent = '-';
    }
    public static changeMultiOperator(){
        CalculatorApp.operatorButtonElement.textContent = '*';
    }
    public static changeDivOperator(){
        CalculatorApp.operatorButtonElement.textContent = '/';
    }
    public static resetAll(){
        CalculatorApp.firstNumberElement.value = '';
        CalculatorApp.secondNumberElement.value = '';
        CalculatorApp.operatorButtonElement.textContent = '+';
        CalculatorApp.resultButtonElement.textContent = 'RESULT';
    }
    public static calculate(){
        let firstNumber = CalculatorApp.firstNumberElement.value;
        let secondNumber = CalculatorApp.secondNumberElement.value;
        let operator = CalculatorApp.operatorButtonElement.textContent.trim();
        let result:number = 0;
        if (firstNumber !== '' && secondNumber !== ''){
            let num1 = parseFloat(firstNumber);
            let num2 = parseFloat(secondNumber);
            switch(operator){
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
        else{
            CalculatorApp.resultButtonElement.textContent = 'RESULT';
        }
    }
}
// Flow Starts Here
// Object Creation
let calculatorApp = new CalculatorApp();

