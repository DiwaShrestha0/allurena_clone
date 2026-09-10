// Allurena Interactive Logic & Micro-animations

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Category Lottie Animations
  const lottieEls = document.querySelectorAll("[data-lottie]");
  lottieEls.forEach((el) => {
    const jsonPath = el.getAttribute("data-lottie");
    const container = el.querySelector(".lottie");
    if (container && jsonPath && window.lottie) {
      window.lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: jsonPath,
      });
    }
  });

  // 2. Fullscreen Menu Overlay Toggle
  const burgerToggle = document.getElementById("burgerToggle");
  const menuOverlay = document.getElementById("menuOverlay");

  if (burgerToggle && menuOverlay) {
    burgerToggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
      menuOverlay.classList.toggle("open");
    });
  }

  // Close menu when clicking nav links
  document.querySelectorAll(".menu__nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      menuOverlay.classList.remove("open");
    });
  });

  // 3. Review Track Controls
  const reviewTrack = document.getElementById("reviewTrack");
  const prevReviewBtn = document.getElementById("prevReview");
  const nextReviewBtn = document.getElementById("nextReview");

  if (reviewTrack && prevReviewBtn && nextReviewBtn) {
    prevReviewBtn.addEventListener("click", () => {
      reviewTrack.scrollBy({ left: -380, behavior: "smooth" });
    });
    nextReviewBtn.addEventListener("click", () => {
      reviewTrack.scrollBy({ left: 380, behavior: "smooth" });
    });
  }

  // 4. Modals (Search & Bag)
  const searchOpen = document.getElementById("searchOpen");
  const searchClose = document.getElementById("searchClose");
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");

  if (searchOpen && searchModal && searchClose) {
    searchOpen.addEventListener("click", () => {
      searchModal.classList.add("open");
      if (searchInput) setTimeout(() => searchInput.focus(), 150);
    });
    searchClose.addEventListener("click", () => {
      searchModal.classList.remove("open");
    });
  }

  const bagOpen = document.getElementById("bagOpen");
  const bagClose = document.getElementById("bagClose");
  const bagPanel = document.getElementById("bagPanel");

  if (bagOpen && bagPanel && bagClose) {
    bagOpen.addEventListener("click", () => {
      bagPanel.classList.add("open");
    });
    bagClose.addEventListener("click", () => {
      bagPanel.classList.remove("open");
    });
  }

  // 5. Back to Top Button
  const scrollToTop = document.getElementById("scrollToTop");
  if (scrollToTop) {
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 6. Subscription Form
  const subscribeForm = document.getElementById("subscribe");
  const subscribeMsg = document.getElementById("subscribeMsg");

  if (subscribeForm && subscribeMsg) {
    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      subscribeMsg.textContent = "Thank you! Your submission has been received.";
      subscribeMsg.style.color = "#2e7d32";
      subscribeForm.reset();
    });
  }

  // 7. Scroll Entrance Animation Observer
  const animElements = document.querySelectorAll(
    ".anim-scroll-up, .anim-scroll-scale, .anim-load-up, .anim-load-scale"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    },
    { threshold: 0.1 }
  );

  animElements.forEach((el) => observer.observe(el));

  // Trigger page load initial animations
  setTimeout(() => {
    document
      .querySelectorAll(".anim-load-up, .anim-load-scale")
      .forEach((el) => el.classList.add("animated"));
  }, 100);

  // Close modals on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.body.classList.remove("menu-open");
      if (menuOverlay) menuOverlay.classList.remove("open");
      if (searchModal) searchModal.classList.remove("open");
      if (bagPanel) bagPanel.classList.remove("open");
    }
  });
});
