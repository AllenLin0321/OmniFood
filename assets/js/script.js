$(document).ready(function () {


    // For the sticky navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });

    // Scroll on buttons
    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-price').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    $('.js--scroll-to-home').click(function () {
        $('html,body').animate({
            scrollTop: $('header').offset().top
        }, 500);
    });



    //Navigation scroll
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // Feature fadeIn
    $('.js--wp-1').waypoint(function(){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset:'50%'

    });

    // App 
    $('.js--wp-2').waypoint(function(){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset:'50%'
    });

    // Cities
    $('.js--wp-3').waypoint(function(){
        $('.js--wp-3').addClass('animated fadeIn');
    },{
        offset:'50%'
    });

    // Price plans
    $('.js--wp-4').waypoint(function(){
        $('.js--wp-4').addClass('animated fadeIn');
    },{
        offset:'50%'
    });

    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        
        var icon = $('.js--nav-icon i');

        if(icon.hasClass('fas fa-bars')){
            icon.removeClass('fas fa-bars');
            icon.addClass('fas fa-times');
        }else{
            icon.removeClass('fas fa-times');
            icon.addClass('fas fa-bars');
        }
        
        nav.slideToggle(200);


    });

});