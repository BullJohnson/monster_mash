"use strict";

// William S. Johnson, Jr | 11-05-23 | DPR214 - Effects and Animaton (Monster Mash)

    // Audio Constructor for thunder sounds. Won't be heard until user interacts, though.
let thunder = new Audio("images/thunder_crack.mp3");
let rumble = new Audio("images/rumble_rain.wav");

    // three lightning flashes, set to loop at different speeds (to look random)
function lightning_one(){
    $("#lightning1").fadeIn(250).fadeOut(250);
    thunder.play(); //thunder sound strikes, when this one flashes
    setTimeout(lightning_one,15000);
};
function lightning_two(){
    $("#lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout(lightning_two,5000);
};
function lightning_three(){
    $("#lightning3").fadeIn(250).fadeOut(250);
    setTimeout(lightning_three,4000);
};


$(document).ready( () => {
    //On doc load, lightning flashes are called and low thunder sound called within an interval loop
    lightning_one();
    setInterval( () => {
        rumble.play();
    },0);
    
    setTimeout(() => {
        lightning_two();
    }, 2000);
    setTimeout(() => {
        lightning_three();
    }, 2500);
    
    let headClix = 0, eyeClix = 0, noseClix = 0, mouthClix = 0;
    
//head animate functions and click counters
$("#head").click( () => {
        if (headClix < 9) {
            $("#head").animate({left: "-=367"},500);
            headClix++;
        }  //else {
            //$("#head").animate({left: 0},500);
            //headClix = 0;
        //}    
    });     
    $('#head').on('contextmenu', function(e) {
        e.preventDefault();
        if (headClix > 0) {
            $(this).animate({ left: "+=367" }, 500);
            headClix--;
        }
        return false;
    });     //end head functions


    //eye animate functions and click counters
    $("#eyes").click( () => {
        if (eyeClix < 9) {
            $("#eyes").animate({left: "-=367"},500);
            eyeClix++;
        }   //else {
            //$("#eyes").animate({left: 0},500);
            //eyeClix = 0;
        //}
    });
    $('#eyes').on('contextmenu', function(e) {
        e.preventDefault();
        if (eyeClix > 0) {
            $(this).animate({ left: "+=367" }, 500);
            eyeClix--;
        }
        return false;
    });     //end eye functions


      //nose animate functions and click counters
    $("#nose").click( () => {
        if (noseClix < 9) {
            $("#nose").animate({left: "-=367"},500);
            noseClix++;
        }   //else {
            //$("#nose").animate({left: 0},500);
            //noseClix = 0;
        //}
    });
    $('#nose').on('contextmenu', function(e) {
        e.preventDefault();
        if (noseClix > 0) {
            $(this).animate({ left: "+=367" }, 500);
            noseClix--;
        }
        return false;
    });     //end nose click counter


      //mouth animate functions and click counters
    $("#mouth").click( () => {
        if (mouthClix < 9) {
            $("#mouth").animate({left: "-=367"},500);
            mouthClix++;
        }   //else {
            //$("#mouth").animate({left: 0},500);
            //mouthClix = 0;
        //}
    });
    $('#mouth').on('contextmenu', function(e) {
        e.preventDefault();
        if (mouthClix > 0) {
            $(this).animate({ left: "+=367" }, 500);
            mouthClix--;
        }
        return false;
    });     //end mouth click counter

});     //end document ready
