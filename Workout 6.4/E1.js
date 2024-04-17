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

    // MG. JSON should capitalized --> toJSON and fromJSON
    static fromJson(value) {
        console.log("user");
        if (typeof value === "string") {
            // MG. you're never returning this value, but you should return a new User instance
            //   thus, you should continue with the code below
            //   and remove the else statement
            //   I know you got confused because you saw the else statement in my snippet.
            //   I'll just explain that again in the next lesson.
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

const json = JSON.stringify(user);
console.log(json);
const deserializedUser = User.fromJson(json);
console.log(deserializedUser instanceof User);


