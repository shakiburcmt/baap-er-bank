// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {

    // step-2: get the email address inside the email input field
    // remember to use .value to get text from input field
    const emailField = document.getElementById('email');
    const email = emailField.value;

    // step:3 get password
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    // step-4: verify email and password
    if (email === 'shakib@gmail.com' && password === '123456') {
        console.log('valid user');
    }
    else {
        alert('hay hay vule giyechis!!!')
    }
})