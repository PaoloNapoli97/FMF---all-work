async function userPrint() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then((r) => r.json());

    console.table(users);
    console.log(Object.entries(users))
    const responseDiv = document.getElementById('response');
    for(let i = 0; i < users.length; i++) {
        const userDiv = document.createElement('p');
        const userData = document.createTextNode(`${users[i].id} ${users[i].name} ${users[i].username} ${users[i].email} ${users[i].address} ${users[i].phone} ${users[i].website} ${users[i].company}`);
        userDiv.appendChild(userData);
        responseDiv.appendChild(userDiv);
    }
}
window.addEventListener('load' , function() {
    userPrint();

    const submit = document.getElementById('submitButton');

    submit.addEventListener('click', function (dot) {
        dot.preventDefault();

        const form  = document.querySelector('#formSelect');
        if (!form) throw new Error('Form not found');

        const formdata = new FormData(form);
        const url = formdata.get('url');
        const method = formdata.get('method');
        const responseDiv = document.getElementById('response');

    })
})