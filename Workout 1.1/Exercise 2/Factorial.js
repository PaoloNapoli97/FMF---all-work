let n = parseInt(prompt("Insert a number"));
let factorial = n;

if(n==0 || n==1){
   factorial = 1;
}
else{
    while(n > 1){
        n = n - 1;
        factorial *= n;
    }
}
console.log(factorial);