// Create function for add, substract, multiply, divide
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

const createDisplayNumber = (className, number = 0) => {
    const display = document.createElement("div");
    display.classList.add(className);
    display.textContent = number;

    return display
}

const createDisplayOperator = (className, typeOperator = "+") => {
    const display = document.createElement("div");
    display.classList.add(className);
    display.textContent = typeOperator;

    return display
}

const prepareCalculator = () => {
    const numBtn = Array.from(document.querySelectorAll(".calculator-btn-blue-verylight"));
    const oprtrBtn = Array.from(document.querySelectorAll(".calculator-btn-blue"));
    const oprtrBtnLong = document.querySelector(".calculator-btn-blue-long");
    
    oprtrBtn.push(oprtrBtnLong);
    return {
        number: numBtn,
        oprtrBtn: oprtrBtn
    };
}
let number1 = 0;
let number2 = 0;
let operator = "";

const contOperation = document.querySelector(".container-operation");

const displayNum1 = createDisplayNumber("display-num");
const displayOperation = createDisplayOperator("display-operation");
const displayNum2 = createDisplayNumber("display-num");

contOperation.appendChild(displayNum1);
contOperation.appendChild(displayOperation);
contOperation.appendChild(displayNum2);

console.log(prepareCalculator())

// console.log(add(1, 2));
// console.log(substract(1, 2));
// console.log(multiply(1, 2));
// console.log(divide(1, 2));
// console.log(operate(1, 2, "-"));