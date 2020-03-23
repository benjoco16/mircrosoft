$(document).ready(function() {

    $('.opening-overlay').addClass('animate');

    setTimeout( function () {
        $('.ad_text-1').animate({
            top: 0,
            opacity: 1
        },{ 
            duration: 400,
            complete: function () {
                $('.ad-logo').fadeIn(1000);
    
                setTimeout ( function () {
                    $('.see-details').animate ({
                        top: 0,
                        opacity: 1
                    })
                }, 600)
    
                setTimeout ( function () {
                    $('.upgrade-cta').animate ({
                        opacity: 1
                    })
                }, 1000);

                changeText();
            }
        });
    }, 200 );

    function changeText () {
        setTimeout( function () {
            $('.ad_text-1').animate({
                left: '15px',
                opacity: 0
            }, { duration: 500 })
        }, 2000);
    
        setTimeout( function () {
            $('.ad_text-2').animate({
                left: '0',
                opacity: 1
            }, { duration: 600 })
        }, 2100);
    }

    
});