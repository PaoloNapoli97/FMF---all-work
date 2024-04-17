function Main() {
    let array = [1, 2, , 3, , 4, 5, , 6, 7];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    array = array.filter(function(element) {
        return element !== undefined;
    })
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

Main()