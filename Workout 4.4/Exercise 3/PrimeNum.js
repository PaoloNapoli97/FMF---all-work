let num = parseInt(prompt("Insert a mumber"));

for (let i = 0; i < num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}