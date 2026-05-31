const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const nameMsg = document.querySelector("#nameMsg");
const emailMsg = document.querySelector("#emailMsg");
const passwordMsg = document.querySelector("#passwordMsg");
const confirmMsg = document.querySelector("#confirmMsg");
const phoneMsg = document.querySelector("#phoneMsg");

const strengthBar = document.querySelector("#strengthBar");
const submitBtn = document.querySelector("#submitBtn");

let nameValid = false;
let emailValid = false;
let passwordValid = false;
let confirmValid = false;
let phoneValid = false;

function checkForm() {
    submitBtn.disabled = !(
        nameValid &&
        emailValid &&
        passwordValid &&
        confirmValid &&
        phoneValid
    );
}

/* NAME */

nameInput.addEventListener("input", () => {

    if (
        nameInput.value.length >= 2 &&
        nameInput.value.length <= 50
    ) {
        nameMsg.textContent = "✔ Hợp lệ";
        nameMsg.style.color = "green";
        nameValid = true;
    } else {
        nameMsg.textContent = "Tên từ 2-50 ký tự";
        nameMsg.style.color = "red";
        nameValid = false;
    }

    checkForm();
});

/* EMAIL */

emailInput.addEventListener("input", () => {

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(emailInput.value)){
        emailMsg.textContent = "✔ Email hợp lệ";
        emailMsg.style.color = "green";
        emailValid = true;
    }
    else{
        emailMsg.textContent = "Email không hợp lệ";
        emailMsg.style.color = "red";
        emailValid = false;
    }

    checkForm();
});

/* PASSWORD */

passwordInput.addEventListener("input", () => {

    const pass = passwordInput.value;

    if(pass.length < 8){

        passwordMsg.textContent = "Yếu";
        passwordMsg.style.color = "red";

        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";

        passwordValid = false;
    }

    else if(
        /[a-zA-Z]/.test(pass) &&
        /\d/.test(pass)
    ){

        passwordMsg.textContent = "Trung bình";
        passwordMsg.style.color = "orange";

        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";

        passwordValid = true;
    }

    if(
        pass.length >= 8 &&
        /[a-z]/.test(pass) &&
        /[A-Z]/.test(pass) &&
        /\d/.test(pass) &&
        /[^A-Za-z0-9]/.test(pass)
    ){

        passwordMsg.textContent = "Mạnh";
        passwordMsg.style.color = "green";

        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";

        passwordValid = true;
    }

    checkForm();
});

/* CONFIRM */

confirmInput.addEventListener("input", () => {

    if(confirmInput.value === passwordInput.value){

        confirmMsg.textContent = "✔ Khớp mật khẩu";
        confirmMsg.style.color = "green";

        confirmValid = true;
    }
    else{

        confirmMsg.textContent = "✖ Không khớp";
        confirmMsg.style.color = "red";

        confirmValid = false;
    }

    checkForm();
});

/* PHONE */

phoneInput.addEventListener("input", () => {

    let value =
    phoneInput.value.replace(/\D/g,"");

    if(value.length > 4){
        value =
        value.slice(0,4) +
        "-" +
        value.slice(4);
    }

    if(value.length > 8){
        value =
        value.slice(0,8) +
        "-" +
        value.slice(8);
    }

    phoneInput.value = value;

    if(value.replace(/-/g,"").length === 10){

        phoneMsg.textContent = "✔ Hợp lệ";
        phoneMsg.style.color = "green";

        phoneValid = true;
    }
    else{

        phoneMsg.textContent = "SĐT phải có 10 số";
        phoneMsg.style.color = "red";

        phoneValid = false;
    }

    checkForm();
});

/* SUBMIT */

document
.querySelector("#registerForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
        "Đăng ký thành công!\n\n" +
        "Tên: " + nameInput.value +
        "\nEmail: " + emailInput.value +
        "\nPhone: " + phoneInput.value
    );
});