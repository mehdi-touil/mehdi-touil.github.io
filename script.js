var tween = gsap.from(".homeimg", { opacity: 0, duration: 2, y: -100 });

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  paddingTop: "0px",
  anchors: ["home", "about", "projects", "", "", "", "", "", "", "contact"],
  keyboardScrolling: true,
  lazyLoading: true,
  fitToSection: true,
  afterLoad: function (origin, destination, direction) {
    tween.play();
  },
});
var hometxt = document.querySelector(".hometext").children;
for (let index = 0; index < hometxt.length; index++) {
  const element = hometxt[index];
  if (index < 4) {
    gsap.from(element, {
      opacity: 0,
      duration: 0.7,
      delay: index / 2,
      x: -100,
    });
  } else {
    gsap.from(element.children[0], {
      opacity: 0,
      duration: 0.7,
      delay: index / 2,
      y: 100,
    });
    gsap.from(element.children[1], {
      opacity: 0,
      duration: 0.7,
      delay: index / 2 + 0.4,
      y: 100,
    });
  }
}

particlesJS.load("projectw", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});
var header = document.querySelector(".header");
gsap.from(header, {
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
  y: -50,
});

// new Glide(".glide", {
//   type: "carousel",
//   focusAt: "center",
//   perView: 8,
// }).mount();

var glide = new Glide(".glide", {
  type: "carousel",
  autoplay: 2000,
  hoverpause: false,
  perView: 8,
  breakpoints: {
    1024: {
      perView: 6,
    },
    600: {
      perView: 3,
    },
  },
});

glide.mount();
particlesJS.load("home", "assets/particlesH.json", function () {
  console.log("callback - particles.js config loaded");
});
