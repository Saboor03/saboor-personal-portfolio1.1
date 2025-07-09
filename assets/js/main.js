// Menu Show
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        console.log(toggle);
        console.log(nav);
        
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show'); //javascript css to display nav menu
            })
        }
};
showMenu('nav-toggle','nav-menu')

//Active and Remoe Menu Mobile View
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// Scroll Reveal Animation
const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

//Scroll Home
sr.reveal('.home_title', {});
sr.reveal('.button', { delay: 200});
sr.reveal('.home_img', {delay: 400});
sr.reveal('.home_social-ion', { interval: 300 });

//scroll About
sr.reveal('.about_img', {});
sr.reveal('.about_subtitle', { delay:200});
sr.reveal('.home_text', {delay: 400 });

//Scroll skills
sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_text', { delay: 200 });
sr.reveal('.skills_data', { interval: 400});
sr.reveal('.skills_img', {delay: 400 });

//Scroll Work
sr.reveal('.work_img', { interval: 200 });

//Scroll Contact
sr.reveal('.contact_input', {interval: 300 });