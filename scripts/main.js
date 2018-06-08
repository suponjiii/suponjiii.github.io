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
var chorusTuningBase = trioTuningBase + (amountOfChorusLines - 3),
    chorusTimingBase = trioTimingBase + (amountOfChorusLines - 3),
    chorusMixingBase = trioMixingBase + (amountOfChorusLines - 3);


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
        var amountOfAdditionalLines = parseInt($('#amountOfAdditionalLines').val())||0;
        var more = $('#more').val();
        
        //Überprüfe Art des Mixes und rufe passende Funktionen auf (mit passenden Parametern)
        if (amountOfLines === "Solo"){
            solo(typeOfMix, amountOfAdditionalLines, genre);
        } else if (amountOfLines === "Duet") {
            duet(typeOfMix, amountOfAdditionalLines, genre);
        } else if (amountOfLines === "Trio") {
            trio(typeOfMix, amountOfAdditionalLines, genre);
        } else {
            chorus(typeOfMix, amountOfAdditionalLines, genre);
        }
    });
    
    
   // $('#chorus-click').click(function(){
        
        // $( "#input-more-AmountOfLines" ).prop( "disabled", false );
        
        // document.getElementById("input-moreAmountOfLines").disabled=false;
        
        // var enable = $("#input-moreAmountOfLines");
        // enable.prop("disabled", false);
        
        // $('#input-moreAmountOfLines').prop('disabled', false);

        // $('#input-moreAmountOfLines').removeAttr('disabled');
        
        // document.getElementById("input-moreAmountOfLines").disabled = false;
        
        // var input = document.querySelector('input-moreAmountOfLines');
        // input.removeAttribute('disabled');
        
        // document.getElementById("input-moreAmountOfLines").disabled = false;
        
        // $('#input-moreAmountOfLines').removeAttr("disabled");
    // });  
})


var menu = document.querySelector('#sidebar');
var navbar = document.querySelector(".navbar-start");
scrollSpy(menu, 2000, 'easeInOutQuint');
scrollSpy(navbar, 2000, 'easeInOutQuint');


function solo(typeOfMix, amountOfAdditionalLines, genre) {
    var soloTuningFinal,
        soloTimingFinal,
        soloMixingFinal;
    
    if (genre === "Acoustic") {
        genreModifier = acoustic;
    } else if (genre === "Rock") {
        genreModifier = rock;
    } else if (genre === "Pop") {
        genreModifier = pop;
    } else if (genre === "Electro") {
        genreModifier = electro;
    } else {
        genreModifier = other;
    }

    if(typeOfMix === "TuningOnly") {
        soloTimingFinal = 0;
        soloMixingFinal = 0;
        soloTuningFinal = soloTuningBase;
        soloDiscountFinal = 1;
        
    } else if(typeOfMix === "TimingOnly") {
        soloTimingFinal = soloTimingBase;
        soloMixingFinal = 0;
        soloTuningFinal = 0; 
        soloDiscountFinal = 1;
        
    } else if(typeOfMix === "MixingOnly") {
        soloTimingFinal = 0;
        soloMixingFinal = soloMixingBase;
        soloTuningFinal = 0;
        soloDiscountFinal = 1;
        
    } else {
        soloTimingFinal = soloTimingBase;
        soloMixingFinal = soloMixingBase;
        soloTuningFinal = soloTuningBase;
        soloDiscountFinal = 0.9;
    }
    
    $('#result-field').val((((soloTuningFinal + soloTimingFinal + soloMixingFinal + amountOfAdditionalLines) * genreModifier ) * soloDiscountFinal).toFixed(0));
}
 

function duet(typeOfMix, amountOfAdditionalLines, genre) {
    var duetTuningFinal,
        duetTimingFinal,
        duetMixingFinal;

    if (genre === "Acoustic") {
        genreModifier = acoustic;
    } else if (genre === "Rock") {
        genreModifier = rock;
    } else if (genre === "Pop") {
        genreModifier = pop;
    } else if (genre === "Electro") {
        genreModifier = electro;
    } else {
        genreModifier = other;
    }
    
    if(typeOfMix === "TuningOnly") {
        duetTimingFinal = 0;
        duetMixingFinal = 0;
        duetTuningFinal = duetTuningBase;
        duetDiscountFinal = 1;
        
    } else if(typeOfMix === "TimingOnly") {
        duetTimingFinal = duetTimingBase;
        duetMixingFinal = 0;
        duetTuningFinal = 0; 
        duetDiscountFinal = 1;
        
    } else if(typeOfMix === "MixingOnly") {
        duetTimingFinal = 0;
        duetMixingFinal = duetMixingBase;
        duetTuningFinal = 0;
        duetDiscountFinal = 1;
        
    } else {
        duetTimingFinal = duetTimingBase;
        duetMixingFinal = duetMixingBase;
        duetTuningFinal = duetTuningBase;
        duetDiscountFinal = 0.9;
    }
     $('#result-field').val((((duetTuningFinal + duetTimingFinal + duetMixingFinal + amountOfAdditionalLines) * genreModifier ) * duetDiscountFinal).toFixed(0));
}


function trio(typeOfMix, amountOfAdditionalLines, genre) {
    var trioTuningFinal,
        trioTimingFinal,
        trioMixingFinal;

    if (genre === "Acoustic") {
        genreModifier = acoustic;
    } else if (genre === "Rock") {
        genreModifier = rock;
    } else if (genre === "Pop") {
        genreModifier = pop;
    } else if (genre = "Electro") {
        genreModifier === electro;
    } else {
        genreModifier = other;
    }
    
    if(typeOfMix === "TuningOnly") {
        trioTimingFinal = 0;
        trioMixingFinal = 0;
        trioTuningFinal = trioTuningBase;
        trioDiscountFinal = 1;
        
    } else if(typeOfMix === "TimingOnly") {
        trioTimingFinal = trioTimingBase;
        trioMixingFinal = 0;
        trioTuningFinal = 0; 
        trioDiscountFinal = 1;
        
    } else if(typeOfMix === "MixingOnly") {
        trioTimingFinal = 0;
        trioMixingFinal = trioMixingBase;
        trioTuningFinal = 0;
        trioDiscountFinal = 1;
        
    } else {
        trioTimingFinal = trioTimingBase;
        trioMixingFinal = trioMixingBase;
        trioTuningFinal = trioTuningBase;
        trioDiscountFinal = 0.8;
    }
     $('#result-field').val((((trioTuningFinal + trioTimingFinal + trioMixingFinal + amountOfAdditionalLines) * genreModifier ) * trioDiscountFinal).toFixed(0));
}

    // function chorus() {
    //TODO: Implementiere Berechnung ähnlich wie solo
    // }


function chorus(typeOfMix, amountOfAdditionalLines, genre) {
    var chorusTuningFinal,
        chorusTimingFinal,
        chorusMixingFinal;
    
    if (genre === "Acoustic") {
        genreModifier = acoustic;
    } else if (genre === "Rock") {
        genreModifier = rock;
    } else if (genre === "Pop") {
        genreModifier = pop;
    } else if (genre === "Electro") {
        genreModifier = electro;
    } else {
        genreModifier = other;
    }

    if(typeOfMix === "TuningOnly") {
        chorusTimingFinal = 0;
        chorusMixingFinal = 0;
        chorusTuningFinal = chorusTuningBase;
        
    } else if(typeOfMix === "TimingOnly") {
        chorusTimingFinal = chorusTimingBase;
        chorusMixingFinal = 0;
        chorusTuningFinal = 0;
        
    } else if(typeOfMix === "MixingOnly") {
        chorusTimingFinal = 0;
        chorusMixingFinal = chorusMixingBase;
        chorusTuningFinal = 0;
        
    } else {
        chorusTimingFinal = chorusTimingBase;
        chorusMixingFinal = chorusMixingBase;
        chorusTuningFinal = chorusTuningBase;
    }
    
    $('#result-field').val(((chorusTuningFinal + chorusTimingFinal + chorusMixingFinal + amountOfAdditionalLines) * genreModifier).toFixed(0));
}