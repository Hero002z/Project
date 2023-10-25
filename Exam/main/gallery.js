const slider = document.querySelector('.slider');
const slider1 = document.querySelector('.slider_1');
const img = slider.querySelectorAll('.flight img')[0];
const img1 = slider1.querySelectorAll('.relax img')[0];
const arrows = document.querySelectorAll('.flight i');
const arrows1 = document.querySelectorAll('.relax i');
let ifStart = false, prev, prevScroll;
let ifStart1 = false, prev1, prevScroll1;
let imgWidth = img.clientWidth + 15;
let imgWidth1 = img1.clientWidth + 15;

arrows.forEach(icon => {
    icon.addEventListener('click', () => {
        if(icon.id == 'left') {
            slider.scrollLeft -= imgWidth;
        } else {
            slider.scrollLeft += imgWidth;
        }
    });
})

const start = (e) => {
    ifStart = true;
    prev = e.pageX;
    prevScroll = slider.scrollLeft;
}

const stop = () => {
    ifStart = false;
    slider.classList.remove('movement');
}

const move = (e) => {
    if(!ifStart) {
        return;
    }
    e.preventDefault();
    slider.classList.add('movement');
    let possition = e.pageX - prev;
    slider.scrollLeft = prevScroll - possition;
}

slider.addEventListener('mousemove', move);
slider.addEventListener('mousedown', start);
slider.addEventListener('mouseup', stop);
slider.addEventListener('mouseleave', stop);

arrows1.forEach(icon1 => {
    icon1.addEventListener('click', () => {
        if(icon1.id == 'left_1') {
            slider1.scrollLeft -= imgWidth1;
        } else {
            slider1.scrollLeft += imgWidth1;
        }
    });
})


const start1 = (e) => {
    ifStart1 = true;
    prev1 = e.pageX;
    prevScroll1 = slider1.scrollLeft;
}

const stop1 = () => {
    ifStart1 = false;
    slider1.classList.remove('movement_1');
}

const move1 = (e) => {
    if(!ifStart1) {
        return;
    }
    e.preventDefault();
    slider1.classList.add('movement_1');
    let possition1 = e.pageX - prev1;
    slider1.scrollLeft = prevScroll1 - possition1;
}

slider1.addEventListener('mousemove', move1);
slider1.addEventListener('mousedown', start1);
slider1.addEventListener('mouseup', stop1);
slider1.addEventListener('mouseleave', stop1);