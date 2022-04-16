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
    return x / y;
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
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let num1 = "";
    let num2 = "";
    let op = "";
    const buttons = document.querySelectorAll('.numpad')
    const screen = document.querySelector('.screen')  
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let anOperator = ops.includes(button.textContent);
            let aNumber = nums.includes(button.textContent);
            if (op === "" && anOperator){
                op = button.textContent;
                screen.textContent =  num1 + op + num2;
            } else if (ops.find(text => screen.textContent.includes(text)) && aNumber) {
                num2 += button.textContent;
                screen.textContent =  num1 + op + num2;
            } else if (aNumber) {
                num1 += button.textContent;
                screen.textContent =  num1 + op + num2;
            } else {
                let input = [op,  num1, num2]
                let calculate = operate(input[0],parseInt(input[1]), parseInt(input[2]))
                console.log(input)
                if (button.textContent === "=") {
                    if (!input.includes("")) {
                        screen.textContent = calculate
                        num1 = screen.textContent;
                        num2 = "";
                        op = ""; }
                    else {
                        screen.textContent = num1
                    }           
                } else if (op.length === 1 && anOperator) {
                    num1 = calculate;
                    num2 = ""; 
                    op = button.textContent;
                    screen.textContent =  num1 + op + num2;
                } else if (button.textContent === "C") {
                    screen.textContent = 0;
                    num1 = "";
                    num2 = "";
                    op = "";
                    input = "";
                }
            }
        });
    });
    
}

    


display()
