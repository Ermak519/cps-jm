import '../scss/style.scss';

console.log('Works!');


const mainWrapper = document.querySelector('.wrapper__main');
const wrapper = document.querySelector('.wrapper');

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

burgerMenu.addEventListener('click', () => {
    sideMenu.style.transition = "all 0.2s linear";
    mainWrapper.style.filter = "blur(5px) invert(0.05)";
    sideMenu.classList.add('side-menu--open');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('side-menu--open')
    mainWrapper.style.filter = "";
    document.body.style.overflow = '';
});

feedbackBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (sideMenu.classList.contains('side-menu--open')) {
            sideMenu.classList.remove('side-menu--open')
        }
        modalFeedback.style.transition = "all 0.1s linear";
        mainWrapper.style.filter = "blur(5px) invert(0.05)";
        modalFeedback.classList.add('modal-feedback--open');
        document.body.style.overflow = 'hidden';
    })
});

feedbackCloseBtn.addEventListener('click', () => {
    modalFeedback.classList.remove('modal-feedback--open');
    mainWrapper.style.filter = "";
    document.body.style.overflow = '';
});

callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (sideMenu.classList.contains('side-menu--open')) {
            sideMenu.classList.remove('side-menu--open')
        }
        modalCall.style.transition = "all 0.1s linear";
        mainWrapper.style.filter = "blur(5px) invert(0.05)";
        modalCall.classList.add('modal-call--open');
        document.body.style.overflow = 'hidden';
    })
});

callCloseBtn.addEventListener('click', () => {
    modalCall.classList.remove('modal-call--open');
    mainWrapper.style.filter = "";
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
        sideMenu.classList.remove('side-menu--open');
        modalCall.classList.remove('modal-call--open');
        modalFeedback.classList.remove('modal-feedback--open');
        mainWrapper.style.filter = "";
        document.body.style.overflow = '';
    }
})

