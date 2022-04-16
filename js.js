const add = (x,y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    if (y === 0) {
        return "divide by zero"
    } else {
        return x / y;
    }
}


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
    const buttons = document.querySelectorAll('.numpad')
    const screen = document.querySelector('.screen')  
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let anOperator = ops.includes(button.textContent);
            let aNumber = nums.includes(button.textContent);
            if (op === "" && anOperator || op !== "" && num2 === "" && anOperator){
                op = button.textContent;
                screen.textContent =  `${num1} ${op} ${num2}`;
            } else if (op !== "" && aNumber) {
                num2 += button.textContent;
                screen.textContent =  `${num1} ${op} ${num2}`;
            } else if (aNumber) {
                num1 += button.textContent;
                screen.textContent =  `${num1} ${op} ${num2}`;
            } else {
                let input = [op,  num1, num2]
                let calculate = operate(input[0],parseFloat(input[1]), parseFloat(input[2]))
                console.log(input)
                if (button.textContent === "=") {
                    if (!input.includes("")) {
                        screen.textContent = calculate
                        num1 = screen.textContent;
                        num2 = "";
                        op = ""; 
                    } else {
                        screen.textContent = num1
                    }        
                } else if (op.length === 1 && anOperator) {
                    num1 = calculate;
                    num2 = ""; 
                    op = button.textContent;
                    screen.textContent =  `${num1} ${op} ${num2}`;
                } else if (button.textContent === "Clear") {
                    screen.textContent = 0;
                    num1 = "";
                    num2 = "";
                    op = "";
                    input = "";
                } else if (button.textContent === "(-)") {
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
