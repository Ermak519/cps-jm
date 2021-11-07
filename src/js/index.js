import '../scss/style.scss';

const mainWrapper = document.querySelector('.wrapper__main');
const modalWrapper = document.querySelector('.wrapper__modals');

const sideMenuCloseModal = modalWrapper.querySelector('.menu-wrap');
const feedbackCloseModal = modalWrapper.querySelector('.feedback-wrap');
const callCloseModal = modalWrapper.querySelector('.call-wrap');

//боковое меню
const burgerMenu = document.querySelector('.nav__item.menu');
const closeMenu = document.querySelector('.nav__close');
const sideMenu = document.querySelector('.side-menu');

//модальные окна
const modalFeedback = document.querySelector('.modal-feedback');
const feedbackBtn = document.querySelectorAll('.chat')
const feedbackCloseBtn = modalFeedback.querySelector('.modal-feedback__btn');

const modalCall = document.querySelector('.modal-call');
const callBtn = document.querySelectorAll('.call');
const callCloseBtn = modalCall.querySelector('.modal-call__btn');

//Ремонт техники различных брендов
const fullBrendsBtn = document.querySelector('.brends__full');
const brendWrapper = document.querySelector('.brend-wrappper');
const brendArrow = fullBrendsBtn.querySelector('.brends__arow');
const brendsTxt = fullBrendsBtn.querySelector('.brends__toggle');

//Ремонт техники видов техники
const fullTechBtn = document.querySelector('.technics__full');
const techWrapper = document.querySelector('.technics-wrappper');
const techArrow = fullTechBtn.querySelector('.technics__arow');
const techTxt = fullTechBtn.querySelector('.technics__toggle');

function caseShowHide(wrapper, classShow, classHide, text, arow, arowClass) {
    wrapper.classList.toggle(classShow);
    wrapper.classList.toggle(classHide);
    arow.classList.toggle(arowClass);
    if (text.textContent === 'Показать все') {
        text.textContent = 'Скрыть';
    } else {
        text.textContent = 'Показать все';
    }
}

function openModal(modal, open) {
    modal.style.transition = "all 0.2s linear";
    mainWrapper.style.filter = "blur(5px) invert(0.05)";
    modal.classList.add(open);
    document.body.style.overflow = 'hidden';
}

function closeModal(modal, close) {
    modal.classList.remove(close)
    mainWrapper.style.filter = "";
    document.body.style.overflow = '';
}

burgerMenu.addEventListener('click', () => {
    openModal(sideMenu, 'side-menu--open');
});

closeMenu.addEventListener('click', () => {
    closeModal(sideMenu, 'side-menu--open');
});


feedbackBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (sideMenu.classList.contains('side-menu--open')) {
            sideMenu.classList.remove('side-menu--open')
        }
        openModal(modalFeedback, 'modal-feedback--open');
    })
});

feedbackCloseBtn.addEventListener('click', () => {
    closeModal(modalFeedback, 'modal-feedback--open');
});

callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (sideMenu.classList.contains('side-menu--open')) {
            sideMenu.classList.remove('side-menu--open')
        }
        openModal(modalCall, 'modal-call--open');
    })
});

callCloseBtn.addEventListener('click', () => {
    closeModal(modalCall, 'modal-call--open');
});


fullBrendsBtn.addEventListener('click', () => {
    caseShowHide(brendWrapper, 'brend-wrappper--show', 'brend-wrappper--hide', brendsTxt, brendArrow, 'brends__arow--transform');
});

fullTechBtn.addEventListener('click', () => {
    caseShowHide(techWrapper, 'technics-wrappper--show', 'technics-wrappper--hide', techTxt, techArrow, 'technics__arow--transform');
});


sideMenuCloseModal.addEventListener('click', (e) => {
    if (e.target === sideMenuCloseModal) {
        closeModal(sideMenu, 'side-menu--open');
    }
});

feedbackCloseModal.addEventListener('click', (e) => {
    if (e.target === feedbackCloseModal) {
        closeModal(modalFeedback, 'modal-feedback--open');
    }
});

callCloseModal.addEventListener('click', (e) => {
    if (e.target === callCloseModal) {
        closeModal(modalCall, 'modal-call--open');
    }
});



