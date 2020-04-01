const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //get user info
    const email = registerForm['inputEmail'].value;
    const password = registerForm['inputPassword'].value;

    console.log(email, password);
});