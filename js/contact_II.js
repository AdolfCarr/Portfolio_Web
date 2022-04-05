const nameinput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const subject = document.querySelector("#subject");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
const buttonStatus = document.getElementById("send__button");

// function checkName() {
    nameinput.addEventListener("keyup", (e) => {
    console.log("reading event on name field");
    const valueName = e.currentTarget.value;
    buttonStatus.disabled = false;
    errorNodes[0].innerText = "";
    nameinput.classList.remove("error-border");
    if (valueName.trim().length < 1) {
        buttonStatus.disabled = true;
        errorNodes[0].innerText = "Name cannot be blank";
        nameinput.classList.add("error-border");
        errorFlag = true;
    }
});

    email.addEventListener("keyup", (e) => {
    console.log("reading event on e-mail field");
    const valueEmail = e.currentTarget.value;
    buttonStatus.disabled = false;
    errorNodes[1].innerText = "";
    email.classList.remove("error-border");
    if (!emailIsValid(valueEmail)) {
        buttonStatus.disabled = true;
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
});

    subject.addEventListener("keyup", (e) => {
    console.log("reading event on subject field");
    const valueSubject = e.currentTarget.value;
    buttonStatus.disabled = false;
    errorNodes[2].innerText = "";
    subject.classList.remove("error-border");
    if (valueSubject.trim().length < 1) {
        buttonStatus.disabled = true;
        errorNodes[2].innerText = "Subject cannot be blank";
        subject.classList.add("error-border");
        errorFlag = true;
    }
});

    message.addEventListener("keyup", (e) => {
    console.log("reading event on subject field");
    const valueMessage = e.currentTarget.value;
    buttonStatus.disabled = false;
    errorNodes[3].innerText = "";
    message.classList.remove("error-border");
    if (valueMessage.trim().length < 1) {
        buttonStatus.disabled = true;
        errorNodes[3].innerText = "Please enter a message";
        message.classList.add("error-border");
        errorFlag = true;
    }
});

//validate data
function validateForm() {
    var errorFlag = false;
    clearMessages();

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
    if(errorFlag){
        buttonStatus.disabled = true;
        // errorFlag = false;
        // console.log("disabled");
    }
}
// //clear errors/ success messages
function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameinput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    subject.classList.remove("error-border");
}
//check if email is valid
function emailIsValid(email) {
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return pattern.test(email);
}
