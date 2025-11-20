// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (height > 0) ? (scrollTop / height) * 100 : 0;
  const el = document.getElementById("scrollProgress");
  if (el) el.style.width = scrolled + "%";
});

// Particles & AOS init
window.addEventListener("load", () => {
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 60 },
        color: { value: ["#007acc", "#00c4ff"] },
        shape: { type: "circle" },
        opacity: { value: 0.35 },
        size: { value: 3 },
        line_linked: { enable: true, opacity: 0.18 },
        move: { enable: true, speed: 1.2 }
      },
      interactivity: { events: { onhover: { enable: true, mode: "repulse" } } }
    });
  }

  if (window.AOS) {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }
});

// Project filter
function filterProjects(category, event){
  const cards = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (event && event.target) event.target.classList.add("active");
  cards.forEach(card => {
    const show = category === "all" || card.classList.contains(category);
    card.classList.toggle("hide", !show);
  });
}

// Modals
function openModal(id){ const m = document.getElementById(id); if (m) m.style.display = "block"; }
function closeModal(id){ const m = document.getElementById(id); if (m) m.style.display = "none"; }
window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal, .cert-modal").forEach(m => {
    if (e.target === m) m.style.display = "none";
  });
});

// Contact form (demo)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }
});
// Ensure nav state is consistent when resizing between mobile/desktop
(function () {
  const MOBILE_BREAK = 900; // should mirror your CSS breakpoint for nav
  function handleResize() {
    if (window.innerWidth > MOBILE_BREAK && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
    }
  }
  window.addEventListener('resize', handleResize);
  // run once to sync at load
  handleResize();
})();
