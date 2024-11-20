
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






// function calculate (num, num2, operation ) {
//     let result;
//     if(operation === '+'){
//       result=num+num2;
//     }
//     else if(operation === '-'){
//       result=num-num2;
//     }
//    else if(operation === '*'){
//       result=num*num2;
//     }
//     else if(operation === '/'){
//       if(num2!==0){
//         result=num/num2;
//       }
//       else {
//           return("Санды нолго болгонго болбойт");  
//       }
//     }
//    else{
//     return'туура эмeс оператор'
//    }
//    return result
//     }
// console.log(calculate(9,4, '-'));
// console.log(calculate(9,4, '+'));
// console.log(calculate(9,4, '*'));
// console.log(calculate(9,3, 'b'));
// console.log(calculate(9,0, '/'));


// const num1= parseFloat(prompt("Санды жаз"));
// const operation =prompt("Опреатор жазыныз");
// const num2= parseFloat(prompt("дагы санды жаз"));
// let result;

// switch (operation) {
//     case "+":
//         result =num1+num2;
//         break;
//     case "-":
//         result =num1+num2;
//         break;
//     case "*":
//         result =num1+num2;
//         break;
//     case "/":
//         result =num1+num2;
//         break;
//     case "<":
//         result =num1<num2;
//         break;
//     case ">":
//         result =num1>num2;
//         break;
//     case ">":
//         result =num1>num2;
//         break;
//     default:
//         alert("Туура эмес оператор")
//        result=null;
// };
 
// if(result !==null){
//     alert("Резултать" +  result);
// }
