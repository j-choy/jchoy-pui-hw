anime({
    targets: '#milk-test',
    // points: [
    //     {value: '109 0.5H0.5C4.33333 7.66667 20.3 22 53.5 22C86.7 22 104.333 7.66667 109 0.5'},
    //     {value: '154 0H0C5.44086 10 28.1032 30 75.2258 30C122.348 30 147.376 10 154 0'}
    // ],
    // easing: 'easeOutQuad',
    // duration: 2500,
    // loop: true,
    points: [
      { value: '300 200,600 200,550 350,350 350'},
      { value: '400 200,600 200,550 350,200 350'},
    ],
    easing: 'easeOutQuad',
    duration: 2500,
  })


  var milkHover = document.querySelectorAll('#steps-image-hover');

  function animateButton(el, scale, duration, elasticity) {
    anime.remove(el);
    anime({
      targets: el,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    });
  }
  
  function enterButton(el) {
    animateButton(el, 1.1, 800, 500)
  };
  
  function leaveButton(el) {
    animateButton(el, 1.0, 600, 300)
  };
  
  for (var i = 0; i < milkHover.length; i++) {
    milkHover[i].addEventListener('mouseenter', function(e) {
      enterButton(e.target);
    }, false);
    
    milkHover[i].addEventListener('mouseleave', function(e) {
      leaveButton(e.target)
    }, false);  
  }
