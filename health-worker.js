
function nameCheck() {

    let nametext = document.getElementById("fullname").value.trim();
let namePattern = /^(?=.*[A-Za-z])[A-Za-z. ]+$/;
    if (nametext == "" || nametext.length < 5) {
        document.getElementById("nameerror").innerHTML =
            "Name must contain at least 5 characters";
        return false;
    }
    else if (!namePattern.test(nametext)) {
        document.getElementById("nameerror").innerHTML =
            "Name should contain only letters, spaces and dots";
        return false;
    }
    else {
        document.getElementById("nameerror").innerHTML = "";
        return true;
    }
}


function genderCheck() {

    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    if (male == false && female == false && other == false) {
        document.getElementById("gendererror").innerHTML =
            "Please select your gender";
        return false;
    }
    else {
        document.getElementById("gendererror").innerHTML = "";
        return true;
    }
}


function emailCheck() {

    let emailtext = document.getElementById("email").value;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailtext == "") {
        document.getElementById("emailerror").innerHTML =
            "Email cannot be empty";
        return false;
    }
    else if (!emailPattern.test(emailtext)) {
        document.getElementById("emailerror").innerHTML =
            "Enter a valid email address";
        return false;
    }
    else {
        document.getElementById("emailerror").innerHTML = "";
        return true;
    }
}


function phoneCheck() {

    let phonetext = document.getElementById("phone").value;
    let phonePattern = /^01[3-9][0-9]{8}$/;

    if (phonetext == "") {
        document.getElementById("phoneerror").innerHTML =
            "Phone number cannot be empty";
        return false;
    }
    else if (!phonePattern.test(phonetext)) {
        document.getElementById("phoneerror").innerHTML =
            "Enter a valid 11-digit phone number";
        return false;
    }
    else {
        document.getElementById("phoneerror").innerHTML = "";
        return true;
    }
}


function designationCheck() {

    let desigtext = document.getElementById("designation").value;

    if (desigtext == "") {
        document.getElementById("designationerror").innerHTML =
            "Please select your designation";
        return false;
    }
    else {
        document.getElementById("designationerror").innerHTML = "";
        return true;
    }
}


function organizationCheck() {

    let orgtext = document.getElementById("organization").value.trim();
    let orgPattern = /^(?=.*[A-Za-z])[A-Za-z .&'-]+$/;

    if (orgtext == "") {
        document.getElementById("organizationerror").innerHTML =
            "Organization name cannot be empty";
        return false;
    }
    else if (!orgPattern.test(orgtext)) {
        document.getElementById("organizationerror").innerHTML =
            "Enter a valid organization name";
        return false;
    }
    else {
        document.getElementById("organizationerror").innerHTML = "";
        return true;
    }
}


function workeridCheck() {

    let idtext = document.getElementById("workerid").value;

    if (idtext == "") {
        document.getElementById("workeriderror").innerHTML =
            "Employee ID cannot be empty";
        return false;
    }
    else {
        document.getElementById("workeriderror").innerHTML = "";
        return true;
    }
}


function educationCheck() {

    let edutext = document.getElementById("education").value.trim();
    let eduPattern = /^(?=.*[A-Za-z])[A-Za-z .&'-]+$/;

    if (edutext == "") {
        document.getElementById("educationerror").innerHTML =
            "Education or training cannot be empty";
        return false;
    }
    else if (!eduPattern.test(edutext)) {
        document.getElementById("educationerror").innerHTML =
            "Enter a valid education or training name";
        return false;
    }
    else {
        document.getElementById("educationerror").innerHTML = "";
        return true;
    }
}


function experienceCheck() {

    let exptext = document.getElementById("experience").value;

    if (exptext == "" || exptext < 0 || exptext > 50) {
        document.getElementById("experienceerror").innerHTML =
            "Experience must be between 0 and 50 years";
        return false;
    }
    else {
        document.getElementById("experienceerror").innerHTML = "";
        return true;
    }
}


function divisionCheck() {

    let divtext = document.getElementById("division").value;

    if (divtext == "") {
        document.getElementById("divisionerror").innerHTML =
            "Please select your division";
        return false;
    }
    else {
        document.getElementById("divisionerror").innerHTML = "";
        return true;
    }
}


function districtCheck() {

    let disttext = document.getElementById("district").value;
    let distPattern = /^[A-Za-z ]+$/;

    if (disttext == "") {
        document.getElementById("districterror").innerHTML =
            "District cannot be empty";
        return false;
    }
    else if (!distPattern.test(disttext)) {
        document.getElementById("districterror").innerHTML =
            "District should contain only letters";
        return false;
    }
    else {
        document.getElementById("districterror").innerHTML = "";
        return true;
    }
}


function areaCheck() {

    let areatext = document.getElementById("area").value;

    if (areatext == "") {
        document.getElementById("areaerror").innerHTML =
            "Area cannot be empty";
        return false;
    }
    else {
        document.getElementById("areaerror").innerHTML = "";
        return true;
    }
}


function usernameCheck() {

    let usertext = document.getElementById("username").value;
    let userPattern = /^(?=.*[A-Za-z])[A-Za-z0-9_]+$/;

    if (usertext == "" || usertext.length < 4) {
        document.getElementById("usernameerror").innerHTML =
            "Username must contain at least 4 characters";
        return false;
    }
    else if (!userPattern.test(usertext)) {
        document.getElementById("usernameerror").innerHTML =
            "Username must contain at least one letter";
        return false;
    }
    else {
        document.getElementById("usernameerror").innerHTML = "";
        return true;
    }
}


function passwordCheck() {

    let passtext = document.getElementById("password").value;

    let upperPattern = /[A-Z]/;
    let lowerPattern = /[a-z]/;
    let numberPattern = /[0-9]/;
    let specialPattern = /[!@#$%^&*]/;

    if (passtext.length < 7) {
        document.getElementById("passworderror").innerHTML =
            "Password must contain at least 8 characters";
        return false;
    }
    else if (!upperPattern.test(passtext)) {
        document.getElementById("passworderror").innerHTML =
            "Password must contain an uppercase letter";
        return false;
    }
    else if (!lowerPattern.test(passtext)) {
        document.getElementById("passworderror").innerHTML =
            "Password must contain a lowercase letter";
        return false;
    }
    else if (!numberPattern.test(passtext)) {
        document.getElementById("passworderror").innerHTML =
            "Password must contain at least one number";
        return false;
    }
    else if (!specialPattern.test(passtext)) {
        document.getElementById("passworderror").innerHTML =
            "Password must contain a special character";
        return false;
    }
    else {
        document.getElementById("passworderror").innerHTML = "";
        return true;
    }
}


function confirmCheck() {

    let passtext = document.getElementById("password").value;
    let confirmtext = document.getElementById("confirm").value;

    if (confirmtext == "") {
        document.getElementById("confirmerror").innerHTML =
            "Please confirm your password";
        return false;
    }
    else if (passtext != confirmtext) {
        document.getElementById("confirmerror").innerHTML =
            "Passwords do not match";
        return false;
    }
    else {
        document.getElementById("confirmerror").innerHTML = "";
        return true;
    }
}


function questionCheck() {

    let questiontext = document.getElementById("question").value;

    if (questiontext == "") {
        document.getElementById("questionerror").innerHTML =
            "Please select a security question";
        return false;
    }
    else {
        document.getElementById("questionerror").innerHTML = "";
        return true;
    }
}


function answerCheck() {

    let answertext = document.getElementById("answer").value;

    if (answertext == "") {
        document.getElementById("answererror").innerHTML =
            "Security answer cannot be empty";
        return false;
    }
    else {
        document.getElementById("answererror").innerHTML = "";
        return true;
    }
}


function agreeCheck() {

    let a = document.getElementById("agree1").checked;
    let b = document.getElementById("agree2").checked;
    let c = document.getElementById("agree3").checked;

    if (a == false || b == false || c == false) {
        document.getElementById("agreeerror").innerHTML =
            "Please accept all confirmation statements";
        return false;
    }
    else {
        document.getElementById("agreeerror").innerHTML = "";
        return true;
    }
}


function myVal() {

    let a = nameCheck();
    let b = genderCheck();
    let c = emailCheck();
    let d = phoneCheck();
    let e = designationCheck();
    let f = organizationCheck();
    let g = workeridCheck();
    let h = educationCheck();
    let i = experienceCheck();
    let j = divisionCheck();
    let k = districtCheck();
    let l = areaCheck();
    let m = usernameCheck();
    let n = passwordCheck();
    let o = confirmCheck();
    let p = questionCheck();
    let q = answerCheck();
    let r = agreeCheck();

    if (a == true && b == true && c == true && d == true &&
        e == true && f == true && g == true && h == true &&
        i == true && j == true && k == true && l == true &&
        m == true && n == true && o == true && p == true &&
        q == true && r == true) {

        alert("Registration Successful!");

        return false;
    }
    else {
        return false;
    }
}


function clearMessages() {

    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("gendererror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("phoneerror").innerHTML = "";
    document.getElementById("designationerror").innerHTML = "";
    document.getElementById("organizationerror").innerHTML = "";
    document.getElementById("workeriderror").innerHTML = "";
    document.getElementById("educationerror").innerHTML = "";
    document.getElementById("experienceerror").innerHTML = "";
    document.getElementById("divisionerror").innerHTML = "";
    document.getElementById("districterror").innerHTML = "";
    document.getElementById("areaerror").innerHTML = "";
    document.getElementById("usernameerror").innerHTML = "";
    document.getElementById("passworderror").innerHTML = "";
    document.getElementById("confirmerror").innerHTML = "";
    document.getElementById("questionerror").innerHTML = "";
    document.getElementById("answererror").innerHTML = "";
    document.getElementById("agreeerror").innerHTML = "";
    document.getElementById("success").innerHTML = "";

}
