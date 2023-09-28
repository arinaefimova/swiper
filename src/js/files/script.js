// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



// Используем классы для создание карточек меню

//   class MenuCard {
//     constructor(src, alt, title, price, parentSelector) {
//         this.src = src;
//         this.alt = alt;
//         this.title = title;

//         this.price = price;
//         this.parent = document.querySelector(parentSelector);

//     }


//     render() {
//         const element = document.createElement('div');
//         element.innerHTML = `
//             <div class="menu__item">
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>

//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span>руб</div>
//                 </div>
//             </div>
//         `;
//         this.parent.append(element);
//     }
// }
// const getResource = async (url) => {
//     const res = await  fetch(url);
//     if(!res.ok){
//         throw new Error(`ты лох ничего не выполнилось ${url},status${res.ststus}`);
//     }

//     return await res.json();

// };


// getResource('http://localhost:8080/comments')
// .then(data=>{
//     data.forEach(({img,altimg,title,price})=>{
//         new MenuCard(img,altimg,title,price,'.cards-page__body').render();
//     });
// });
if(document.querySelector('.cards-page__body')){

    class MenuCard {
        constructor(src, alt, title, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
    
            this.price = price;
            this.parentSelector = parentSelector;
            this.parent = document.querySelector(parentSelector);
        }
    
        render() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="cards-page__column">
                 <div class="cards-page__image cards-page__image_json ">
                     <img class="image-json" src=${this.src} alt=${this.alt}>
                </div>
                <a class="cards-page__title">
                  ${this.title}
                 </a>
                <div class="cards-page__price">${this.price} руб.</div>
                <div class="cards-page__buttons">
                    <a href="" class="cards-page__button-org">Подробнее</a>
                    <a href="" class="cards-page__button-tr">Заказать</a>
                </div>
            
            
        </div>
    
    
               
            `;
            
            this.parent.append(element);
            
        
         
        }
    
        
    }
    
    const getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Не удалось выполнить запрос ${url}, статус ${res.status}`);
        }
    
        return await res.json();
    };
    
    // getResource('http://localhost:8080/posts')
    getResource('http://localhost:8080/posts')
        .then(data => {
            const menu = new MenuCard('src', 'alt', 'title', 'price', '.cards-page__body');
           
            data.forEach(({ img, altimg, title, price }) => {
                new MenuCard(img, altimg, title, price, '.cards-page__body').render();
            });
        });
}

//========================================================================================================================================================

const forms = document.querySelectorAll('form');
const message = {
    // loading: 'img/icons/sp.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

forms.forEach(item => {
    bindPostData(item);
});

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        // body: JSON.stringify(object),
        body: data,
    });

    return await res.json();

};

function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
                display:block;
                margin:0 auto;
            `






        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));




        postData('http://localhost:8080/requests', json)

            .then(data => {
                console.log(data);
                // closeModal()
                form.reset();
                statusMessage.remove();
                setTimeout(() => {

                    closeModal();
                }, 1000);
            }).catch(() => {

            }).finally(() => {
                form.reset();
            })
    });
}

function closeModal() {
    const modalButtons = document.querySelectorAll('[data-modal]');
    // modalButtons.classList.add('hidden');
    modalButtons.forEach(function (item) {
        item.classList.add('hidden');
    })
}

// function showThanksModal(message) {
//     const prevModalDialog = document.querySelector('.popup__card');
//     prevModalDialog.classList.add('hide');
//     // openModal();

//     const thanksModal = document.createElement('div');
//     thanksModal.classList.add('popup__window');

//     thanksModal.innerHTML = `
//             <div class='modal__content'>
//                 <div class='modal__close' data-close>×</div>
//                 <div class='modal__title'>${message}</div>
//             </div>

//         `;
//     document.querySelectorAll('.popup').forEach(function(item){
//         item.append(thanksModal);
//     setTimeout(() => {
//         thanksModal.remove();
//         prevModalDialog.classList.add('show');
//         prevModalDialog.classList.remove('hide');
//         closeModal();
//     }, 3000);
//     })



// }


// IBG================================================================================
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();



//Бургер

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//выпадашка
const textOpen = document.querySelector('#open');
const btnOpen = document.querySelector('#bopen');
const subOpen = document.querySelector('#sub');

textOpen.addEventListener('click', function (e) {
    if (e.target !== subOpen) {
        e.preventDefault();
    }

    subOpen.classList.toggle('_active');
    btnOpen.classList.toggle('_active');
});


//модалка
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modallCloseButtons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);
        modal.classList.remove('hidden');
        modal.querySelector('.popup__window').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});



modallCloseButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
});

allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
    })
});


// tabs
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');
tabsBtn.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let currentBtn = item;
        let tabId = this.dataset.t;
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('active')) {

            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        };


    });
});



// /
const filterBox = document.querySelectorAll('.filters__box');
const w = document.querySelector('.filters__labels');
if (w) {

    w.addEventListener('click', function (e) {
        if (e.target.tagName !== 'LI') {
            return false;
        }
        let filterClass = e.target.getAttribute('data-f');
        let filterButtons = document.querySelectorAll('.filters__labels li');
        filterButtons.forEach(function (button) {
            button.classList.remove('_active');
        });

        // Добавьте класс 'active' на нажатую кнопку фильтра
        e.target.classList.add('_active');
        filterBox.forEach(function (elem) {
            elem.classList.remove('hide');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.classList.add('hide');



            }



        });

    });
}
