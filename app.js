let navUl = document.querySelector('.ordered-list');
let dropDown = document.querySelector('.drop-down');

dropDown.addEventListener('click', toggleButton);
function toggleButton(e){
    navUl.classList.toggle('hidden')
}