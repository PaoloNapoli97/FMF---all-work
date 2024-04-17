function Main() {
    let string = prompt("Insert a string");

    let count = string.trim().split(" ").length;
    console.log("String lenght: " + string.length)
    console.log("Words: " + count);

    for (let i = 0; i < 10; i++) {
        console.log(string);        
    }
}

Main()