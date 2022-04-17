const add = (x,y) =>  x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (y === 0) ? "divide by zero" : x / y;

const buttons = document.querySelectorAll('.numpad')
const screen = document.querySelector('.screen')  

const operate = (operator, x, y) => {
    if (operator === "+") {
        operator = add;
    } else if (operator === "-"){
        operator = subtract;
    } else if (operator === "x") {
        operator = multiply;
    } else {
        operator = divide;
    }
    return operator(x, y);
}

const display = () => {
    const ops = ['+', '-', 'x', '÷']
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
    let num1 = "";
    let num2 = "";
    let op = "";
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const userInputs = button.textContent;
            const anOperator = ops.includes(userInputs); 
            const aNumber = nums.includes(userInputs);  
            if (op === "" && anOperator && num1 !== "" || op !== "" && num2 === "" && anOperator){ 
                op = userInputs;
                screen.textContent =  `${num1} ${op} ${num2}`;
            } else if (op !== "" && aNumber) {  
                num2 += userInputs;
                screen.textContent =  `${num1} ${op} ${num2}`;
            } else if (aNumber) {      
                num1 += userInputs;
                screen.textContent =  `${num1} ${op} ${num2}`;
            } else {
                let input = [op,  num1, num2]
                let calculate = operate(input[0],parseFloat(input[1]), parseFloat(input[2]))  
                console.log(input)
                if (userInputs === "=") {  
                    if (!input.includes("")) {      
                        screen.textContent = calculate
                        num1 = calculate;
                        num2 = "";
                        op = ""; 
                    } else {
                        screen.textContent = num1
                    }        
                } else if (op.length === 1 && anOperator) {  
                    num1 = calculate;
                    num2 = ""; 
                    op = userInputs;
                    screen.textContent =  `${num1} ${op} ${num2}`;
                } else if (userInputs === "Clear All") {  
                    screen.textContent = 0;
                    num1 = "";
                    num2 = "";
                    op = "";
                    input = "";
                } else if (userInputs === "-/+") { 
                    if (num2 === ""){
                        num1 *= -1;
                        screen.textContent =  `${num1} ${op} ${num2}`
                    } else {
                        num2 *= -1
                        screen.textContent =  `${num1} ${op} ${num2}`
                    }
                }
            }
        });
    }); 
}
display()
