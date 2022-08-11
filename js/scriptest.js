let OurTeam = document.querySelector('.Our_team');
    OurTeamHTML = OurTeam.innerHTML;
    
OurTeam.innerHTML ='';
console.log(OurTeamHTML);
 
OurTeam.insertAdjacentHTML('afterbegin', `<div class="sal_container" data-sal="slide-up" data-sal-delay="100" data-sal-easing="cubic-bezier(.68,-.55,.265,1.55)">`+OurTeamHTML+`</div>`);


