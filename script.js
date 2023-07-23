// const form = document.querySelector("form[name='contact-form']");
// const nameInput = document.querySelector("input[name='name']");
// const emailInput = document.querySelector("input[name='email']");
// const phoneInput = document.querySelector("input[name='phone']");
// const messageInput = document.querySelector("textarea[name='message']");

// nameInput.isValid = () => !!nameInput.value;
// emailInput.isValid = () => isValidEmail(emailInput.value);
// phoneInput.isValid = () => isValidPhone(phoneInput.value);
// messageInput.isValid = () => !!messageInput.value;

// const inputFields = [nameInput, emailInput, phoneInput, messageInput];

// const isValidEmail = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const isValidPhone = (phone) => {
//   const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//   return re.test(String(phone).toLowerCase());
// };

// let shouldValidate = false;
// let isFormValid = false;

// const validateInputs = () => {
//   console.log("we are here");
//   if (!shouldValidate) return;

//   isFormValid = true;
//   inputFields.forEach((input) => {
//     input.classList.remove("invalid");
//     input.nextElementSibling.classList.add("hide");

//     if (!input.isValid()) {
//       input.classList.add("invalid");
//       isFormValid = false;
//       input.nextElementSibling.classList.remove("hide");
//     }
//   });
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   shouldValidate = true;
//   validateInputs();
//   if (isFormValid) {
//     // TODO: DO AJAX REQUEST
//   }
// });

// inputFields.forEach((input) => input.addEventListener("input", validateInputs));


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === '') {
        setError(username, 'Name is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Invalid email address');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(messageValue === '') {
        setError(message, 'Message is required');
    } else {
        setSuccess(message);
    }
    

};