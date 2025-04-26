function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

var firstNumber = '';
var secondNumber = '';
var operator = '';

function operate (firstNumber, operator, secondNumber){
    if (operator = '+'){
        return add(firstNumber, secondNumber);
    } if (operator = '-'){
        return subtract(firstNumber, secondNumber);
    } if (operator = '*'){
        return multiply(firstNumber, secondNumber);
    } if (operator = '/'){
        return divide(firstNumber, secondNumber);
    }
};

const calcDisplay = document.querySelector(".display");
const buttons = document.querySelector("keypad");