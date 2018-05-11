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
    // Wrap every letter in a span
    $("#title .letters").each(function() {
        $(this).html(
        $(this)
            .text()
            .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
        );
    });
  
    anime
        .timeline({ loop: false })
        .add({
        targets: "#title .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 900
        })
        .add({
        targets: "#title .letter",
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: "-=600",
        delay: function(el, i) {
            return 150 + 25 * i;
        }
        });
    
})


var menu = document.querySelector('#sidebar');
var navbar = document.querySelector(".navbar-start");
scrollSpy(menu, 2000, 'easeInOutQuint');
scrollSpy(navbar, 2000, 'easeInOutQuint');



// Mixing prices
var amountAdditionalLines = input;
var amountOfChorusLines = input;
var acoustic = 1;
var pop = 1;
var rock = 1.2;
var electro = 1.5;

// Solo
var soloTuningBase = 7;
var soloTimingBase = 5;
var soloMixingBase = 10;
var soloDiscount = 0.9;

// Duet
var duetTuningBase = 8;
var duetTimingBase = 9;
var duetMixingBase = 12;
var duetDiscount 0.85;

// Trio
var trioTuningBase = 9;
var trioTimingBase = 11;
var trioMixingBase = 17;
var trioDiscount = 0.8;

// Chorus



function priceCalculator() {
    
    
}








