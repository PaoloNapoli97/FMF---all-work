let a = parseInt(prompt("insert a number"));
let b = parseInt(prompt("insert a number"));
let operator = prompt("Insert a operation");

function operation(a, b, operator) {

    switch (operator) {
        case '+':
            return sum = a+b;

        case '-':
            return subtract = a-b;
        
        case "*":
            return moltiplication = a*b;

        case "/":
            return division = a/b;

        case "**":
            return esponential = a**b;
        
        case "GDC":
        if (a == 0)
            return b;
    
        while (b != 0) {
            if (a > b)
                a = a - b;
            else
                b = b - a;
        }
            return a;

        default:
            break;
    }
}

console.log(operation(a, b, operator));