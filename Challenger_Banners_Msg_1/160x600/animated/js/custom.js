$(document).ready(function() {

    $('.opening-overlay').addClass('animate');

    setTimeout( function () {
        $('.ad_text-1, .see-details').animate({
            top: 0,
            opacity: 1
        },{ 
            duration: 500,
            complete: function () {
                $('.ad-logo').animate ({opacity: 1}, { duration: 1500 })
    
                setTimeout ( function () {
                    $('.upgrade-cta').animate ({ opacity: 1 }, { duration: 600 })
                }, 1000)

                changeText();
            }
        });
    }, 100)

    function changeText () {
        setTimeout( function () {
            $('.ad_text-1').animate({
                left: '15px',
                opacity: 0
            }, { duration: 400 })
        }, 2400);
    
        setTimeout( function () {
            $('.ad_text-2').animate({
                left: '0',
                opacity: 1
            }, { duration: 400 })
        }, 2500);
    }

    
});