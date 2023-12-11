anime({
    targets: '.circle',
    translateX: 250, scale:2,
    // loop: true,
})

anime({
    targets: '#milk-test',
    // points: [
    //     {value: '109 0.5H0.5C4.33333 7.66667 20.3 22 53.5 22C86.7 22 104.333 7.66667 109 0.5'},
    //     {value: '154 0H0C5.44086 10 28.1032 30 75.2258 30C122.348 30 147.376 10 154 0'}
    // ],
    // easing: 'easeOutQuad',
    // duration: 2500,
    // loop: true,
    points: '300 200,600 200,550 350,350 350',
    scale: 1,
    baseFrequency: 0,
})

var coffeeSelection = document.querySelectorAll('.coffee-img');

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

for (var i = 0; i < coffeeSelection.length; i++) {
  coffeeSelection[i].addEventListener('mouseenter', function(e) {
    enterButton(e.target);
  }, false);
  
  coffeeSelection[i].addEventListener('mouseleave', function(e) {
    leaveButton(e.target)
  }, false);  
}
