document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-validation');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');

    function getErrorMessage(input) {
        const validity = input.validity;

        if (validity.valueMissing) {
            return 'This field is required.';
        }
        if (validity.typeMismatch && input.type === 'email') {
            return 'Please enter a valid email address.';
        }
        if (validity.patternMismatch && input.id === 'zip_code') {
            return 'Please enter a valid US zip code (e.g. 12345 or 12345-6789).';
        }
        if (validity.tooShort) {
            return `Password must be at least ${input.minLength} characters.`;
        }
        if (input.id === 'confirm_password' && input.value !== passwordInput.value) {
            return 'Passwords do not match.';
        }
        return '';
    }

    function validateInput(input, isFocused = true) {
        const formGroup = input.closest('.form-group');
        if (!formGroup) return;

        const errorSpan = formGroup.querySelector('.error-msg');
        if (!errorSpan) return;

        if (input.id === 'confirm_password' || input.id === 'password') {
            if (confirmPasswordInput.value && passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.setCustomValidity('Passwords do not match.');
            } else {
                confirmPasswordInput.setCustomValidity('');
            }
        }

        const errorMessage = getErrorMessage(input);

        if (!input.checkValidity() || errorMessage) {
            errorSpan.textContent = errorMessage;
            if (isFocused) {
                errorSpan.classList.add('active');
            } else {
                errorSpan.classList.remove('active');
            }
        } else {
            errorSpan.textContent = '';
            errorSpan.classList.remove('active');
        }
    }

    form.addEventListener('input', (e) => {
        if (e.target.matches('input, select')) {
            validateInput(e.target, true);
        }
    });

    form.addEventListener('focusout', (e) => {
        if (e.target.matches('input, select')) {
            validateInput(e.target, false);
        }
    });

    form.addEventListener('focusin', (e) => {
        if (e.target.matches('input, select')) {
            validateInput(e.target, true);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isFormValid = true;

        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            validateInput(input, false);
            if (!input.checkValidity()) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            alert(`
              🎉 High five! Your form was successfully submitted!
            `);
            const userInputs = Array.from(document.getElementsByClassName('user-input'));
            userInputs.forEach(element => console.log(`${element.name}: ${element.value}`));
            userInputs.forEach(userInput => userInput.value = '');
        } else {
            alert('Please fix the errors in the form before submitting.');
        }
    });
});