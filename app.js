
function calculate(a, b, operation) {
    let result;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result =  a / b ; 
            break;
        default:
            result = " Туура эмес операция!";
    }

    console.log(`${a} ${operation} ${b} = ${result} `);
}


calculate(5, 3, '+');
calculate(8, 3, '-');
calculate(12, 3, '*');
calculate(21, 3, '/');
calculate(21, 3, '^');