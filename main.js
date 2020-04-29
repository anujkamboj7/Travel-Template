$(document).ready(function() {
	$(".menu-icon").click(function() {
		$(".mobile-menu").toggleClass("active");
		$(".overlay").toggleClass("active");
	});

	// close icon
	$(".close-icon").click(function() {
		$(".mobile-menu").removeClass("active");
		$(".overlay").removeClass("active");
	});

	// nav-item
	$(".nav-list .menu-item").click(function(e) {
		$(".sub-menu-large").slideToggle(250);
		e.stopPropagation();
	});

	$(document).click(function(e) {
		if (!$(e.target).is(".sub-menu-large")) {
			$(".sub-menu-large").hide();
		}
	});

	// destinations

	$(".destinations .menu-item").on("click", function() {
		$(".sub-menu-mobile").slideToggle(300);
		$(".menu .sub-menu-mobile").hide();
	});

	$(".menu .menu-item:nth-child(1)").on("click", function() {
		$(".sub-menu-mobile").slideToggle(300);
		$(".destinations .sub-menu-mobile").hide();
		$(".menu .menu-item:nth-child(2) .sub-menu-mobile").hide();
	});

	$(".menu .menu-item:nth-child(2)").on("click", function() {
		$(".menu .menu-item:nth-child(2) .sub-menu-mobile").slideToggle(300);
		$(".destinations .sub-menu-mobile").hide();
		$(".menu .menu-item:nth-child(1) .sub-menu-mobile").hide();
	});

	// menu

	// owlCarousel

	$(".owl-carousel").owlCarousel({
		dots: true,
		responsiveClass: true,
		nav: true,
		responsive: {
			0: {
				items: 1,
				nav: true,
				loop: false
			},
			767.97: {
				items: 2,
				nav: true,
				loop: false
			},
			1000: {
				items: 3,
				nav: true,
				loop: false
			}
		}
	});
	$(".owl-prev").html('<ion-icon name="arrow-back-outline" ></ion-icon>');
	$(".owl-next").html('<ion-icon name="arrow-forward-outline"></ion-icon>');
});
