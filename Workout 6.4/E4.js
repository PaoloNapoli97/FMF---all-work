
let delay = Math.floor(Math.random() * (3000 - 1000) + 1000);

function MathRandom(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var value = Math.floor(Math.random() * (10 - 1) + 1);
            resolve(value)
        }, delay);
    }).then((value) => {
        // console.log(value);
        if (value > 5) {
            return Promise.reject(new Error("Numero superiore a 5"));
        }
        else {
            return Promise.resolve(value);
        }
    }).catch((error) => {
        throw new Error("Numero è maggiore di 5: ", error)
    }).then((value) => {
        return value;
    }).finally((value) => {
        // console.log("daje");
        return value;
    })
}


function GetPromises() {
    // MG. you like to live dangerously, don't you? :)
    const Promises = Array(10).fill().map((_, i) => MathRandom(delay));

    Promise.race(Promises)
        .then(value => console.log("First value is", value))
        .catch(error => console.error("Error", error));

        Promise.any(Promises).then(value => {
            console.log(value);
        }).catch(error => {
            console.error("Error", error);
        });

        Promise.all(Promises).then(values => {
            values.forEach(value => console.log(value));
          }).catch(error => {
            console.error("Error", error);
        });

        Promise.allSettled(Promises).then(results => {
            results.forEach(results => console.log(results));
        })
}

GetPromises();
