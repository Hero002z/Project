function validation(form) {
    function removeError(input) {
        const parent = input.parentNode;
        if(parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }
    }
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');
        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        parent.classList.add('error');
        parent.append(errorLabel);
    }
    let result = true;
    form.querySelectorAll('input').forEach(input => {
        removeError(input);
        if(input.dataset.minLength) {
            if(input.value.length < input.dataset.minLength) {
                removeError(input);
                createError(input, `Minimum number of characters: ${input.dataset.minLength}`);
                result = false;
            }
        }
        if(input.dataset.maxLength) {
            if(input.value.length > input.dataset.maxLength) {
                removeError(input);
                createError(input, `Maximum number of characters: ${input.dataset.maxLength}`);
                result = false;
            }
        }
        if(input.value=="") {
            removeError(input);
            createError(input, 'Please, fill in this field');
            result = false;
        }
    })
    return result;
}

document.getElementById('add').addEventListener('submit', function(event) {
    event.preventDefault();

    if(validation(this) == true) {
        alert('Thank you for question!'); 
    }
})

let quest = document.getElementsByClassName('button');

for (let i = 0; i < quest.length; i++) {
    quest[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let cont = this.nextElementSibling;
        if (cont.style.maxHeight) {
            cont.style.maxHeight = null;
        } else {
            cont.style.maxHeight = cont.scrollHeight + 'px'
        }
    })
}