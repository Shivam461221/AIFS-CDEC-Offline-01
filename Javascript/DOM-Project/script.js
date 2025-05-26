
function signUp(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('All fields required');
        return;
    }

    let user = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = user.find(element => element.email === email);
    if (existingUser) {
        alert('user already exist');
        return;
    }

    let newUser = { username, email, password };

    user.push(newUser);
    localStorage.setItem("users", JSON.stringify(user));
    alert('User created');
    window.location.href = 'login.html'
}

function login(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('All fields required');
        return;
    }
    let user = JSON.parse(localStorage.getItem("users")) || [];

    let foundUser = user.find(element => element.email === email && element.password === password);
    if (foundUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
        alert('Login Successful');
        window.location.href = 'dashboard.html'
    }
    else {
        alert('Email or Password not matched');
    }
}