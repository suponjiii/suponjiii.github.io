$(document).ready(function(){
    window.sr = ScrollReveal();
    sr.reveal("section");
})

$(function() {

    var $sidebar   = $("#sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 150;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 0);
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            }, 0);
        }
    });
    
});


var menu = document.querySelector('#sidebar');
scrollSpy(menu, 2000, 'easeInOutQuint');
