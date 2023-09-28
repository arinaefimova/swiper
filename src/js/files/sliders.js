// Стили Swiper
// Базовые стили
import { Pagination,Navigation,Parallax,Thumbs } from "swiper";
import "../../scss/base/swiper.scss";
let sliders = document.querySelectorAll('.swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}



if (document.querySelector('.slider-main__body')) {//существует ли такой слайдер
    new Swiper('.slider-main__body', {
        modules: [Navigation, Pagination, Parallax],
        slidesPerView: 2,
        observer: true,
        observeParents: true,
        parallax: true,
        spaceBetween: 30,
        // watchOverflow: true,
        speed: 1800,
        loop: true,


        pagination: {
            el: '.controls__dotts',
            clickable: true,
        },
        navigation: {
            nextEl: '.arrow_prev',
            prevEl: '.arrow_next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,

            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,

            },
            992: {
                slidesPerView: 2,

            },

        },


    });
}
if (document.querySelector('.brands-slider__body')) {//существует ли такой слайдер
    new Swiper('.brands-slider__body', {
        modules: [Navigation, Pagination, Parallax],
        slidesPerView: 5,
        observer: true,
        observeParents: true,
        parallax: true,
        spaceBetween: 70,
        // watchOverflow: true,
        speed: 1800,
        loop: true,


       
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,

            },
            520: {
                slidesPerView: 2,
                spaceBetween: 30,

            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,

            },
            970: {
                slidesPerView: 4,
                spaceBetween: 50,

            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 70,

            },

        },


    });
}

if (document.querySelector('.slider-wood__swiper')) {//существует ли такой слайдер
    new Swiper('.slider-wood__swiper', {
        modules: [Navigation, Pagination, Parallax],
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        parallax: true,
        spaceBetween: 30,
        // watchOverflow: true,
        speed: 1800,
        loop: true,
        pagination: {
            el: '.dots-control_wood',
            clickable: true,
        },
        navigation: {
            nextEl: '.arrow_prev-wood',
            prevEl: '.arrow_next-wood',
        },

       
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,

            },
            520: {
                slidesPerView: 1,
                spaceBetween: 30,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,

            },
            970: {
                slidesPerView: 3,
                spaceBetween: 23,

            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,

            },

        },


    });
}

if (document.querySelector('.images-product')) {//существует ли такой слайдер
    
    const thumbsSwiper = new Swiper('.thumbs-image__swiper', {
        modules: [Navigation,Pagination, Thumbs],
        slidesPerView: 3,
        observer: true,
        observeParents: true,
        parallax:true,
        spaceBetween: 30,
        // watchOverflow: true,
        speed: 1800,
        loop: true,
        // loopAdditionalSlides: 5,
        // preloadImages: false,
        // Arrows
        // Пагинация
			
		// pagination: {
		// 	el: '.products-newy__dotts',
		// 	clickable: true,
        //     dynamicBullets:true,
    
		// },
        
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
               
            },
           400: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            
            1370: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

        },
     

        


    });
    new Swiper('.images-product__swiper', {
        modules: [Navigation,Pagination, Thumbs],
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        // watchOverflow: true,
        speed: 1800,
        loop: true,
        // loopAdditionalSlides: 5,
        // preloadImages: false,	
        thumbs:{
            swiper:thumbsSwiper,
        },
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 0,
               
        //     },
        //    680: {
        //         slidesPerView: 2,
        //         spaceBetween: 10,
               
        //     },
        //     992: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     1370: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },

        // },
     

        


    });
}
