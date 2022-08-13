// let OurTeam = document.querySelector('.Our_team');
//     OurTeamHTML = OurTeam.innerHTML;
    
// OurTeam.innerHTML ='';
// // console.log(OurTeamHTML);

// OurTeam.insertAdjacentHTML('afterbegin', `<div class="sal_container" data-sal="zoom-out" data-sal-delay="500" data-sal-easing="cubic-bezier(0.7, 0, 0.84, 0)">`+OurTeamHTML+`</div>`);
// // OurTeam.insertAdjacentHTML('afterbegin', OurTeamHTML );
// let SalContainer = document.querySelector('.Our_team .sal_container');

let AllSection = document.querySelectorAll('section');

for (let i = 2; i < AllSection.length; i++) {
    let section = AllSection[i];
    console.log(section);
    let sectionHTML = section.innerHTML;
    section.innerHTML = '';
    section.insertAdjacentHTML('afterbegin', `<div class="sal_container" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="cubic-bezier(0.55, 0, 1, 0.45)">`+sectionHTML+`</div>`);
}
console.log(AllSection);

// let OurServices = document.querySelector('.Our_services');
//     OurServicesHTML = OurServices.innerHTML;
    
// OurServices.innerHTML ='';

// OurServices.insertAdjacentHTML('afterbegin', `<div class="sal_container" data-sal="zoom-out" data-sal-delay="500" data-sal-easing="cubic-bezier(0.7, 0, 0.84, 0)">`+OurServicesHTML+`</div>`);


const AnimateSal = sal({
    threshold: 0.3,
    once : true,
    // rootMargin : '0% 40%',
    // rootMargin : '00% 0%',
});
console.log(AnimateSal);

// console.log(AnimateSal);
// SalContainer.addEventListener('sal:in', ({ detail }) => {
//     console.log('entering', detail.target);
//     // AnimateSal.disable();
//     // SalContainer.addEventListener('sal:out', ({ detail }) => {
//     //         SalContainer.removeEventListener('sal:in', ({ detail }) => {});
//     //         // AnimateSal.enable();
//     //         console.log('exitring', detail.target);
//     //     });
//     console.log(AnimateSal);
//     // AnimateSal.reset({
//     //     threshold: 0.16,
//     //     once : false,
//     //     rootMargin : '0% 20%',
//     //     disable : true,
//     // });
// });
// SalContainer.addEventListener('sal:out', ({ detail }) => {
//     SalContainer.removeEventListener('sal:in', ({ detail }) => {});
//     AnimateSal.enable();
// });