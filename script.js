function togglePasswordVisibility() {
    const passwordInput = document.querySelector('.password-input');
    const showPasswordIcon = document.querySelector('.show-password-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordIcon.src = 'assets/hide.svg'; // Change to a "hide" icon if available
    } else {
        passwordInput.type = 'password';
        showPasswordIcon.src = 'assets/show.svg'; // Change back to the "show" icon
    }
}