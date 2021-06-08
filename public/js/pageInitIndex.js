$(window).on("load", function () {
    // init controller
    var controller = new ScrollMagic.Controller();

    // build scenes
    new ScrollMagic.Scene({
      triggerElement: ".home-flash",
      triggerHook: 0,
      duration: $(".home-flash-section-dark").outerHeight(),
    })
      .setClassToggle(".home-flash", "dark-horizontal")
      // .addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: ".footer", triggerHook: ".3" })
      .setClassToggle(".home-flash", "dark-horizontal")
      .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: ".footer", triggerHook: ".3" })
      .setClassToggle(".flash-item-nav", "d-none")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".home-flash",
      triggerHook: 1,
      duration: "100%",
    })
      .setTween(".item-nav-1", { top: "130px", ease: Linear.easeNone })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-2",
      triggerHook: 1,
      duration: $(window).height() - 280 - 180,
    })
      .setTween(".item-nav-2", { top: "180px", ease: Linear.easeNone })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-3",
      triggerHook: 1,
      duration: $(window).height() - 230 - 230,
    })
      .setTween(".item-nav-3", { top: "230px", ease: Linear.easeNone })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-4",
      triggerHook: 1,
      duration: $(window).height() - 180 - 280,
    })
      .setTween(".item-nav-4", { top: "280px", ease: Linear.easeNone })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-5",
      triggerHook: 1,
      duration: $(window).height() - 130 - 330,
    })
      .setTween(".item-nav-5", { top: "330px", ease: Linear.easeNone })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-6",
      triggerHook: 1,
      duration: $(window).height() - 80 - 380,
    })
      .setTween(".item-nav-6", { top: "380px", ease: Linear.easeNone })
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".home-flash",
      triggerHook: 1,
      duration: $(".flash-pin-2").offset().top,
    })
      .setClassToggle(".item-nav-1", "active")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-2",
      triggerHook: 1,
      duration:
        $(".flash-pin-3").offset().top - $(".flash-pin-2").offset().top,
    })
      .setClassToggle(".item-nav-2", "active")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-3",
      triggerHook: 1,
      duration:
        $(".flash-pin-4").offset().top - $(".flash-pin-3").offset().top,
    })
      .setClassToggle(".item-nav-3", "active")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-4",
      triggerHook: 1,
      duration:
        $(".flash-pin-5").offset().top - $(".flash-pin-4").offset().top,
    })
      .setClassToggle(".item-nav-4", "active")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-5",
      triggerHook: 1,
      duration:
        $(".flash-pin-6").offset().top - $(".flash-pin-5").offset().top,
    })
      .setClassToggle(".item-nav-5", "active")
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".flash-pin-6",
      triggerHook: 1,
      duration:
        $(".flash-pin-6").closest(".flash-item").outerHeight() +
        $(".footer").outerHeight(),
    })
      .setClassToggle(".item-nav-6", "active")
      .addTo(controller);
  });

  $('#firstCarousle').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });

  $('#owl-demo').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }

