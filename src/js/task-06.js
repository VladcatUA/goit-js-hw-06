const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener("blur", (event) => {
    if (inputValidation.value.length === Number.parseInt(inputValidation.getAttribute('data-length'))) {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
    }
});
