function add(firstNumber, secondNumber){
    return Number(firstNumber) + Number(secondNumber);
};

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
};

var firstNumber = '';
var secondNumber = '';
var operator = '';

function operate (firstNumber, operator, secondNumber){
    if (operator === '+'){
        return add(firstNumber, secondNumber);
    } if (operator === '-'){
        return subtract(firstNumber, secondNumber);
    } if (operator === '*'){
        return multiply(firstNumber, secondNumber);
    } if (operator === '/'){
        return divide(firstNumber, secondNumber);
    }
};

const calcDisplay = document.querySelector(".display");
const numbers = document.querySelector(".numbers");
const operatorButtons = document.querySelector(".operends");
const clearButton = document.querySelector('#clear');
var selectedNum = [];

//Creates the number used
numbers.addEventListener('click', function(buttonClick){
    if (buttonClick.target.tagName === 'BUTTON'){
        selectedNum.push(buttonClick.target.textContent);
        calcDisplay.textContent = selectedNum.join('');
    }
});

//Operator and clearing of selection
operatorButtons.addEventListener('click', function(op){
    if (op.target.tagName === 'BUTTON') {
        if (operator !== '') {
            operator = op.target.textContent;
        }

        operator = op.target.textContent; //sets operator

        if (Number.isInteger(firstNumber)) {
            secondNumber = selectedNum.join("");
            selectedNum = [];
        } else {
            firstNumber = selectedNum.join(""); //creates string from array for the first number
            selectedNum = []; //clears the selection for next number
        }
    }
});

const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', function(){
    secondNumber = selectedNum.join("");
    if (firstNumber === ""){
        calcDisplay.textContent = "";
    }
    if (secondNumber == '0'){
        calcDisplay.textContent = "What did you think was going to happen?"
    } else {
        var result = operate(firstNumber, operator, secondNumber);

        calcDisplay.textContent = result;
        selectedNum = [];
        firstNumber = result;
        secondNumber = '';
        operator = '';
        result = '';
    }
});

//clears calculator
clearButton.addEventListener('click', function(){
    calcDisplay.textContent = ''; //clears display
    selectedNum = []; // clears selected number
    firstNumber = "";
    secondNumber = "";
    operator = "";
});
