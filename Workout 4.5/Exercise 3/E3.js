function Main() {
    let number = Number(prompt("Insert a number"));
    let text = number.toString().split("").reverse().join("");
    console.log(parseInt(text));
}

Main()