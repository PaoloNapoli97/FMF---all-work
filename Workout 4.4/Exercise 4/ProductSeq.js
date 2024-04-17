let seq = parseInt(prompt("Insert the sequence"));

function prodSeq(seq) {
    let n;
    let r = 1;
    for (let i = 0; i < seq; i++) {
        n = parseInt(prompt(`insert the ${i+1} number`));
        r *= n
    }
    return r;
}

console.log(prodSeq(seq));