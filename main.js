 function number(num1, num2) {
    if (num1 === 20 || num2 === 20 || num1 + num2 <= 20) {
        result = true;
    } else {
        result = '';
    }
    return result; 
}

console.log(number(8, 5));

