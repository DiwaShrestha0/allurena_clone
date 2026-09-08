const menuPanel = document.getElementById("menuPanel"),
  bagPanel = document.getElementById("bagPanel"),
  searchModal = document.getElementById("searchModal");
document.querySelector(".hamburger").onclick = () =>
  menuPanel.classList.add("open");
document.getElementById("menuClose").onclick = () =>
  menuPanel.classList.remove("open");
document.getElementById("bagOpen").onclick = () =>
  bagPanel.classList.add("open");
document.getElementById("bagClose").onclick = () =>
  bagPanel.classList.remove("open");
document.getElementById("searchOpen").onclick = () => {
  searchModal.classList.add("open");
  setTimeout(() => document.getElementById("searchInput").focus(), 100);
};
document.getElementById("searchClose").onclick = () =>
  searchModal.classList.remove("open");
document
  .querySelectorAll(".menu-inner a")
  .forEach((a) => (a.onclick = () => menuPanel.classList.remove("open")));
document.getElementById("nextReview").onclick = () =>
  document
    .getElementById("reviewTrack")
    .scrollBy({ left: 420, behavior: "smooth" });
document.getElementById("prevReview").onclick = () =>
  document
    .getElementById("reviewTrack")
    .scrollBy({ left: -420, behavior: "smooth" });
document.getElementById("subscribe").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("subscribeMsg").textContent =
    "Thank you! Your submission has been received.";
  e.target.reset();
};
const observer = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(
    ".feature,.about-story,.product-card,.girl-section,.review,.talk",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .7s ease,transform .7s ease";
    observer.observe(el);
  });
document.addEventListener("scroll", () =>
  document.querySelectorAll(".visible").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  }),
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    menuPanel.classList.remove("open");
    bagPanel.classList.remove("open");
    searchModal.classList.remove("open");
  }
});
