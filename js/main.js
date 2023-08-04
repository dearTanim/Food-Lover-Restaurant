( function ($) {
'use strict';

    // Header


    $(window).resize(function(){

        var screenSize = $(window).width();

        if( screenSize > 768 ){

            $('.menu').removeAttr('style');
        }

   });


    $(window).scroll(function(){

        if( $(window).scrollTop() > 1000 ){

            $('.top-btn').show();
        }

        else{
            $('.top-btn').hide();
        }
        
    });

    $('.top-btn').on('click', function(){

        $('html').animate({
            scrollTop : 0
        })

    });


    $('.menu ul li a').on('click', function(){

        $('.menu ul li ul').slideUp();
        $(this).siblings('ul').slideDown();
        $('.blank-li').hide();
        $(this).parent('li').children('.blank-li').show();
    });

    $('.blank-li').on('click', function(){
        $('.menu ul li ul').slideUp();
        $(this).hide();
    })


    $('#sidebar-btn').on( 'click', function(){
		$('.sidebar-menu').animate({
			left:0
		});

	});

	$('.sidebar-close').on( 'click', function(){
		$('.sidebar-menu').animate({
			left:-200
		});

	});


    $('.sidebar-menu ul li a').on('click', function(){

        $('.sidebar-menu ul li ul').slideUp();
        $(this).siblings('ul').slideDown();
        $('.blank-li').hide();
        $(this).parent('li').children('.blank-li').show();
    });

    $('.blank-li').on('click', function(){
        $('.sidebar-menu ul li ul').slideUp();
        $(this).hide();
    })

    $('#sidebar-btn-2').on( 'click', function(){
        $('.sidebar-menu-2').show();
        $('.sidebar-menu-2').animate({
            right:0
        });

    });

    $('.sidebar-close-2').on( 'click', function(){
        $('.sidebar-menu-2').animate({
            right:-200
        });
    })

    $('.sidebar-menu-2 ul li a').on('click', function(){
        $('.sidebar-menu-2 ul li ul').slideUp();
        $(this).siblings('ul').slideDown();
        $('.blank-li').hide();
        $(this).parent('li').children('.blank-li').show();
    });

    $('.blank-li').on('click', function(){
        $('.sidebar-menu-2 ul li ul').slideUp();
        $(this).hide();
    })


    // wow js

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );

    wow.init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    
    $('.order-btn').hover( function(){
        $('.order-btn').removeClass('animate__infinite');
    });



}) ( jQuery );
