let info = document.getElementsByClassName('button');

for (let i = 0; i < info.length; i++) {
    info[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let cont = this.nextElementSibling;
        if (cont.style.maxHeight) {
            cont.style.maxHeight = null;
        } else {
            cont.style.maxHeight = cont.scrollHeight + 'px'
        }
    })
}