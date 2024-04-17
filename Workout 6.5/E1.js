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

    changeUsername() {
        this.username = NewUsername;
    }

    changeName() {
        this.name = NewName;
    }

    changeEmail() {
        this.email = NewEmail;
    }

    changeDate() {
        this.date = NewDate;
    }

    changeAddress() {
        this.address = NewAddress;
    }

    changePhone() {
        this.phone = NewPhone;
    }

    changeWebsite() {
        this.website = NewWebsite;
    }

    changeCompany() {
        this.company = NewCompany;
    }
}

let url = "https://jsonplaceholder.typicode.com/users";

class UserApi {
    urlUsers;
    constructor(urlUsers){
        this.urlUsers = urlUsers
    }

    static GetUser(id) {
        return fetch(`${url}/${id}`)
        .then((response) => response.json())
        .then((response) => User.fromJson(response))
        .then((response) => console.log(response));
    }

    static PostUser(newUser) {
        return fetch (`${url}/`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newUser),
        }).then((response) => response.json())
        .then((json) => console.log(json));
    }

    PutUser() {
        return fetch (`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                username : NewUsername,
                name: NewName,
                email: NewEmail,
                date: NewDate,
                address: NewAddress,
                phone: NewPhone,
                company: NewCompany,
            })
        }).then((response) => response.json())
        .then((json) => console.log(json));;
    }

    PatchUser() {
        return fetch (`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                id: NewId,
                username : NewUsername,
                name: NewName,
                email: NewEmail,
                date: NewDate,
                address: NewAddress,
                phone: NewPhone,
                company: NewCompany,
            })
        }).then((response) => response.json())
        .then((json) => console.log(json));
    }

    DeleteUser(id) {
        return fetch (`${url}/${id}`, {
            method: 'DELETE',
        })
    }
}

const getuser = UserApi.GetUser(2);
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
const createuser = UserApi.PostUser(newUser);
 


// const json = JSON.stringify(user);
// console.log(json);
// const deserializedUser = User.fromJson(json);
// console.log(deserializedUser instanceof User);