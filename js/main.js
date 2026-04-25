gsap.registerPlugin(ScrollTrigger);


gsap.from(".header", {
  opacity: 0,
  y: -20,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".title", {
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".subtitle", {
  opacity: 0,
  y: 25,
  duration: 1,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".btn", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.4,
  ease: "power3.out"
});

gsap.from(".hero-image img", {
  opacity: 0,
  scale: 0.75,
  rotation: -15,
  duration: 1.5,
  delay: 0.2,
  ease: "power3.out"
});



gsap.utils.toArray(".story").forEach((section) => {

  gsap.from(section.querySelector("h2"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(section.querySelector("p"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.1,
    ease: "power3.out"
  });

});



const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");

let open = false;

function openMenu() {

  open = true;
  hamburger.classList.add("active");

  document.body.style.overflow = "hidden";

  menu.style.pointerEvents = "all";

  gsap.to(menu, {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    ease: "power3.out"
  });

  gsap.fromTo(
    ".mobile-menu a, .mobile-menu button",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out"
    }
  );
}

function closeMenu() {

  open = false;
  hamburger.classList.remove("active");

  document.body.style.overflow = "";

  gsap.to(menu, {
    opacity: 0,
    scale: 1.05,
    duration: 0.35,
    ease: "power3.in",
    onComplete: () => {
      menu.style.pointerEvents = "none";
    }
  });
}

hamburger.addEventListener("click", () => {
  open ? closeMenu() : openMenu();
});