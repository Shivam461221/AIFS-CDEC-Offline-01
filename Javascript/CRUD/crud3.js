const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
    try {
        let response = await fetch(API_URL);
        let users = await response.json();
        console.log(users);
        let userList = document.getElementById('userList');
        userList.innerHTML = "";
        users.forEach(user => {
            userList.innerHTML += `
            <li>${user.name} 
            <button onclick="deleteUser(${user.id})" >Delete</button>
            <button onclick="editUser(${user.id}, '${user.name}', '${user.email}' )" >Edit</button></li>
            `
        });
    }
    catch (error) {
        console.log(error.message);
    }
}

getUsers();

async function addUser() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    try {
        let response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({ name, email }),
            headers: { 'Content-Type': 'application/json' }
        });
        // let data = response.json();
        console.log(response);
        if (response) alert('user added');
        getUsers();
    }
    catch (error) {
        console.log(error.message);
    }
}

async function deleteUser(id) {
    try {
        let response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        console.log(response);
        if (response) alert('User deleted');

        getUsers();
    }
    catch (error) {
        console.log(error.message);
    }
}

async function editUser(id, name, email) {
    let newName = prompt('Enter new name', name);
    let newEmail = prompt('Enter new mail', email)
    try {
        let response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: newName, email: newEmail }),
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(response);
        if (response) alert('User edited');
        getUsers();
    }
    catch (error) {
        console.log(error.message);
    }
}