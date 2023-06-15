var controller = new ScrollMagic.Controller({ addIndicators: true });

// create a scene
new ScrollMagic.Scene({
  triggerElement: ".seconde",
  //   offset: 200,
})
  .setClassToggle(".seconde", "show") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

var controller2 = new ScrollMagic.Controller({ addIndicators: true });

// create a scene
new ScrollMagic.Scene({
  triggerElement: ".third",
  //   offset: 200,
})
  .setClassToggle(".third", "show") // pins the element for the the scene's duration
  .addTo(controller2); // assign the scene to the controller

var controller = new ScrollMagic.Controller({ addIndicators: true });

// create a scene
new ScrollMagic.Scene({
  triggerElement: ".fourth",
  //   offset: 200,
})
  .setClassToggle(".fourth", "show") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller
