document.addEventListener("DOMContentLoaded", function() {
    let display = document.querySelector('.display');
    let buttons = Array.from(document.querySelectorAll('.button'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            let value = e.target.innerText;

            if (value === 'C') {
                display.innerText = '0';
            } else if (value === '=') {
                try {
                    display.innerText = calculate(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                if (display.innerText === '0') {
                    display.innerText = value;
                } else {
                    display.innerText += value;
                }
            }
        });
    });

    function calculate(expression) {
        try {
            // Evaluate the expression safely
            let result = Function('"use strict";return (' + expression + ')')();
            return result;
        } catch (error) {
            return 'Error';
        }
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }
});
