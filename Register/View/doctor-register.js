
function checkName() {
    let name = document.getElementById("fullname").value.trim();

    if (!/^[A-Za-z ]+$/.test(name) || name.length < 3) {
        document.getElementById("name-error").innerHTML = "Enter a valid name (minimum 3 letters).";
        return false;
    }

    document.getElementById("name-error").innerHTML = "";
    return true;
}

function checkGender() {
    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {
        document.getElementById("gender-error").innerHTML = "Select your gender.";
        return false;
    }

    document.getElementById("gender-error").innerHTML = "";
    return true;
}

function checkDOB() {
    let dob = document.getElementById("dob").value;
    let today = new Date();
    let birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();

    if (dob == "" || age < 18 ||
        (age == 18 && today < new Date(today.getFullYear(),
        birth.getMonth(), birth.getDate()))) {
        document.getElementById("dob-error").innerHTML = "Doctor must be at least 18 years old.";
        return false;
    }

    document.getElementById("dob-error").innerHTML = "";
    return true;
}

function checkPhone() {
    let phone = document.getElementById("phone").value.trim();

    if (!/^01[3-9][0-9]{8}$/.test(phone)) {
        document.getElementById("phone-error").innerHTML = "Enter a valid 11-digit phone number.";
        return false;
    }

    document.getElementById("phone-error").innerHTML = "";
    return true;
}

function checkAddress() {
    let address = document.getElementById("address").value.trim();

    if (address.length < 8) {
        document.getElementById("address-error").innerHTML = "Enter your address.";
        return false;
    }

    document.getElementById("address-error").innerHTML = "";
    return true;
}

function checkDegree() {
    let degree = document.getElementById("degree").value;

    if (degree == "") {
        document.getElementById("degree-error").innerHTML = "Select your degree.";
        return false;
    }

    document.getElementById("degree-error").innerHTML = "";
    return true;
}

function checkSpecialization() {
    let specialization = document.getElementById("specialization").value.trim();

    if (specialization == "") {
        document.getElementById("specialization-error").innerHTML = "Enter your specialization.";
        return false;
    }

    document.getElementById("specialization-error").innerHTML = "";
    return true;
}

function checkBMDC() {
    let bmdc = document.getElementById("bmdc").value.trim();

    if (!/^[A-Za-z0-9/-]{4,20}$/.test(bmdc)) {
        document.getElementById("bmdc-error").innerHTML = "Enter a valid BMDC number.";
        return false;
    }

    document.getElementById("bmdc-error").innerHTML = "";
    return true;
}

function checkExperience() {
    let experience = document.getElementById("experience").value;

    if (experience == "" || experience < 0) {
        document.getElementById("experience-error").innerHTML = "Enter valid experience.";
        return false;
    }

    document.getElementById("experience-error").innerHTML = "";
    return true;
}

function checkInstitution() {
    let institution = document.getElementById("institution").value.trim();

    if (institution == "") {
        document.getElementById("institution-error").innerHTML = "Enter your institution.";
        return false;
    }

    document.getElementById("institution-error").innerHTML = "";
    return true;
}

function checkWorkplace() {
    let workplace = document.getElementById("workplace").value.trim();

    if (workplace == "") {
        document.getElementById("workplace-error").innerHTML = "Enter your workplace.";
        return false;
    }

    document.getElementById("workplace-error").innerHTML = "";
    return true;
}

function checkChamber() {
    let chamber = document.getElementById("chamber").value.trim();

    if (chamber == "") {
        document.getElementById("chamber-error").innerHTML = "Enter your chamber address.";
        return false;
    }

    document.getElementById("chamber-error").innerHTML = "";
    return true;
}

function checkConsultation() {
    let consultation = document.getElementById("consultation").value;

    if (consultation == "") {
        document.getElementById("consultation-error").innerHTML = "Select consultation type.";
        return false;
    }

    document.getElementById("consultation-error").innerHTML = "";
    return true;
}

function checkDays() {
    let days = document.getElementById("days").value.trim();

    if (days == "") {
        document.getElementById("days-error").innerHTML = "Enter available days.";
        return false;
    }

    document.getElementById("days-error").innerHTML = "";
    return true;
}

function checkHours() {
    let hours = document.getElementById("hours").value.trim();

    if (hours == "") {
        document.getElementById("hours-error").innerHTML = "Enter available hours.";
        return false;
    }

    document.getElementById("hours-error").innerHTML = "";
    return true;
}

function checkUsername() {
    let username = document.getElementById("username").value.trim();

    if (username.length < 4) {
        document.getElementById("username-error").innerHTML = "Username must contain at least 4 characters.";
        return false;
    }

    document.getElementById("username-error").innerHTML = "";
    return true;
}

function checkPassword() {
    let password = document.getElementById("password").value;

    if (password.length < 8 ||
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/[0-9]/.test(password)) {
        document.getElementById("password-error").innerHTML =
            "Password needs 8 characters, uppercase, lowercase and a number.";
        return false;
    }

    document.getElementById("password-error").innerHTML = "";
    return true;
}

function checkDeclaration() {
    let declaration = document.getElementById("declaration").checked;

    if (declaration == false) {
        document.getElementById("declaration-error").innerHTML = "Please accept the declaration.";
        return false;
    }

    document.getElementById("declaration-error").innerHTML = "";
    return true;
}


// MAIN FORM VALIDATION
function doctorValidation() {

    let a = checkName();
    let b = checkGender();
    let c = checkDOB();
    let d = checkPhone();
    let e = checkAddress();
    let f = checkDegree();
    let g = checkSpecialization();
    let h = checkBMDC();
    let i = checkExperience();
    let j = checkInstitution();
    let k = checkWorkplace();
    let l = checkChamber();
    let m = checkConsultation();
    let n = checkDays();
    let o = checkHours();
    let p = checkUsername();
    let q = checkPassword();
    let r = checkDeclaration();

    if (a && b && c && d && e && f && g && h && i &&
        j && k && l && m && n && o && p && q && r) {

        document.getElementById("doctor-message").innerHTML =
            "Registration Successful!";

    } else {
        document.getElementById("doctor-message").innerHTML =
            "Please correct the errors above.";
    }

    return false;
}


// CLEAR MESSAGES
function clearDoctorMessages() {
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("gender-error").innerHTML = "";
    document.getElementById("dob-error").innerHTML = "";
    document.getElementById("phone-error").innerHTML = "";
    document.getElementById("address-error").innerHTML = "";
    document.getElementById("degree-error").innerHTML = "";
    document.getElementById("specialization-error").innerHTML = "";
    document.getElementById("bmdc-error").innerHTML = "";
    document.getElementById("experience-error").innerHTML = "";
    document.getElementById("institution-error").innerHTML = "";
    document.getElementById("workplace-error").innerHTML = "";
    document.getElementById("chamber-error").innerHTML = "";
    document.getElementById("consultation-error").innerHTML = "";
    document.getElementById("days-error").innerHTML = "";
    document.getElementById("hours-error").innerHTML = "";
    document.getElementById("username-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("declaration-error").innerHTML = "";
    document.getElementById("doctor-message").innerHTML = "";
}
