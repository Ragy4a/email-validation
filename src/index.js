'use strict';

const email = document.getElementById('email');

function validateEmail() {
    let errorInformation = null;
    if (errorInformation) {
        errorInformation.remove();
    }
    errorInformation = document.createElement('p')
    const emailPattern = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;
    const deleteP = document.querySelector('.second-container > p');
    const passConf = document.getElementById('password-confirmation')
    if (!emailPattern.test(email.value)) {
        passConf.style.marginTop = '-1px';
        email.insertAdjacentElement('afterend', errorInformation)
        errorInformation.textContent = 'Email is not correct.';
    } else {
        passConf.style.marginTop = '20px';
        deleteP.remove()
    }
}

email.addEventListener('change', validateEmail);