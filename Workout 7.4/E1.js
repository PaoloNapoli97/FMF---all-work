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

    static fromJSON(value) {
        if (typeof value === "string") {
            return JSON.parse(value);
        }
        else {
            const user = new User();

            Object.assign(user, value);
            user.date = new Date(value.date);
            return user;
        }
            return value;
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

    changeUsername() {
        this.username = NewUsername;
        this.getChangeLastUpdate.push("username");
    }

    changeName() {
        this.name = NewName;
        this.getChangeLastUpdate.push("name");
    }

    changeEmail() {
        this.email = NewEmail;
        this.getChangeLastUpdate.push("email");
    }

    changeDate() {
        this.date = new Date();
        this.getChangeLastUpdate.push("website");
    }

    changeAddress() {
        this.address = NewAddress;
        this.getChangeLastUpdate.push("address");
    }

    changePhone() {
        this.phone = NewPhone;
        this.getChangeLastUpdate.push("phone");
    }

    changeWebsite() {
        this.website = NewWebsite;
        this.getChangeLastUpdate.push("website");
    }

    changeCompany() {
        this.company = NewCompany;
        this.getChangeLastUpdate.push("company");
    }

    changelastUpdate = [];

    

    getChangeLastUpdate() {
        const change = {}
        for (let attribute of this.changelastUpdate) {
            change[attribute] = this[attribute];
        }
    }
}

let url = "https://jsonplaceholder.typicode.com/users";
let e = "errore"

class UserApi {
    urlUsers;
    constructor(urls) {
        if (!urls) throw new TypeError("Not a url");
        // else if (typeof urls === "string") 
        // {
            // if (!urls.protocol.startsWith("http")) throw new Error ("Not a http site");
            // if (!urls.protocol.endsWith("/")) urls += "/";
        //     try {
        //         urls = URL(urls)
        //     }
        //     catch (e) {
        //         throw new TypeError("invalid URL");
        //     }
        // }
        this.urlUsers = urls;
    }

    static async GetUser(id) {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: "GET",
            });
            const data = await response.json();
            const userData = User.fromJSON(data);
            return userData;
        }
        catch(e) {
           console.error(e);
        }
    }

    static async PostUser(newUser) {
        try {
            const response = await fetch(`${url}/`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(newUser),
            });
            const data = response.json();
            return data;
            
        } catch (e) {
            console.error(e);
        }
    }

    async PutUser() {

        const newUrl = `${url}${id}`;
        try {
            const response = await fetch(newUrl, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(user.getChangeLastUpdate())
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (e) {
            console.error(e);
        }
    }

    async PatchUser(newUser2) {
        const response = await fetch(`${url}/${newUser2.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newUser2)
        });
        const data = response.json();
        console.log("new", data);
        return data;
    }

    async DeleteUser(id) {
        const response = await fetch(`${url}/${id}`, { // ????
            method: 'DELETE',
        })
        return response;
    }
}

function getFunct() {
    let api = new UserApi("https://jsonplaceholder.typicode.com/users")
    UserApi.GetUser(2).then(console.log);
    const newUser = new User(
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
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    )
    const newUser2 = new User(
        5,
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
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    )
    UserApi.PostUser(newUser).then(console.log);
    api.PutUser(6, "Marcopolo", "Marco Polo", "marcopolo@polo.it", "2012-10-10T14:48:00.000+09:00", "via firenze 43", "333-333-333", "Sdrogolox str");
}

getFunct()