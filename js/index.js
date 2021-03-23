gsap.registerPlugin(ScrollTrigger);

const divs = document.querySelectorAll("#sektion1 > div");

gsap.from(divs, {
  x: 100,
  duration: 3,
  stagger: 1,
  ScrollTrigger: {
    trigger: "#sektion1",
    start: "top center",
  },
});

ScrollTrigger.create({
  trigger: "divs",

  toggleClass: "active",
  //   toggleClass: { targets: "#produkt1 h1", className: "active" },
  once: true,
  markers: true,
});

const p = document.querySelector("p");

ScrollTrigger.create({
  trigger: p,
  start: "top center",
  toggleClass: "animate__headShake",
  once: true,
  markers: true,
});
