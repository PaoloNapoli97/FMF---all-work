function dotProduct() {
    let arrays = [];
    for (let i = 0; i < 2; i++) {
        let arrayStr = prompt(`Enter array ${i+1} (comma-separated):`);
        let array = arrayStr.split(',').map(Number).filter(num => num >= 2);
        arrays.push(array);       
        };
    const minLength = Math.min(...arrays.map(arr => arr.length));
    let result = new Array(minLength).fill(1);
    for (let i = 0; i < minLength; i++) {
        for (let arr of arrays) {
            result[i] *= arr[i];
        }
    }
    return result;
}
