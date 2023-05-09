let number1 = "";
let number2 = "";
let operator = "";
let total = "";
let changeNumDisplay = false;
let stopOperatorChange = false;
let endOfCalculation = false;

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

const add = (num1, num2) => Number(num1 + num2).toFixed(2);

const substract = (num1, num2) => Number(num1 - num2).toFixed(2);

const multiply = (num1, num2) => Number(num1 * num2).toFixed(2);

const divide = (num1, num2) => Number(num1 / num2).toFixed(2);

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
    if (!changeNumDisplay) {
        const disNumsLength = `display-num-${Object.keys(displayNums).length}`;
        displayNums[disNumsLength] = createDisplayNumber("display-num", e.target.id);

        const currDisNum = `display-num-${Object.keys(displayNums).length-1}`;
        contOperation.appendChild(displayNums[currDisNum]);

        numbers[`number${operatorCount}`] = e.target.id;
        changeNumDisplay = true;
        stopOperatorChange = false;
        numCount++;
    
    } else {
        const num = numbers[`number${numCount-1}`];
        const numTemp = num + e.target.id;
        numbers[`number${numCount-1}`] = numTemp;

        const currNum = `number${numCount-1}`;
        const currDisNum = `display-num-${Object.keys(displayNums).length-1}`;

        displayNums[currDisNum].textContent = numbers[currNum];
        displayNums[currDisNum].id = numbers[currNum];
    }
}

const showOperator = (e) => {
    if (!stopOperatorChange) {
        const disOpsLength = `display-operator-${operatorCount}`;
        displayOps[disOpsLength] = createDisplayOperator("display-operation", e.target.id);
        contOperation.appendChild(displayOps[disOpsLength])
        
        if (!(e.target.id === "=")) {
            operator = e.target.id;
            operators[`operator-${operatorCount}`] = operator;
            changeNumDisplay = false;
            stopOperatorChange = true;
            operatorCount++;
        } else {
            changeNumDisplay = false;
            stopOperatorChange = true;
            operatorCount++;
        }
        
    } else {
        if (!(e.target.id === "=")) {
            const currDisOps = `display-operator-${operatorCount - 1}`;

            operator = e.target.id;
            operators[`operator-${operatorCount - 1}`] = operator;
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
            case "ce":
                btn.addEventListener("click", () => {
                    numbers = {};
                    operators = {};
                    total = "";
                    number1 = "";
                    number2 = "";
                    numCount = 0;
                    operatorCount = 0;
                    changeNumDisplay = false;
                    stopOperatorChange = false;
                    
                    while (contOperation.children.length > 0) {
                        contOperation.removeChild(contOperation.firstChild);
                    }

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
            case "+":
            case "-":
            case "*":
            case "x":
            case "/":
            case "=":
                btn.addEventListener("click", () => {
                    if (operatorCount > 1 && !endOfCalculation) {
                        console.log(`number${numCount - 2}`)
                        number1 = numbers[`number${numCount - 2}`];
                        console.log(`number${numCount - 1}`)
                        number2 = numbers[`number${numCount - 1}`];

                        console.log(number1, number2)
        
                        total = operate(Number(number1), Number(number2), operators[`operator-${operatorCount - 2}`]);
        
                        displayResult = contResult.querySelector(".display-result");
                        displayResult.id = total.toString();
                        displayResult.textContent = total;
        
                        number1 = "";
                        number2 = "";
                        numbers[`number${numCount - 1}`] = Number(total);
                        delete numbers[`number${numCount - 2}`];
                    }

                    if (btn.id === "=") {
                        endOfCalculation = true;
                    }
                });
                break;
        }
    })
}

prepareCalculator()