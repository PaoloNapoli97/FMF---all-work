let delay = 1000;

function MathRandom(delay) {
    const randomNumber = new Promise((resolve, reject) => {
        setTimeout(() => {
            var value = Math.floor(Math.random() * (10 - 1) + 1);
            resolve(value)
        }, delay);
    }).then((value) => {
        console.log(value);
        if (value > 5) {
            throw new Error("Numero superiore a 5");
        }
        return value
    }).catch((error) => {
        console.error("Error", error);
        return 0;
    }).then((value) => {
        console.log(value);
    }).finally(() => {
        console.log("daje");
    })
}

MathRandom(delay);