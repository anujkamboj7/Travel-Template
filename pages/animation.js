if ($(window).width() >= 992) {
	var controller = new ScrollMagic.Controller();

	// timeline1
	var timeline1 = gsap.from(".stay .showcase", 1, {
		y: 100,
		autoAlpha: 0,
		ease: "Power3.easeInOut",
		delay: -0.4
	});

	// scene1
	var scene1 = new ScrollMagic.Scene({
		triggerElement: ".stay",
		triggerHook: 0.5,
		reverse: false
	})

		.setTween(timeline1)
		.addTo(controller);

	var controller = new ScrollMagic.Controller();

	// timeline2
	var timeline2 = gsap.from(".food .showcase", 1, {
		y: 100,
		autoAlpha: 0,
		ease: "Power3.easeInOut",
		delay: -0.4
	});

	// scene2
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".food",
		triggerHook: 0.5,
		reverse: false
	})

		.setTween(timeline2)
		.addTo(controller);

	// timeline3
	var timeline3 = gsap.from(".see-and-do .showcase", 1, {
		y: 100,
		autoAlpha: 0,
		ease: "Power3.easeInOut",
		delay: -0.4
	});

	// scene3
	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".see-and-do",
		triggerHook: 0.5,
		reverse: false
	})

		.setTween(timeline3)
		.addTo(controller);

	// timeline4
	var timeline4 = gsap.from(".popular-cities .col-lg-3", 1, {
		y: 100,
		autoAlpha: 0,
		ease: "Power3.easeInOut",
		delay: -0.4
	});

	// scene4
	var scene4 = new ScrollMagic.Scene({
		triggerElement: ".popular-cities",
		triggerHook: 0.5,
		reverse: false
	})

		.setTween(timeline4)
		.addTo(controller);
}
