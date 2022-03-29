const nameinput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const subject = document.querySelector("#subject");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
//validate data
function validateForm() {

    clearMessages();
    let errorFlag = false;

    if (nameinput.value.trim().length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameinput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (subject.value.trim().length < 1) {
        errorNodes[2].innerText = "Subject cannot be blank";
        subject.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.trim().length < 1) {
        errorNodes[3].innerText = "Please enter a message";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if (!errorFlag) {
        success.innerText = nameinput.value + " your message has been send on success!"
    }
}
//clear errors/ success messages
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameinput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}
//check if email is valid
function emailIsValid(email) {
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return pattern.test(email);
}