// HTML - divs for inputs, screen, container, buttons, h1


// CSS - buttons, screen, input


// JS - DOM for buttons, screen. Functions for calculations, outputs


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
    return operator(x, y);
}





const display = () => {
    const buttons = document.querySelectorAll('.numpad')
    const screen = document.querySelector('.screen')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let input = screen.textContent = "test"
            console.log("test")
        });
    }); 
}


display()