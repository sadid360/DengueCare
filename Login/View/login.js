
/* 1. USERNAME OR EMAIL VALIDATION */

function checkUsername() {

    let username = document.getElementById("username").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username == "") {
        document.getElementById("username-error").innerHTML =
            "Username or Email is required.";
        return false;
    }
    else if (username.includes("@") && !emailPattern.test(username)) {
        document.getElementById("username-error").innerHTML =
            "Enter a valid email address.";
        return false;
    }
    else {
        document.getElementById("username-error").innerHTML = "";
        return true;
    }
}


/* 2. PASSWORD VALIDATION */

function checkPassword() {

    let password = document.getElementById("password").value;

    if (password == "") {
        document.getElementById("password-error").innerHTML =
            "Password is required.";
        return false;
    }
    else if (password.length < 6) {
        document.getElementById("password-error").innerHTML =
            "Password must contain at least 6 characters.";
        return false;
    }
    else {
        document.getElementById("password-error").innerHTML = "";
        return true;
    }
}


/* 3. ACCOUNT TYPE VALIDATION */

function checkRole() {

    let role = document.getElementById("role").value;

    if (role == "") {
        document.getElementById("role-error").innerHTML =
            "Please select your account type.";
        return false;
    }
    else {
        document.getElementById("role-error").innerHTML = "";
        return true;
    }
}


/* MAIN LOGIN VALIDATION */

function loginValidation() {

    let a = checkUsername();
    let b = checkPassword();
    let c = checkRole();

    if (a == true && b == true && c == true) {

        document.getElementById("login-message").innerHTML =
            "Login information is valid. Backend authentication is required.";

    }
    else {

        document.getElementById("login-message").innerHTML =
            "Please correct the errors shown above.";

    }

    return false;
}


/* CLEAR MESSAGES */

function clearLoginMessages() {

    document.getElementById("username-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("role-error").innerHTML = "";
    document.getElementById("login-message").innerHTML = "";

}
