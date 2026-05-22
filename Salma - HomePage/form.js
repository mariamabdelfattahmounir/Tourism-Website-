const signupForm = document.getElementById("signup");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

function clearMsg(elementId) {
    const msg = document.getElementById(elementId);
    if (msg) {
        msg.remove();
    }
}

username.addEventListener("keyup", function () {
    clearMsg("username-note");
    this.style.outline = "none";
});

email.addEventListener("keyup", function () {
    clearMsg("email-note");
    this.style.outline = "none";
});

password.addEventListener("keyup", function () {
    clearMsg("password-note");
    this.style.outline = "none";
});

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    let hasError = false;

    clearMsg("username-note");
    clearMsg("email-note");
    clearMsg("password-note");

    if (users.some(user => user.username === usernameValue)) {
        username.insertAdjacentHTML("afterend", "<p class='red-note' id='username-note'>*This username already exists!</p>");
        username.style.outline = "2px solid red";
        hasError = true;
    }

    if (users.some(user => user.email.toLowerCase() === emailValue.toLowerCase())) {
        email.insertAdjacentHTML("afterend", "<p class='red-note' id='email-note'>*This email already exists!</p>");
        email.style.outline = "2px solid red";
        hasError = true;
    }

    if (passwordValue.length < 5) {
        password.insertAdjacentHTML("afterend", "<p class='red-note' id='password-note'>*Password must be at least 5 characters!</p>");
        password.style.outline = "2px solid red";
        hasError = true;
    }

    if (!hasError) {
        const newUser = {
            username: usernameValue,
            email: emailValue,
            password: passwordValue,
            role: "user"
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful");
        window.location.href = "/welcome.html";
    }
});

const loginForm = document.getElementById("login");
const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailLogin.value.trim();
    const password = passwordLogin.value.trim();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const lockouts = JSON.parse(localStorage.getItem("lockouts")) || {};
    const currentTime = new Date().toISOString();

    clearMsg("login-note");

    if (lockouts[email] && lockouts[email].lockoutUntil && lockouts[email].lockoutUntil > currentTime) {
        emailLogin.insertAdjacentHTML("beforebegin", "<p class='red-note' id='login-note'>*Account is locked. Try again later.</p>");
        emailLogin.style.outline = "2px solid red";
        passwordLogin.style.outline = "2px solid red";
    } else {
        if (lockouts[email] && lockouts[email].lockoutUntil && lockouts[email].lockoutUntil <= currentTime) {
            delete lockouts[email];
        }

        const user = users.find(user => user.email === email);
        if (user && user.password === password) {
            delete lockouts[email];
            localStorage.setItem("lockouts", JSON.stringify(lockouts));
            sessionStorage.setItem("loggedInUser", JSON.stringify({ email: user.email, role: user.role }));
            alert("Login successful");
            window.location.href = "/welcome.html";
        } else {
            const attempts = (lockouts[email] ? lockouts[email].attempts : 0) + 1;
            let lockoutUntil = null;
            if (attempts >= 3) {
                lockoutUntil = new Date(Date.now() + 60 * 1000).toISOString();
            }
            lockouts[email] = { attempts, lockoutUntil };
            localStorage.setItem("lockouts", JSON.stringify(lockouts));
            emailLogin.insertAdjacentHTML("beforebegin", "<p class='red-note' id='login-note'>*Invalid email or password.</p>");
            emailLogin.style.outline = "2px solid red";
            passwordLogin.style.outline = "2px solid red";
        }
    }
});

emailLogin.addEventListener("keyup", function () {
    clearMsg("login-note");
    this.style.outline = "none";
    passwordLogin.style.outline = "none";
});

passwordLogin.addEventListener("keyup", function () {
    clearMsg("login-note");
    this.style.outline = "none";
    emailLogin.style.outline = "none";
});

function addAdmin(username, email, password) {
    if (typeof username !== 'string' || username.trim() === '') {
        console.error('Invalid username');
        return;
    }
    if (typeof email !== 'string' || email.trim() === '') {
        console.error('Invalid email');
        return;
    }
    if (password == null) {
        console.error('Password is required');
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.username === username.trim())) {
        console.error('Username already exists');
        return;
    }
    if (users.some(user => user.email.toLowerCase() === email.trim().toLowerCase())) {
        console.error('Email already exists');
        return;
    }

    const newAdmin = {
        username: username.trim(),
        email: email.trim(),
        password: String(password),
        role: "admin"
    };

    users.push(newAdmin);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(`Admin ${username} added successfully`);
}

addAdmin("j", "j@gmail.com", "12345");//we will add the admins manually like this 