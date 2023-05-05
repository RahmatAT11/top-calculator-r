// Create function for add, substract, multiply, divide
let number1 = "";
let number2 = "";
let operator = "";
let total = "";
let changeNumDisplay = false;
let stopOperatorChange = false;

const contOperation = document.querySelector(".container-operation");
const contResult = document.querySelector(".container-result");

let displayNums = {};
let numbers = {};
let numCount = 0;

let displayOps = {};
let operators = {};
let operatorCount = 0;

let displayNum1 = undefined;
let displayOperation = undefined;
let displayNum2 = undefined;
let displayResult = undefined;
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
    // switch (changeNumDisplay) {
    //     case true:
    //         if (typeof displayNum2 === "undefined") {
    //             displayNum2 = createDisplayNumber("display-num", e.target.id);
    //             contOperation.appendChild(displayNum2);
        
    //             number2 += e.target.id;
    //             stopOperatorChange = true;
    //         } else {
    //             number2 += e.target.id;
        
    //             displayNum2.textContent = number2;
    //             displayNum2.id = number2;
    //             stopOperatorChange = true;
    //         }
    //         break;
    
    //     default:
    //         if (typeof displayNum1 === "undefined") {
    //             displayNum1 = createDisplayNumber("display-num", e.target.id);
    //             contOperation.appendChild(displayNum1);
        
    //             number1 += e.target.id;
    //         } else {
    //             number1 += e.target.id;
        
    //             displayNum1.textContent = number1;
    //             displayNum1.id = number1;
    //         }
    //         break;
    // }

    // if (typeof displayNum2 === "undefined") {
    //     displayNum2 = createDisplayNumber("display-num", e.target.id);
    //     contOperation.appendChild(displayNum2);
    // } else {
    //     number2 += e.target.id;
    //     displayNum2.textContent += number2;
    // }

    
    if (!changeNumDisplay) {
        const disNumsLength = `display-num-${Object.keys(displayNums).length}`;
        displayNums[disNumsLength] = createDisplayNumber("display-num", e.target.id);

        const currDisNum = `display-num-${Object.keys(displayNums).length-1}`;
        contOperation.appendChild(displayNums[currDisNum]);

        numbers[`number${Object.keys(numbers).length}`] = e.target.id;
        changeNumDisplay = true;
        stopOperatorChange = false;
        numCount++;
    
    } else {
        const num = numbers[`number${Object.keys(numbers).length-1}`];
        const numTemp = num + e.target.id;
        numbers[`number${Object.keys(numbers).length-1}`] = numTemp;

        const currNum = `number${Object.keys(numbers).length-1}`;
        const currDisNum = `display-num-${Object.keys(displayNums).length-1}`;

        displayNums[currDisNum].textContent = numbers[currNum];
        displayNums[currDisNum].id = numbers[currNum];
    }
}

const showOperator = (e) => {
    if (!stopOperatorChange) {
        const disOpsLength = `display-operator-${Object.keys(displayOps).length}`;
        displayOps[disOpsLength] = createDisplayOperator("display-operation", e.target.id);
        contOperation.appendChild(displayOps[disOpsLength])
        
        if (!(e.target.id === "=")) {
            operator = e.target.id;
            changeNumDisplay = false;
            stopOperatorChange = true;
            operatorCount++;
        }
        
    } else {
        if (!(e.target.id === "=")) {
            const currDisOps = `display-operator-${Object.keys(displayOps).length - 1}`;

            operator = e.target.id;
            displayOps[currDisOps].textContent = operator;
            displayOps[currDisOps].id = operator;
        }
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
        switch (btn.id) {
            case "=":
                btn.addEventListener("click", () => {
                    number1 = numbers[`number${numCount - 2}`];
                    number2 = numbers[`number${numCount - 1}`];

                    console.log(number1, typeof Number(number1), number2, typeof Number(number2), operator)

                    total = operate(Number(number1), Number(number2), operator);

                    displayResult = contResult.querySelector(".display-result");
                    displayResult.id += toString(total);
                    displayResult.textContent = total;
                })
                break;
        
            case "ce":
                btn.addEventListener("click", () => {
                    numbers = {};
                    operators = {};
                    total = "";
                    changeNumDisplay = false;
                    stopOperatorChange = false;

                    displayNums = {};
                    displayOps = {};
                    displayResult.id = 0;
                    displayResult.textContent = 0;
                })
                break;
            case "+/-":
                break;
            case "%":
                break;
            default:
                break;
        }
    })
}

prepareCalculator()

// console.log(add(1, 2));
// console.log(substract(1, 2));
// console.log(multiply(1, 2));
// console.log(divide(1, 2));
// console.log(operate(1, 2, "-"));