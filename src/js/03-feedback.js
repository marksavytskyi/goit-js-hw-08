let throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');

const emailRef = document.querySelector('input[name=email]');
const messageRef = document.querySelector('textarea[name=message]');


formRef.addEventListener('input', onInput);
formRef.addEventListener('submit', onSubmitForm);

let lastForm = {}

const getLastForm = JSON.parse(localStorage.getItem("feedback-form-state"))

if (localStorage.getItem("feedback-form-state")) {

    if (Object.keys(getLastForm).includes('email')) {
        emailRef.value = getLastForm.email
    }
    if (Object.keys(getLastForm).includes('message')) {
        messageRef.value = getLastForm.message
    }

}


function onInput(e) {
    const name = e.target.name
    const value = e.target.value

    lastForm[name] = value
    localStorage.setItem("feedback-form-state", JSON.stringify(lastForm))
}

function onSubmitForm(e) {
    e.preventDefault()

    if (localStorage.getItem("feedback-form-state")) {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state")
    formRef.reset()
    }
}
