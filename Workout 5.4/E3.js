function charFrequency(string) {
    let map = new Map();
    for (let i = 0; i < string.length; i++){
        if (map.has(string[i].toLowerCase())) {
            map.set(string[i], map.get(string[i].toLowerCase()) + 1)
        }
        else{
            map.set(string[i].toLowerCase(), 1)
        }
    }
    return map
}

console.table(charFrequency("Eni gas e Luce"));