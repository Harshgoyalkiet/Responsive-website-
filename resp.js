// now hum chahte hain ki click karne par nav ki height jo hai wo 362 ho jaye
// basically hum kya karenge ki jab bhi koi hamburger par click karega to bs hum v-class ko toggle karenge matlab agar lagayi hai to hatadenge aur hati hui hai to laga denge 
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.rightnav');
navlist = document.querySelector('.navlist');


burger.addEventlistener('click', () =>
{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classlist.toggle('h-nav-resp');


});

