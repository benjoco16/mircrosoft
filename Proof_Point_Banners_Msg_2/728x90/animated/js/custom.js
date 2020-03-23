$(document).ready(function() {

    $('.opening-overlay').addClass('animate');

    setTimeout( function () {
        animateElements();
    }, 100);
});

function animateCta () {
    setTimeout( function () {
        $('.upgrade-cta span').animate({
            opacity: 1
        })
    }, 700);
}

function changeText () {
    setTimeout( function () {
        $('.ad_text-1').animate({
            left: '15px',
            opacity: 0
        }, { duration: 500 })
    }, 1500);

    setTimeout( function () {
        $('.ad_text-2').animate({
            left: '0',
            opacity: 1
        }, { duration: 600 })
    }, 1600);
}


function animateElements () {
    $('.ad_text-1').animate({
        top: 0,
        opacity: 1
    },{ duration: 400 });

    setTimeout ( function () {
        $('.ad-text .see-details').animate({
            top: 0,
            opacity: 1
        }, {
            duration: 400,
            complete: function () {
                $('.ad-logo').fadeIn(1000);
                animateCta();
                changeText();
            }
        })
    }, 200 );
}