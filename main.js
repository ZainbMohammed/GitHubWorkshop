// main.js
document.addEventListener("DOMContentLoaded", function() {
    let display = document.querySelector('.display');
    let buttons = Array.from(document.querySelectorAll('.button'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerText === 'C') {
                display.innerText = '0';
            } else if (e.target.innerText === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                if (display.innerText === '0') {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
            }
        });
    });
});



