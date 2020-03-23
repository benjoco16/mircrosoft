$(document).ready(function() {

    $('.opening-overlay').addClass('animate');

    setTimeout( function () {

        $('.ad_text-1').animate({
            top: 0,
            opacity: 1
        });

        setTimeout( function () {
            $('.see-details').animate ({
                top: 0,
                opacity: 1
            },{ 
                duration: 400,
                complete: function () {
    
                    $('.ad-logo').animate ({
                        top: 0,
                        opacity: 1
                    }, 1300);
    
                    setTimeout ( function () {
                        $('.upgrade-cta').animate ({
                            opacity: 1
                        })
                    }, 1000);

                    changeText();
                }
            });
        }, 100 )

        
    }, 200 )

    function changeText () {
        setTimeout( function () {
            $('.ad_text-1').animate({
                left: '15px',
                opacity: 0
            }, { duration: 400 })
        }, 2700);
    
        setTimeout( function () {
            $('.ad_text-2').animate({
                left: '0',
                opacity: 1
            }, { duration: 400 })
        }, 2800);
    }

    
});