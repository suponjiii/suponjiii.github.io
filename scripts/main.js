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
    rock = 1.1,
    electro = 1.2;
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
        
        
        var typeOfMix = $('#typeOfMix').val();  
        var genre = $('#genre').val();
        var genreModifier = getGenre(genre);
        console.log(genreModifier)
        var amountOfLines = $('#amountOfLines').val();
        var amountOfAdditionalLines = $('#amountOfAdditionalLines').val();
        
        if(amountOfAdditionalLines === "") {
            $('#amountOfAdditionalLines').css("border-color", "")
            $('#additionalError').css("visibility", "hidden")
            amountOfAdditionalLines = 0; 
        } else if (isNaN(amountOfAdditionalLines)) {
            $('#amountOfAdditionalLines').css("border-color", "red")
            $('#additionalError').css("visibility", "visible")
            return;
        } else {
            $('#amountOfAdditionalLines').css("border-color", "")
            $('#additionalError').css("visibility", "hidden")
            amountOfAdditionalLines = parseInt(amountOfAdditionalLines)
        }

        //Überprüfe Art des Mixes und rufe passende Funktionen auf (mit passenden Parametern)
        if (amountOfLines === "Solo"){
            solo(typeOfMix, amountOfAdditionalLines, genreModifier);
        } else if (amountOfLines === "Duet") {
            duet(typeOfMix, amountOfAdditionalLines, genreModifier);
        } else if (amountOfLines === "Trio") {
            trio(typeOfMix, amountOfAdditionalLines, genreModifier);
        } else if (amountOfLines === "Chorus"){
            var amountOfChorusLines = $('#amountOfChorusLines').val();
            if (amountOfChorusLines == "" || isNaN(amountOfChorusLines)) {
                handleLinesError()
            } else {
                if(parseInt(amountOfChorusLines) < 4) {
                    handleLinesError()
                } else {
                    $('#amountOfChorusLines').css("border-color", "")
                    $('#faultyChorusLines').css("visibility", "hidden")
                    chorus(typeOfMix, amountOfChorusLines, amountOfAdditionalLines, genreModifier);
                }
            }
            
        }
    });
    
    
   $('#amountOfLines').click(function(){
        
        if($('#amountOfLines').val() == "Chorus") {
            $('#amountOfChorusLines').attr("disabled", false)
        } else {
            $('#amountOfChorusLines').attr("disabled", true)
        }
    });  
})


var menu = document.querySelector('#sidebar');
var navbar = document.querySelector(".navbar-start");
scrollSpy(menu, 2000, 'easeInOutQuint');
scrollSpy(navbar, 2000, 'easeInOutQuint');

function handleLinesError() {
    $('#amountOfChorusLines').css("border-color", "red")
    $('#faultyChorusLines').css("visibility", "visible")
}

function getGenre(genre) {
    let genreModifier;
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
    return genreModifier;
}
function solo(typeOfMix, amountOfAdditionalLines, genreModifier) {
    let soloTuningFinal,
        soloTimingFinal,
        soloMixingFinal,
        result;
    
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
        console.log("Mixing is " + soloMixingFinal)
        
    } else {
        soloTimingFinal = soloTimingBase;
        soloMixingFinal = soloMixingBase;
        soloTuningFinal = soloTuningBase;
        soloDiscountFinal = 0.9;
    }
    result = calculatePrice(soloTuningFinal, soloTimingFinal, soloMixingFinal, amountOfAdditionalLines, genreModifier, soloDiscountFinal)
    $('#result-field').val(result);
}
 

function duet(typeOfMix, amountOfAdditionalLines, genreModifier) {
    let duetTuningFinal,
        duetTimingFinal,
        duetMixingFinal,
        result;
    
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
    result = calculatePrice(duetTuningFinal, duetTimingFinal, duetMixingFinal, amountOfAdditionalLines, genreModifier, duetDiscountFinal)
     $('#result-field').val(result);
}


function trio(typeOfMix, amountOfAdditionalLines, genreModifier) {
    var trioTuningFinal,
        trioTimingFinal,
        trioMixingFinal,
        result;
    
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
    result = calculatePrice(trioTuningFinal, trioTimingFinal, trioMixingFinal, amountOfAdditionalLines, genreModifier, trioDiscountFinal)
     $('#result-field').val(result);
}


function chorus(typeOfMix, amountOfChorusLines, amountOfAdditionalLines, genreModifier) {
    let chorusTuningBase = trioTuningBase + (amountOfChorusLines - 3),
        chorusTimingBase = trioTimingBase + (amountOfChorusLines - 3),
        chorusMixingBase = trioMixingBase + (amountOfChorusLines - 3),
        chorusDiscount = 1,
        chorusTuningFinal,
        chorusTimingFinal,
        chorusMixingFinal,
        result;

    if(typeOfMix === "TuningOnly") {
        chorusTimingFinal = 0;
        chorusMixingFinal = 0;
        chorusTuningFinal = chorusTuningBase;
        chorusDiscount = 1;
        
    } else if(typeOfMix === "TimingOnly") {
        chorusTimingFinal = chorusTimingBase;
        chorusMixingFinal = 0;
        chorusTuningFinal = 0;
        chorusDiscount = 1;
    } else if(typeOfMix === "MixingOnly") {
        chorusTimingFinal = 0;
        chorusMixingFinal = chorusMixingBase;
        chorusTuningFinal = 0;    
        chorusDiscount = 1;
    } else {
        chorusTimingFinal = chorusTimingBase;
        chorusMixingFinal = chorusMixingBase;
        chorusTuningFinal = chorusTuningBase;
        chorusDiscount = 0.9;
    }
    result = calculatePrice(chorusTuningFinal, chorusTimingFinal, chorusMixingFinal, amountOfAdditionalLines, genreModifier, chorusDiscount)
    $('#result-field').val(result);
}

function calculatePrice(tuning, timing, mixing, lines, genre, discount) {
    return Math.round( ( (tuning + timing + mixing + lines) * genre ) * discount)
}