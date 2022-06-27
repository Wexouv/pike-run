const object = document.querySelector('.object');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const left = document.querySelector('.left');
const right = document.querySelector('.right');


const setPosition = (x, y) => {
    object.style.left = `${object.getBoundingClientRect().left - x}px`;
    object.style.top = `${object.getBoundingClientRect().top - y}px`;
}

up.addEventListener('click', () => {
    setPosition(0, 10);
}
);
down.addEventListener('click', () => {
    setPosition(0, -10);
}
);
left.addEventListener('click', () => {
    setPosition(10, 0);
}
);
right.addEventListener('click', () => {
    setPosition(-10, 0);
}
);
    
window.onload = () => {
   setPosition(-window.screen.width/2,-window.screen.height/2);
}
