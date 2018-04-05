$(document).ready(function(){
    window.sr = ScrollReveal();
    sr.reveal(".scroll");
    $('.card-header-icon').click(function(){
        $(this).parent().siblings().slideToggle("slow");
        $(this).toggleClass("activeToggle")
    });
    $('.navbar-burger').click(function(){
        $(this).toggleClass("is-active");
    })
})





var menu = document.querySelector('#sidebar');
var navbar = document.querySelector(".navbar-start");
scrollSpy(menu, 2000, 'easeInOutQuint');
scrollSpy(navbar, 2000, 'easeInOutQuint');

