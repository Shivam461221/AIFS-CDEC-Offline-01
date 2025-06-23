const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    try {
        let response = await fetch(API_URL);
        let users = await response.json();
        let list = document.getElementById('userList');
        list.innerHTML = "";

        users.forEach(user => {
            list.innerHTML += `
            <li>
            ${user.name} (${user.email})
            <button onClick="deleteUser">Delete user</button>
            <button onClick="editUser">Edit user</button>
            </li>
            `
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    try {
        let response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({ name, email }),
            headers: { 'Content-Type': 'application/json' }
        });
        let users = await response.json();
        alert("User addded");
        getUsers()

        // let list = document.getElementById('userList');
        // list.innerHTML = "";

        // users.forEach(user => {
        //     list.innerHTML += `
        //     <li>
        //     ${user.name} (${user.email})
        //     <button onClick="deleteUser">Delete user</button>
        //     <button onClick="editUser">Edit user</button>
        //     </li>
        //     `
        // });
    }
    catch (error) {
        console.log(error);
    }
}

getUsers();