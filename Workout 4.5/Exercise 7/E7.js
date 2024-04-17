function Main() {
    let string = prompt("Insert a string");

    let replace = string.replace(/ciao|daje|rosso|bianco/gi, "CHEESE");
    console.log("New String: " + replace);
}

Main()