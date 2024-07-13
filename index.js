// script.js
$(document).ready(function() {
    let expression = '';
    let lastInput = '';
    let decimalAdded = false;

    $('.btn').on('click', function() {
        const value = $(this).val();

        if (value === 'AC') {  
            expression = '';
            lastInput = '';
            decimalAdded = false;
        } else if (value === '=') {
            try {
                if (expression) {
                    expression = eval(expression).toString();
                }
                decimalAdded = expression.includes('.');
            } catch {
                expression = 'Error';
            }
        } else {
            if (value === '.' && decimalAdded) {
                return;
            } 
            if (value === '.' && !decimalAdded) {
                decimalAdded = true;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (['+', '-', '*', '/'].includes(lastInput)) {
                    return;
                }
                decimalAdded = false; // reset decimal flag after operator
            }

            if ((expression === '' && (value === '0' || value === '00'))) {
                return;
            }

            expression += value;
        }

        lastInput = value;
        $('.calculator-screen').val(expression);
    });
});


