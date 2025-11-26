// STAGGERED TAG ENTRY
document.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(".hero-tags .tag");
  tags.forEach((tag, index) => {
    tag.style.setProperty("--delay", `${0.4 + index * 0.15}s`);
  });
});

// PARALLAX HERO MOUSE MOVE
const hero = document.querySelector(".hero-banner-content");

if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });

  hero.addEventListener("mouseleave", () => {
    hero.style.backgroundPosition = "50% 50%";
  });
}

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();
