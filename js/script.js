/* ////////////////////////////////////////// SLAIDERS */
$(document).ready(function name(params) {
    $('.Our_team .list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true

    });
    $('.Our_clients .list').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        dots: true

    });
    $('.Our_testimonials .list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true

    });
});

sal({
    threshold: 0.3,
    once : false,
});
/* ////////////////////////////////////////// SLAIDERS */

/* ////////////////////////////////////////// CATEGORIES */
/* --------------------------------------------------- Помещаем ссылки на фото ( которые будут использоваться в item-ах ) в массив */
    let photo = []

    for (let i = 0; i < 3; i++) {
        photo.push(`css/images/portfolio/Layer 0${i+1}.jpg`)
    }
/* --------------------------------------------------- */
let works_data= {
    work_1 : {
        photo_link : photo[0],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',

    },
    work_1_1 : {
        photo_link : photo[0],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',

    },
    work_1_2 : {
        photo_link : photo[0],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',

    },
    work_2 : {
        photo_link : photo[1],
        work_caption : 'Trend and fashion',
        work_category : 'Mobile design',
    },
    work_2_1 : {
        photo_link : photo[1],
        work_caption : 'Trend and fashion',
        work_category : 'Mobile design',
    },
    work_2_2 : {
        photo_link : photo[1],
        work_caption : 'Trend and fashion',
        work_category : 'Mobile design',
    },
    work_3 : {
        photo_link : photo[2],
        work_caption : 'Trend and fashion',
        work_category : 'Photograhy',
    },
    work_3_1 : {
        photo_link : photo[2],
        work_caption : 'Trend and fashion',
        work_category : 'Photograhy',
    },
    work_3_2 : {
        photo_link : photo[2],
        work_caption : 'Trend and fashion',
        work_category : 'Photograhy',
    },
}

let CategoriesItems = document.querySelector('.Our_work .items'), // Получаем доступ к items
    arr_item_cat = [];                                            // Создаем массив состоящий из категорий каждого item
const arr_works_data = Object.values(works_data);                 // Создаем массив объектов ( для более простой работы с works_data )

/* --------------------------------------------------- Создание item-ов и добавление их в doсument*/
    for (key of arr_works_data) {
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
        arr_item_cat.push(key.work_category);
        CategoriesItems.insertAdjacentHTML('beforeend', text);    
    }
/* --------------------------------------------------- */   

let CategoriesName = ['All','Website design','Mobile design','Photograhy'],
    Categories = Array.from( document.querySelectorAll('.categories p')),
    CategoriesItem = document.querySelectorAll('.Our_work .item'),
    indexCat = 0,
    NoDisplay = function () {
        CategoriesItem.forEach(function (item,index) {
            CategoriesItem[index].style.display ="none";
        });
    },
    AllDisplay = function () {
        CategoriesItem.forEach(function (item,index) {
            CategoriesItem[index].style.display ="flex";
        });
    }

Categories.forEach(function (elem,index,arr) {  // Перебираем все категории (кнопки) с помощью forEach ( вместо цикла for )
    elem.addEventListener('click',function () { // Добавляем событие нажатия категории (кнопки) 

    indexCat = index; // Помещаем index выбранной категории в переменную

        if (indexCat == 0) {    // Если index равен нулю ( выбрана категория all) то...

            AllDisplay();       // Включаем видимость у всех item

        } else {                // Иначе...
            /* --------------------------------------------------- Показ активных элементов */
                
                NoDisplay();                                            // Выключаем видимость у всех item
                for (let i = 0; i < arr_item_cat.length; i++) {         // перебираем категории item-ов  
                    if ( arr_item_cat[i] == CategoriesName[indexCat]) { // если категория item-а совпадает с выбранной пользователем категорией то...
                        CategoriesItem[i].style.display ="flex";        //  Включаем видимость item-а
                    }
                }
            /* --------------------------------------------------- */       
        }
        /* --------------------------------------------------- Стилизация кнопок категорий */
            Categories.forEach(NAelement => {
                NAelement.classList.remove('active');
            });
            this.classList.toggle('active');
        /* --------------------------------------------------- */
    });
});

/* ////////////////////////////////////////// CATEGORIES */