let n = parseInt(prompt("Insert a number"));

function Fibonacci(n) {
        return n <= 1 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(n));