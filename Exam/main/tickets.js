const list = document.querySelector('.list');
const items = document.querySelectorAll('.ticket');
const listItems = document.querySelectorAll('.list-item');

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        const target = event.target;
        if(target.classList.contains('list-item')) {
            listItems.forEach(listItem => {
                listItem.classList.remove('active');
            });
            target.classList.add('active');
        }
        switch(targetId) {
            case 'all':
                getItems('ticket')
                break
            case 'london':
                getItems(targetId);
                break
            case 'belgrade':
                getItems(targetId);
                break
            case 'moscow':
                getItems(targetId);
                break
            case 'rome':
                getItems(targetId);
                break
            case 'istanbul':
                getItems(targetId);
                break
        }
    });
}

function getItems(className) {
    items.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}

filter()

document.onclick = event => {
    if(event.target.classList.contains('select')) {
        alert('You have selected your ticket. Have a nice trip!');
    }
}