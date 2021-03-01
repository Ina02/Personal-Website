$(window).on("load",function() {
	$(".loader").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	}); 
	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
})


$(document).ready(function() {
	var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-item a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed",{
		strings: ["Product Engineer","Cosmophilic","Lifelong Learner","Aspiring Minimalist"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
	

	const options = {
		bottom: '32px', // default: '32px'
		right: '32px', // default: '32px'
		left: 'unset', // default: 'unset'
		time: '0.3s', // default: '0.3s'
		mixColor: '#fff', // default: '#fff'
		backgroundColor: '#fff',  // default: '#fff'
		buttonColorDark: '#100f2c',  // default: '#100f2c'
		buttonColorLight: '#fff', // default: '#fff'
		saveInCookies: true, // default: true,
		label: '🌓', // default: ''
		autoMatchOsTheme: true // default: true
	  }
	  
	  const darkmode = new Darkmode(options);
	  darkmode.showWidget();
	
	
	

	$("[data-fancybox]").fancybox();
	
	$("#filters a").click(function() {
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");
		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		return false;

	});

	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("#href");
		var targetPosition = $(targetElement).offset().top;
		$("html,body").animate({ scrollTop: targetPosition - 50 }, "slow");
	});


	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll",stickyNavigation);

	function stickyNavigation() {
		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}

	}
	
});
particlesJS.load('particles-js', 'js/particles.json', function() {
	console.log('callback - particles.js config loaded');
  });

