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




// Variables declaration
var amountAdditionalLines, amountOfChorusLines, acoustic, pop, rock,
    electro, soloTuningBase, soloTimingBase, soloMixingBase, soloDiscount,
    duetTuningBase, duetTimingBase, duetMixingBase, duetDiscount, 
    trioTuningBase, trioTimingBase, trioMixingBase, trioDiscount;


// Mixing prices
var amountAdditionalLines = input,
    amountOfChorusLines = input,
    acoustic = 1,
    pop = 1,
    rock = 1.2,
    electro = 1.5;

// Solo
var soloTuningBase = 7,
    soloTimingBase = 5,
    soloMixingBase = 10,
    soloDiscount = 0.9;

// Duet
var duetTuningBase = 8,
    duetTimingBase = 9,
    duetMixingBase = 12,
    duetDiscount 0.85;

// Trio
var trioTuningBase = 9,
    trioTimingBase = 11,
    trioMixingBase = 17,
    trioDiscount = 0.8;

// Chorus



function priceCalculator() {
    
    
}








