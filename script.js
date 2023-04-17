// Create function for add, substract, multiply, divide
let number1 = "";
let number2 = "";
let operator = "";
let changeNumDisplay = false;
let stopOperatorChange = false;

const contOperation = document.querySelector(".container-operation");

let displayNum1 = undefined;
let displayOperation = undefined;
let displayNum2 = undefined;
let numBtn = undefined;
let oprtrBtn = undefined;
let oprtrBtnLong = undefined;

const add = (num1, num2) => num1 + num2;

const substract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return substract(num1, num2);

        case "*":
        case "x":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);
    
        default:
            return "There is no such operation"
    }
};

const createDisplayNumber = (className, number = "0") => {
    const display = document.createElement("div");
    display.classList.add(className);
    display.textContent = number;
    display.id = number;

    return display
}

const createDisplayOperator = (className, typeOperator = "+") => {
    const display = document.createElement("div");
    display.classList.add(className);
    display.textContent = typeOperator;
    display.id = typeOperator;

    return display
}

const showNumber = (e) => {
    switch (changeNumDisplay) {
        case true:
            if (typeof displayNum2 === "undefined") {
                displayNum2 = createDisplayNumber("display-num", e.target.id);
                contOperation.appendChild(displayNum2);
        
                number2 += e.target.id;
                stopOperatorChange = true;
            } else {
                number2 += e.target.id;
        
                displayNum2.textContent = number2;
                displayNum2.id = number2;
            }
            break;
    
        default:
            if (typeof displayNum1 === "undefined") {
                displayNum1 = createDisplayNumber("display-num", e.target.id);
                contOperation.appendChild(displayNum1);
        
                number1 += e.target.id;
            } else {
                number1 += e.target.id;
        
                displayNum1.textContent = number1;
                displayNum1.id = number1;
            }
            break;
    }

    // if (typeof displayNum2 === "undefined") {
    //     displayNum2 = createDisplayNumber("display-num", e.target.id);
    //     contOperation.appendChild(displayNum2);
    // } else {
    //     number2 += e.target.id;
    //     displayNum2.textContent += number2;
    // }
}

const showOperator = (e) => {
    if (typeof displayOperation === "undefined") {
        displayOperation = createDisplayOperator("display-operation", e.target.id);
        contOperation.appendChild(displayOperation)
        changeNumDisplay = true;
    } else if (stopOperatorChange === false){
        operator = e.target.id;
        displayOperation.textContent = operator;
        displayOperation.id = operator;

        console.log("GOD")
        numBtn.forEach((btn) => btn.removeEventListener("click", console.log(btn)))
    }
}

const prepareCalculator = () => {
    numBtn = Array.from(document.querySelectorAll(".calculator-btn-blue-verylight"));
    oprtrBtn = Array.from(document.querySelectorAll(".calculator-btn-blue"));
    oprtrBtnLong = document.querySelector(".calculator-btn-blue-long");
    
    oprtrBtn.push(oprtrBtnLong);

    numBtn.forEach((btn) => {
        btn.addEventListener("click", e => showNumber(e))
    })
    oprtrBtn.forEach((btn) => {
        btn.addEventListener("click", e => showOperator(e))
    })
    return {
        number: numBtn,
        oprtrBtn: oprtrBtn
    };
}

console.log(prepareCalculator())

// console.log(add(1, 2));
// console.log(substract(1, 2));
// console.log(multiply(1, 2));
// console.log(divide(1, 2));
// console.log(operate(1, 2, "-"));