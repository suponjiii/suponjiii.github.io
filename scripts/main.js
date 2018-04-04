$(document).ready(function(){
    window.sr = ScrollReveal();
    sr.reveal("section");
})


var menu = document.querySelector('#sidebar');
scrollSpy(menu, 2000, 'easeInOutQuint');
