const add = function (a, b) {
    return Number(a)  + Number(b);
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
let operatorHover = false;
let operatorHoverobj = null;
let operationDone = false;


function operate(n1, n2, operator){
    operationDone = true;
    if(operator =="+"){
        return add(n1,n2);
    }
    else if(operator =="-"){
        return subtract(n1,n2);
    }
    else if(operator =="*"){
        return multiply(n1,n2);
    }
    else if(operator =="/"){
        return divide(n1,n2);
    }
    return 0;
}


function populate(e){
    

    if(displayValue.toString().includes(".") && e.textContent == "."){
        return;
    }
    if(displayValue == 0 || operatorHover){
        displayValue = e.textContent;
    }
    else{
        displayValue += e.textContent;
    }
    display.textContent = displayValue;
    operatorHover = false;
    if(operatorHoverobj){
        operatorHoverobj.classList.remove("operator-hover");
    }
    
}

function depopulate(){
    operatorHover = false;
    operatorHoverobj = null;
    operationDone = false;
    displayValue = 0;
    num1 = 0;
    num2 = 0;
    operator = "";
    display.textContent = displayValue;
    
}

function remove(){
    if(operatorHoverobj){
        operatorHoverobj.classList.remove("operator-hover");
    }
    let gru = displayValue.toString();
    displayValue = Number(gru.slice(0,gru.length-1));
    display.textContent = displayValue;
}


function op(e){
    num1 = displayValue;
    operator = e.textContent;

    operatorHover = true;
    if(operatorHoverobj){
        operatorHoverobj.classList.remove("operator-hover");
    }
    operatorHoverobj = e;
    operatorHoverobj.classList.add("operator-hover")
}

function equal(){
    displayValue = operate(num1,displayValue, operator);
    display.textContent = displayValue;
}