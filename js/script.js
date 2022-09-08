/* ////////////////////////////////////////// SLAIDERS */

    let OurTeam = $('.Our_team .list');
    let OurClients = $('.Our_clients .list');
    let OurTestimonials = $('.Our_testimonials .list');

    OurTeam.slick({
        infinite: true,
        arrows: false,
        dots: true,
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                }
            },

        ],
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        
        
       

    });
    OurClients.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        dots: true,
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },

        ],

    });
    OurTestimonials.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true

    });



window.STORAGE = {}

// STORAGE.SectionsList = document.querySelectorAll('section');

// for (let k = 2; k < STORAGE.SectionsList .length; k++) {
    
//         let section = STORAGE.SectionsList[k];
//         // // console.log(section);
//         let sectionHTML = section.innerHTML;
//         section.innerHTML = '';
//         section.insertAdjacentHTML('afterbegin', `<div class="sal_container" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="cubic-bezier(0.55, 0, 1, 0.45)">`+sectionHTML+`</div>`);
// }

/* ////////////////////////////////////////// SLAIDERS */

/* ////////////////////////////////////////// CATEGORIES */
/* --------------------------------------------------- Помещаем ссылки на фото ( которые будут использоваться в item-ах ) в массив */
    STORAGE.photo = [];

    for (let i = 0; i < 3; i++) {
        STORAGE.photo.push(`css/images/portfolio/Layer 0${i+1}.jpg`)
    }
/* --------------------------------------------------- */
let works_data= {
    work_1 : {
        photo_link : STORAGE.photo[0],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',

    },
    work_1_1 : {
        photo_link : STORAGE.photo[0],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',

    },
    work_1_2 : {
        photo_link : STORAGE.photo[0],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',

    },
    work_2 : {
        photo_link : STORAGE.photo[1],
        work_caption : 'Trend and fashion',
        work_category : 'Mobile design',
    },
    work_2_1 : {
        photo_link : STORAGE.photo[1],
        work_caption : 'Trend and fashion',
        work_category : 'Mobile design',
    },
    work_2_2 : {
        photo_link : STORAGE.photo[1],
        work_caption : 'Trend and fashion',
        work_category : 'Mobile design',
    },
    work_3 : {
        photo_link : STORAGE.photo[2],
        work_caption : 'Trend and fashion',
        work_category : 'Photograhy',
    },
    work_3_1 : {
        photo_link : STORAGE.photo[2],
        work_caption : 'Trend and fashion',
        work_category : 'Photograhy',
    },
    work_3_2 : {
        photo_link : STORAGE.photo[2],
        work_caption : 'Trend and fashion',
        work_category : 'Photograhy',
    },
}

    STORAGE.WorksContainer = document.querySelector('.Our_work .items'), // Получаем доступ к items
    STORAGE.WorksArrayCat = [];                                            // Создаем массив состоящий из категорий каждого item
    STORAGE.ArrayWorksData = Object.values(works_data);                 // Создаем массив объектов ( для более простой работы с works_data )
    console.log(STORAGE.WorksArrayCat);
/* --------------------------------------------------- Создание item-ов и добавление их в doсument*/
    for (key of  STORAGE.ArrayWorksData) {
        let text =  `
                <div class="item">
                    <img src="${key.photo_link}" alt="">
                        <div class="item_hover">
                            <p class="caption">${key.work_caption}</p>
                            <p class="category">${key.work_category}</p>
                            <svg class="">
                                <use xlink:href="#my-5-icon" />
                                <use xlink:href="#my-6-icon" />
                            </svg>
                        </div>
                </div>
            `;
            STORAGE.WorksArrayCat.push(key.work_category);
            STORAGE.WorksContainer.insertAdjacentHTML('beforeend', text);    
    }
/* --------------------------------------------------- */   
    
    STORAGE.CategoriesName = ['All','Website design','Mobile design','Photograhy'];
    STORAGE.CategoriesButton = Array.from( document.querySelectorAll('.categories p'));
    STORAGE.WorksItems = document.querySelectorAll('.Our_work .item');
    
    STORAGE.CategoriesActiveIndex= 0;

    NoDisplay = function () {
        STORAGE.WorksItems.forEach(function (item,index) {
            STORAGE.WorksItems[index].style.display ="none";
        });
    },
    AllDisplay = function () {
        STORAGE.WorksItems.forEach(function (item,index) {
            STORAGE.WorksItems[index].style.display ="flex";
        });
    }


STORAGE.CategoriesButton.forEach(function (elem,index,arr) {  // Перебираем все категории (кнопки) с помощью forEach ( вместо цикла for )
    elem.addEventListener('click',function () { // Добавляем событие нажатия категории (кнопки) 
      
        STORAGE.CategoriesActiveIndex = index; // Помещаем index выбранной категории в переменную
        // console.log( STORAGE.CategoriesActiveIndex);
        if (STORAGE.CategoriesActiveIndex == 0) {    // Если index равен нулю ( выбрана категория all) то...
            // console.log(111);
            AllDisplay();       // Включаем видимость у всех item

        } else {                // Иначе...
            /* --------------------------------------------------- Показ активных элементов */
            // console.log(STORAGE.CategoriesButton);
                NoDisplay();    // Выключаем видимость у всех item
                
                                                     
                for (let i = 0; i <  STORAGE.WorksArrayCat.length; i++) {         // перебираем категории item-ов  
                    // console.log(111);   
                    if (  STORAGE.WorksArrayCat[i] == STORAGE.CategoriesName[STORAGE.CategoriesActiveIndex]) { // если категория item-а совпадает с выбранной пользователем категорией то...
                        STORAGE.WorksItems[i].style.display ="flex";        //  Включаем видимость item-а
                    }
                }
            /* --------------------------------------------------- */       
        }
        /* --------------------------------------------------- Стилизация кнопок категорий */
            STORAGE.CategoriesButton.forEach(NotActiveElement => {
                NotActiveElement.classList.remove('active');
            });
            this.classList.toggle('active');
        // /* --------------------------------------------------- */
    });
});
// console.log(STORAGE);

STORAGE.ArrowDawn = document.querySelector('.Start_video .arrow_dawn');
STORAGE.AboutUs = document.querySelector('.About_us');
// console.log(AboutUs);
STORAGE.ArrowDawn.addEventListener('click', function name(params) {
    // STORAGE.AboutUs.scrollIntoView();    
    let ScrollDiv = STORAGE.AboutUs.offsetTop;
    window.scrollTo({ top: ScrollDiv, behavior: 'smooth'});
    
});

STORAGE.MenuButtonActive = document.querySelector('.MenuButtonActive');
STORAGE.MenuButtonNone = document.querySelector('.MenuButtonNone');
STORAGE.NavMenu = document.querySelector('nav');
STORAGE.MenuButtonActive.addEventListener('click',function () {
    console.log(111);
     document.body.style.overflow = "hidden";
     STORAGE.NavMenu.style.left = "0"
      setTimeout(() => {
        STORAGE.NavMenu.style.display ="flex";
    }, 1000);
     
    STORAGE.NavMenu.style.display ="flex";
    
    STORAGE.MenuButtonActive.style.opacity="0";
    STORAGE.MenuButtonNone.style.display ="flex";

});

STORAGE.MenuButtonNone.addEventListener('click',function () {
    console.log(111);
    document.body.style.overflow = "auto";
    STORAGE.NavMenu.style.left = "-100%"
    setTimeout(() => {
        STORAGE.NavMenu.style.display ="none";
    }, 1000);
    
    STORAGE.MenuButtonActive.style.opacity="1";
    STORAGE.MenuButtonNone.style.display ="none";

});

/* ////////////////////////////////////////// CATEGORIES */