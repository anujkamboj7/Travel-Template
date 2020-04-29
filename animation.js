if ($(window).width() >= 992) {
	gsap.from(".hero .col-lg-6:nth-child(1)", {
		y: 100,
		ease: "Power.EaseInOut",
		autoAlpha: 0,
		delay: 0.5
	});

	gsap.from(".hero .col-lg-6:nth-child(2)", {
		x: 100,
		ease: "Power.EaseInOut",
		autoAlpha: 0,
		delay: 1
	});

	gsap.from(".popular-cities", {
		y: 100,
		ease: "Power.EaseInOut",
		autoAlpha: 0,
		delay: 1.5
	});

	var controller = new ScrollMagic.Controller();

	var timeline1 = gsap.timeline();

	timeline1
		.from(".get-the-app .col-lg-6:nth-child(1)", {
			y: 100,
			ease: "Power.EaseInOut",
			autoAlpha: 0
		})
		.from(".get-the-app .col-lg-6:nth-child(2)", {
			x: 100,
			ease: "Power.EaseInOut",
			autoAlpha: 0
		});

	var scene = new ScrollMagic.Scene({
		triggerElement: ".get-the-app",
		tiggerHook: 0.3,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline1)
		.addTo(controller);

	var timeline2 = gsap.timeline();

	timeline2.from(".inspiration .col-lg-4", {
		y: 100,
		ease: "Power.EaseInOut",
		autoAlpha: 0,
		stagger: 0.2
	});

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".inspiration",
		tiggerHook: 0.3,
		reverse: false
	})
		// .addIndicators()
		.setTween(timeline2)
		.addTo(controller);
}
