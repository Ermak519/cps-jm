import '../scss/style.scss';

console.log('Works!');

const mainWrapper = document.querySelector('.wrapper__main');

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

const openModal = (modalName, closeClass, openClass) => {
    modalName.classList.add(openClass);
    modalName.classList.remove(closeClass);
    mainWrapper.style.filter = "blur(5px)";
}

const closeModal = (modalName, closeClass, openClass) => {
    modalName.classList.add(closeClass);
    modalName.classList.remove(openClass);
    modalName.style.transition = "all 0.3s ease";
    mainWrapper.style.filter = "";
}

const caseShowHide = (wrapper, classShow, classHide, text, arow, arowClass) => {
    wrapper.style.transition = "all 0.3s ease";
    wrapper.classList.toggle(classShow);
    wrapper.classList.toggle(classHide);

    arow.classList.toggle(arowClass);

    if (text.textContent === 'Показать все') {
        text.textContent = 'Скрыть';
    } else {
        text.textContent = 'Показать все';
    }
}

callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        openModal(modalCall, 'modal-call--close', 'modal-call--open')
        document.body.style.overflow = 'hidden';
    })
});

feedbackBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        openModal(modalFeedback, 'modal-feedback--close', 'modal-feedback--open');
        document.body.style.overflow = 'hidden';
    })
});

feedbackCloseBtn.addEventListener('click', () => {
    closeModal(modalFeedback, 'modal-feedback--close', 'modal-feedback--open');
    document.body.style.overflow = '';
});

callCloseBtn.addEventListener('click', () => {
    closeModal(modalCall, 'modal-call--close', 'modal-call--open');
    document.body.style.overflow = '';
});

burgerMenu.addEventListener('click', () => {
    openModal(sideMenu, 'side-menu--close', 'side-menu--open');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    closeModal(sideMenu, 'side-menu--close', 'side-menu--open');
    document.body.style.overflow = '';
});

fullBrendsBtn.addEventListener('click', () => {
    caseShowHide(brendWrapper, 'brend-wrappper--show', 'brend-wrappper--hide', brendsTxt, brendArrow, 'brends__arow--transform');
});

fullTechBtn.addEventListener('click', () => {
    caseShowHide(techWrapper, 'technics-wrappper--show', 'technics-wrappper--hide', techTxt, techArrow, 'technics__arow--transform');
});


mainWrapper.addEventListener('click', (e) => {
    if (e.target === mainWrapper) {
        closeModal(sideMenu, 'side-menu--close', 'side-menu--open');
        closeModal(modalCall, 'modal-call--close', 'modal-call--open');
        closeModal(modalFeedback, 'modal-feedback--close', 'modal-feedback--open');
    }
})



