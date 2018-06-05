// Global Variables

// Variables declaration
var amountAdditionalLines, amountOfChorusLines, 
    acoustic, pop, rock, electro, 
    soloTuningBase, soloTimingBase, soloMixingBase, soloDiscount,
    duetTuningBase, duetTimingBase, duetMixingBase, duetDiscount, 
    trioTuningBase, trioTimingBase, trioMixingBase, trioDiscount;

// Mixing prices
var amountAdditionalLines = 0,
    amountOfChorusLines = 0,
    acoustic = 1,
    pop = 1.05,
    rock = 1.2,
    electro = 1.5;
    other = 1;

// Solo
var soloTuningBase = 7,
    soloTimingBase = 5,
    soloMixingBase = 10,
    soloDiscount = 0.9;

// Duet
var duetTuningBase = 8,
    duetTimingBase = 9,
    duetMixingBase = 12,
    duetDiscount = 0.85;

// Trio
var trioTuningBase = 9,
    trioTimingBase = 11,
    trioMixingBase = 17,
    trioDiscount = 0.8;

// Chorus



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
    
        
    $('#calculation-button').click(function(){
        //Hole Werte von den Input-Feldern
        var typeOfMix = $('#typeOfMix').val();  
        var genre = $('#genre').val();
        var amountOfLines = $('#amountOfLines').val();
        var amountOfAdditionalLines = $('#amountOfAdditionalLines').val();
        var more = $('#more').val();
        //Überprüfe Art des Mixes und rufe passende Funktionen auf (mit passenden Parametern)
        if (amountOfLines === "Solo"){
            
            solo(typeOfMix, amountOfAdditionalLines, genre);
            
        } else if (amountOfLines === "Duet") {
            
            duet();
            
        } else if (amountOfLines === "Trio") {
            
            trio();
            
        } else {
            
            chorus();
        } 
    });
})


var menu = document.querySelector('#sidebar');
var navbar = document.querySelector(".navbar-start");
scrollSpy(menu, 2000, 'easeInOutQuint');
scrollSpy(navbar, 2000, 'easeInOutQuint');


function solo(typeOfMix, amountOfAdditionalLines, genre) {
    var soloTuningFinal,
        soloTimingFinal,
        soloMixingFinal;
    //Überprüfe Genre und setze den Modifier passend
    if (genre === "Acoustic") {
        genreModifier = acoustic;
    } else if (genre = "Rock") {
        genreModifier = rock;
    } else if (genre = "Pop") {
        genreModifier = pop;
    } else if (genre = "Electro") {
        genreModifier = electro;
    } else {
        genreModifier = other;
    }
    
    //Überprüfe Typ des Mixes und setze Werte passend
    if(typeOfMix === "TuningOnly") {
        soloTimingFinal = 0;
        soloMixingFinal = 0;
        soloTuningFinal = soloTuningBase;
        soloDiscountFinal = 1;
    } else if(typeOfMix === "TimingOnly") {
        //TODO: Setze Variablen wie oben aber mit den korrekten Werten
    } else if(typeOfMix === "MixingOnly") {
        //TODO: Setze Variablen wie oben aber mit den korrekten Werten
    } else {
        //TODO: Setze Variablen wie oben aber mit den korrekten Werten
    }
    //Setze Result-Feld mit dem berechneten Wert
     $('#result-field').val(((soloTuningFinal + soloTimingFinal + soloMixingFinal + amountOfAdditionalLines) * genreModifier ) * soloDiscountFinal);
}

function duet() {
    //TODO: Implementiere Berechnung ähnlich wie solo
}

function trio() {
    //TODO: Implementiere Berechnung ähnlich wie solo
}

function chorus() {
    //TODO: Implementiere Berechnung ähnlich wie solo
}







