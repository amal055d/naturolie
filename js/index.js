gsap.registerPlugin(ScrollTrigger);

const divs = document.querySelectorAll("#sektion1 > div");

gsap.from(divs, {
  opacity: 0,
  x: 100,
  duration: 3,
  stagger: 1,
  ScrollTrigger: {
    trigger: "#sektion1",
    start: "top 50%",
    end: "bottom 75%",
    markers: true,
  },
});
