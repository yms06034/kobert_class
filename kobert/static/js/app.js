function fitElementToParent(el, padding) {
  var timeout = null;
  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {scale: 1});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}


var sphereAnimation = (function() {

  var sphereEl = document.querySelector('.sphere-animation');
  var spherePathEls = sphereEl.querySelectorAll('.sphere path');
  var pathLength = spherePathEls.length;
  var hasStarted = false;
  var aimations = [];

  fitElementToParent(sphereEl);

  // breathAnimation = 기본
  var breathAnimation = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(255, 255, 255, .8)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  // breathAnimation2 = 기쁨
  var breathAnimation2 = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(255, 51, 153, .8)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  // breathAnimation3 = 불안
  var breathAnimation3 = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(127, 0, 255, .8)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  // breathAnimation4 = 슬픔
  var breathAnimation4 = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(0, 0, 255, .8)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  // breathAnimation5 = 당황
  var breathAnimation5 = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(255, 125, 24, .8)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  // breathAnimation6 = 상처
  var breathAnimation6 = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(102, 0, 0, .8)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  // breathAnimation7 = 분노
  var breathAnimation7 = anime({
    begin: function() {
      for (var i = 0; i < pathLength; i++) {
        aimations.push(anime({
          targets: spherePathEls[i],
          stroke: {value: ['rgba(255, 0, 0, .8)', 'rgba(80,80,80,.35)'], duration: 500},
          translateX: [2, -4],
          translateY: [2, -4],
          easing: 'easeOutQuad',
          autoplay: false
        }));
      }
    },
    update: function(ins) {
      aimations.forEach(function(animation, i) {
        var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
        animation.seek(animation.duration * percent);
      });
    },
    duration: Infinity,
    autoplay: false
  });

  var introAnimation = anime.timeline({
    autoplay: false
  })
  .add({
    targets: spherePathEls,
    strokeDashoffset: {
      // value: [anime.setDashoffset, 0],
      // duration: 3900,
      easing: 'easeInOutCirc',
      // delay: anime.stagger(190, {direction: 'reverse'})
    },
    duration: 2000,
    // delay: anime.stagger(60, {direction: 'reverse'}),
    easing: 'linear'
  }, 0);

  var shadowAnimation = anime({
      targets: '#sphereGradient',
      x1: '25%',
      x2: '25%',
      y1: '0%',
      y2: '75%',
      duration: 30000,
      easing: 'easeOutQuint',
      autoplay: false
    }, 0);

  function init() {
    introAnimation.play();
    breathAnimation.play();
    shadowAnimation.play();
  }
  function init_2() {
    introAnimation.play();
    breathAnimation2.play();
    shadowAnimation.play();
  }
  function init_3() {
    introAnimation.play();
    breathAnimation3.play();
    shadowAnimation.play();
  }
  function init_4() {
    introAnimation.play();
    breathAnimation4.play();
    shadowAnimation.play();
  }
  function init_5() {
    introAnimation.play();
    breathAnimation5.play();
    shadowAnimation.play();
  }
  function init_6() {
    introAnimation.play();
    breathAnimation6.play();
    shadowAnimation.play();
  }
  function init_7() {
    introAnimation.play();
    breathAnimation7.play();
    shadowAnimation.play();
  }
  
  var form = document.getElementById('form');
  var input = document.querySelectorAll('.test2');
  var input = document.querySelectorAll('.test3');

  var msg = input.innerText;
  console.log(msg);
  if (msg === '기쁨') {
    init_2();
  }else if (msg === '불안'){
    init_3();
  }else if (msg === '슬픔'){
    init_4();
  }else if (msg === '당황'){
    init_5();
  }else if (msg === '상처'){
    init_6();
  }else if (msg === '분노'){
    init_7();
  }

  init();

  const btn = document.getElementById('btn')
  btn.addEventListener('click', timedText)
  function timedText() {
    setTimeout(h3, 10000) 
    setTimeout(h2, 17000) 
    setTimeout(h3, 22000) 
    setTimeout(h1, 30000) 
    setTimeout(h5, 40000) 
    setTimeout(h6, 50000) 
    setTimeout(h3, 60000) 
    setTimeout(h2, 67000) 
    setTimeout(h1, 74000)
  }

  function h1() {
    init_2();
  }
  function h2() {
    init_3();
  }
  function h3() {
    init_4();
  }
  function h4() {
    init_5();
  }
  function h5() {
    init_6();
  }
  function h6() {
    init_7();
  }

})();