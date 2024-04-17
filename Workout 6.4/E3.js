class User {
    id;
    username;
    name;
    email;
    date;
    address;
    phone;
    website;
    company;

    static fromJson(value) {
        if (typeof value === "string") {
            value = JSON.parse(value);
        }
        if (value instanceof User) {
            return value;
        }
        else {
            const user = new User();

            Object.assign(user, value);
            user.date = new Date(value.date);
            return user;
        }
    }

    constructor(id, username, name, email, date, address, phone, website, company) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.date = new Date();
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }

    toJSON() {
        return {
            "id": this.id,
            "username": this.username,
            "name": this.name,
            "email": this.email,
            "date": this.date,
            "address": this.address,
            "phone": this.phone,
            "website": this.website,
            "company": this.company,
        }
    }
}

const user = new User(
    1,
    "Bret",
    "Leanne Graham",
    "Sincere@april.biz",
    "2011-10-10T14:48:00.000+09:00",
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            "lat": "-37.3159",
            "lng": "81.1496"
        },
    },
    "1-770-736-8031 x56442",
    "hildegard.org",
    {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
)

function MakeAPromise() {
    return new Promise((resolve, reject) => {
        let delay = Math.random() * (1000 - 50) + 50;
        setTimeout(() => {
            var value = JSON.stringify(user);
            let chance = Math.random() * (100 - 1) +1;
            if (chance < 30) {
                return Promise.reject(new Error("Unlucky try again"));
            }
            resolve(value);
        }, delay);
    }).then((value) => {
        const obj = JSON.parse(value);
        return obj;
    }).then((obj) => {
        const user = User.fromJson(obj);
        return user;
    })
    .then((value) => {
        console.log(value);
    }).catch((error) =>{
        throw new Error("ahahahahahah", error);
    }).finally((value) => {return value})
}

MakeAPromise();