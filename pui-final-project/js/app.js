anime({
    targets: '.circle',
    translateX: 250, scale:2,
    // loop: true,
})


// TYPEWRITING ANIMATION

const typewriterText = document.getElementById('typewriter-animated');
const animatedText = "Welcome! Select a drink to see how it's made.";

function animationTypewriter() {

  anime({
    targets: typewriterText,
    opacity: 1,
    easing: 'linear',
    duration: 500,
  });

  anime({
    targets: typewriterText,
    innerHTML: [0, animatedText.length],
    easing: 'linear',
    round: 1,
    delay: 500,
    duration: 4000,
    update: function () {
      typewriterText.innerHTML = animatedText.substring(0, Math.round(typewriterText.innerHTML));
    },
  });

}

setTimeout(animationTypewriter, 150);


// HOVER ANIMATION 

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


