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
/* ////////////////////////////////////////// SLAIDERS */

/* ////////////////////////////////////////// CATEGORIES */
let photo = []

for (let i = 0; i < 3; i++) {
    photo.push(`css/images/portfolio/Layer 0${i+1}.jpg`)
}

let photo_link='';

let works_data= {
    work_1 : {
        photo_link : photo[0],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',

    },
    work_2 : {
        photo_link : photo[1],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',
    },
    work_3 : {
        photo_link : photo[2],
        work_caption : 'Trend and fashion',
        work_category : 'Website design',
    },
}

photo_link = photo[0];
function Test(a) {
    a.work_item= a.work_item;
}
Test(works_data);
console.log(works_data.work_item);
// console.log(works_data.work_one.photo_link);


// CategoriesItems.insertAdjacentHTML('beforeend', ``);





// console.log(text());
let CategoriesItems = document.querySelector('.Our_work .items');
console.log();
function СreatingBlock(i) {
    let text = function () {
        return (`
            <div class="item 111">
                <img src="${works_data["work_"+i].photo_link}" alt="">
                    <div class="item_hover">
                        <p class="caption">${1}</p>
                        <p class="category">${1}</p>
                        <svg class="">
                            <use xlink:href="#my-5-icon" />
                            <use xlink:href="#my-6-icon" />
                        </svg>
                    </div>
            </div>
        `)
    }
    CategoriesItems.innerHTML='';
    CategoriesItems.insertAdjacentHTML('beforeend', text());    
}




let Categories = Array.from( document.querySelectorAll('.categories p'));
let IndexCat = 0;

Categories.forEach(function (elem,index,arr) {
    elem.addEventListener('click',function () {
        IndexCat = index;
        СreatingBlock(IndexCat);
        Categories.forEach(NAelement => {
            NAelement.classList.remove('active');
        });
        this.classList.toggle('active');
    });
});

/* ////////////////////////////////////////// CATEGORIES */