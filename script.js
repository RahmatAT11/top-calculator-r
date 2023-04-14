// Create function for add, substract, multiply, divide
let number1 = 0;
let number2 = 0;
let operator = "";

const contOperation = document.querySelector(".container-operation");

let displayNum1 = undefined;
let displayOperation = undefined;
let displayNum2 = undefined;

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

    return display
}

const createDisplayOperator = (className, typeOperator = "+") => {
    const display = document.createElement("div");
    display.classList.add(className);
    display.textContent = typeOperator;

    return display
}

const showNumber = (e) => {
    console.log(e.target.id)

    if (typeof displayNum1 === "undefined") {
        displayNum1 = createDisplayNumber("display-num", e.target.id)
        contOperation.appendChild(displayNum1)
    } else {
        displayNum1.textContent += e.target.id
    }
}

const prepareCalculator = () => {
    const numBtn = Array.from(document.querySelectorAll(".calculator-btn-blue-verylight"));
    const oprtrBtn = Array.from(document.querySelectorAll(".calculator-btn-blue"));
    const oprtrBtnLong = document.querySelector(".calculator-btn-blue-long");
    
    oprtrBtn.push(oprtrBtnLong);

    numBtn.forEach((btn) => {
        btn.addEventListener("click", e => showNumber(e))
    })
    oprtrBtn.forEach((btn) => {
        btn.addEventListener("click", e => showNumber(e))
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