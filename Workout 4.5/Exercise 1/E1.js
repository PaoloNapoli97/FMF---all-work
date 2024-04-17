function Main() {
    let seq = parseInt(prompt("Insert array dimension"));

    console.log(SumAverage(seq));
}

function SumAverage(seq) {
    let averageCounter = 0;
    let sum = 0;
    let Number = 0;
    for (let i = 0; i < seq; i++) {
        Number = parseInt(prompt("Inser a number: "));
        sum += Number;
        averageCounter ++;
    }
    let average = sum/averageCounter
    return average;
}

Main();