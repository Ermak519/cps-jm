import '../scss/style.scss';

console.log('Works!');

//боковое меню
const mainWrapper = document.querySelector('.wrapper__main');
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
const fullBrandsBtn = document.querySelector('.brends__full');
const brandWrapper = document.querySelector('.brend-wrappper');
const brendArrow = fullBrandsBtn.querySelector('.brends__arow');
const brandsTxt = fullBrandsBtn.querySelector('.brends__toggle');

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

callBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        openModal(modalCall, 'modal-call--close', 'modal-call--open')
    })
});

feedbackBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        openModal(modalFeedback, 'modal-feedback--close', 'modal-feedback--open')
    })
});

feedbackCloseBtn.addEventListener('click', () => {
    closeModal(modalFeedback, 'modal-feedback--close', 'modal-feedback--open')
});

callCloseBtn.addEventListener('click', () => {
    closeModal(modalCall, 'modal-call--close', 'modal-call--open')
});

burgerMenu.addEventListener('click', () => {
    openModal(sideMenu, 'side-menu--close', 'side-menu--open')
});

closeMenu.addEventListener('click', () => {
    closeModal(sideMenu, 'side-menu--close', 'side-menu--open')
});

fullBrandsBtn.addEventListener('click', () => {
    brandWrapper.style.transition = "all 0.3s ease";
    brandWrapper.classList.toggle('brend-wrappper--show');
    brandWrapper.classList.toggle('brend-wrappper--hide');

    brendArrow.classList.toggle('brands__arow--transform');

    if (brandsTxt.textContent === 'Показать все') {
        brandsTxt.textContent = 'Скрыть';
    } else {
        brandsTxt.textContent = 'Показать все';
    }
});

fullTechBtn.addEventListener('click', () => {
    techWrapper.style.transition = "all 0.3s ease";
    techWrapper.classList.toggle('technics-wrappper--show');
    techWrapper.classList.toggle('technics-wrappper--hide');

    techArrow.classList.toggle('technics__arow--transform');

    if (techTxt.textContent === 'Показать все') {
        techTxt.textContent = 'Скрыть';
    } else {
        techTxt.textContent = 'Показать все';
    }
})





