const API_URL = "https://jsonplaceholder.typicode.com/users";

function getUsers() {
  fetch(API_URL)
    .then(response => response.json())
    .then(users => {
      const list = document.getElementById('userList');
      list.innerHTML = "";
      users.forEach(user => {
        list.innerHTML += `
          <li>
            ${user.name} (${user.email}) 
            <button onclick="deleteUser(${user.id})">Delete</button>
            <button onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
          </li>
        `;
      });
    });
}

function addUser() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ name, email }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(newUser => {
      alert("User Added!");
      getUsers(); // refresh list
    });
}

function editUser(id, name, email) {
  const newName = prompt("Enter new name:", name);
  const newEmail = prompt("Enter new email:", email);

  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name: newName, email: newEmail }),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(updatedUser => {
      alert("User Updated!");
      getUsers();
    });
}

// 4. DELETE - Remove user
function deleteUser(id) {
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(() => {
      alert("User Deleted!");
      getUsers();
    });
}

// On page load
getUsers();