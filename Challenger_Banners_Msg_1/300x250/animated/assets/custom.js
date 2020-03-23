$(document).ready(function() {

    $('.opening-overlay').addClass('animate');

    setTimeout( function () {
        $('.ad-text p').animate({
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
                }, 1000)
            }
        });
    }, 200 )

    
});