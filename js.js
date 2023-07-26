const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

let num1 = 0;
let num2 = 0;
let operator = "";
let displayValue = 0;
const display = document.querySelector('.display');
function operate(num1, num2, operator){
    if(operator =="+"){
        return add(num1,num2);
    }
    else if(operator =="-"){
        return subtract(num1,num2);
    }
    else if(operator =="*"){
        return multiply(num1,num2);
    }
    else if(operator =="/"){
        return divide(num1,num2);
    }
    return 0;
}


function populate(e){
    if(displayValue.toString().includes(".") && e.textContent == "."){
        return;
    }
    if(displayValue == 0){
        displayValue = e.textContent;
    }
    else{
        displayValue += e.textContent;
    }
    display.textContent = displayValue;
    
}

function depopulate(){
    displayValue = 0;
    display.textContent = displayValue;
}

function remove(){
    let gru = displayValue.toString();
    displayValue = Number(gru.slice(0,gru.length-1));
    display.textContent = displayValue;
}

num1 = 5;
num2 = 10;
operator = "-";
console.log(operate(num1,num2,operator));