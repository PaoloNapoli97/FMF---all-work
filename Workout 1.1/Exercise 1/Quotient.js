var a = parseInt(prompt("Insert the dividend"));
var d = parseInt(prompt("Insert the divider"));

let q = 0;

while(a >= d){
  a = a - d;
  q++;
}


console.log("The quotient is", q);
console.log("The rest is", a);