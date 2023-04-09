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

let number1 = 0;
let number2 = 0;
let operator = "";

console.log(add(1, 2));
console.log(substract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(operate(1, 2, "-"));