import '../scss/style.scss';

console.log('Works!');
const mainWrapper = document.querySelector('.wrapper__main');

const burgerMenu = document.querySelector('.nav__item.menu');

const closeMenu = document.querySelector('.nav__close');
const sideMenu = document.querySelector('.side-menu');

const modalFeedback = document.querySelector('.modal-feedback');
const feedbackCloseBtn = modalFeedback.querySelector('.modal-feedback__btn');
const modalCall = document.querySelector('.modal-call');
const callCloseBtn = modalCall.querySelector('.modal-call__btn')
const callBtn = document.querySelectorAll('.call');

const openModal = (modalName, closeClass, openClass) => {
    modalName.classList.add(openClass);
    modalName.classList.remove(closeClass);
    mainWrapper.style.filter = "blur(5px)";
}

const closeModal = (modalName, closeClass, openClass) => {
    modalName.classList.add(closeClass);
    modalName.classList.remove(openClass);
    modalName.style.transition = "all 0.3s ease-in-out";
    mainWrapper.style.filter = "";
}

callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        openModal(modalCall, 'modal-call--close', 'modal-call--open')
    })
})

burgerMenu.addEventListener('click', () => {
    openModal(sideMenu, 'side-menu--close', 'side-menu--open')
});

closeMenu.addEventListener('click', (e) => {
    closeModal(sideMenu, 'side-menu--close', 'side-menu--open')
})





