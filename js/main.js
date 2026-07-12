const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const menuIsClosed = navMenu.hasAttribute("hidden");

    if (menuIsClosed) {
      navMenu.removeAttribute("hidden");
    } else {
      navMenu.setAttribute("hidden", "");
    }

    menuToggle.classList.toggle("active", menuIsClosed);
    menuToggle.setAttribute("aria-expanded", String(menuIsClosed));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.setAttribute("hidden", "");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}





document.addEventListener("DOMContentLoaded", function () {
  const learnItems = document.querySelectorAll(".learn-item");
  const learnImage = document.getElementById("learnImage");
  const learnNumber = document.getElementById("learnNumber");
  const learnText = document.getElementById("learnText");

  learnItems.forEach(function (item) {
    const button = item.querySelector("button");

    button.addEventListener("click", function () {
      learnItems.forEach(function (el) {
        el.classList.remove("active");
      });

      item.classList.add("active");

      const img = item.querySelector(".learn-mobile-card img");
      const number = item.querySelector(".learn-mobile-card strong");
      const text = item.querySelector(".learn-mobile-card p");

      learnImage.src = img.src;
      learnImage.alt = img.alt;
      learnNumber.textContent = number.textContent;
      learnText.textContent = text.textContent;
    });
  });
});





const learnItems = document.querySelectorAll(".learn-item");
const learnImage = document.querySelector("#learnImage");

learnItems.forEach((item) => {
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    learnItems.forEach((currentItem) => {
      currentItem.classList.remove("active");
    });

    item.classList.add("active");

    if (learnImage) {
      const newImage = item.dataset.image;
      const newAlt = item.dataset.alt;
      const itemIndex = item.dataset.index;

      learnImage.style.opacity = "0";

      window.setTimeout(() => {
        learnImage.src = newImage;
        learnImage.alt = newAlt;

        /* Clase especial únicamente para la imagen 05 */
        learnImage.classList.toggle(
          "image-campeonatos",
          itemIndex === "4"
        );

        learnImage.style.opacity = "1";
      }, 200);
    }
  });
});










gsap.registerPlugin(ScrollTrigger);

const evolutionSteps = document.querySelectorAll(".evolution-step");
const evolutionProgress = document.querySelector(".evolution-line-progress");

const evolutionMedia = gsap.matchMedia();

/* ==========================
   ESCRITORIO
========================== */

evolutionMedia.add("(min-width: 769px)", () => {
  gsap.set(evolutionProgress, {
    width: "0%",
    height: "100%"
  });

  const evolutionAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: ".evolution-section",
      start: "top top",
      end: "+=850",
      scrub: 0.7,
      pin: true,
      anticipatePin: 1,

      onUpdate: (self) => {
        const progress = self.progress;

        evolutionSteps.forEach((step, index) => {
          const point = index / (evolutionSteps.length - 1);

          step.classList.toggle(
            "active",
            progress >= point
          );
        });
      }
    }
  });

  evolutionAnimation.to(evolutionProgress, {
    width: "100%",
    ease: "none"
  });
});

/* ==========================
   MOBILE
========================== */

evolutionMedia.add("(max-width: 768px)", () => {
  gsap.set(evolutionProgress, {
    width: "100%",
    height: "0%"
  });

  const evolutionAnimationMobile = gsap.timeline({
    scrollTrigger: {
      trigger: ".evolution-section",
      start: "top 70%",
      end: "bottom 35%",
      scrub: 0.7,
      pin: false,

      onUpdate: (self) => {
        const progress = self.progress;

        evolutionSteps.forEach((step, index) => {
          const point = index / (evolutionSteps.length - 1);

          step.classList.toggle(
            "active",
            progress >= point
          );
        });
      }
    }
  });

  evolutionAnimationMobile.to(evolutionProgress, {
    height: "100%",
    ease: "none"
  });
});









const studentsCards = document.querySelectorAll(".students-card");

studentsCards.forEach((card) => {
  const toggle = card.querySelector(".students-toggle");

  toggle.addEventListener("click", () => {
    if (card.classList.contains("active")) {
      return;
    }

    studentsCards.forEach((currentCard) => {
      currentCard.classList.remove("active");

      const currentToggle = currentCard.querySelector(
        ".students-toggle"
      );

      if (currentToggle) {
        currentToggle.setAttribute("aria-expanded", "false");
      }
    });

    card.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
  });
});








const hardwarePoints = document.querySelectorAll(".hardware-point");

const desktopHardwareCard = document.querySelector(".hardware-info-card");
const desktopHardwareTitle = desktopHardwareCard?.querySelector("h3");
const desktopHardwareText = desktopHardwareCard?.querySelector("p");
const desktopHardwareClose = document.querySelector(".hardware-info-close");

const mobileHardwareCard = document.querySelector(".hardware-mobile-info");
const mobileHardwareTitle = mobileHardwareCard?.querySelector("h3");
const mobileHardwareText = mobileHardwareCard?.querySelector("p");
const mobileHardwareClose = document.querySelector(".hardware-mobile-close");

const hardwarePositionClasses = [
  "position-monitor",
  "position-wheel",
  "position-pedals",
  "position-seat"
];

const closeHardwareInformation = () => {
  hardwarePoints.forEach((point) => {
    point.classList.remove("is-active");
  });

  desktopHardwareCard?.classList.remove("is-visible");
  mobileHardwareCard?.classList.remove("is-visible");

  window.setTimeout(() => {
    desktopHardwareCard?.classList.remove(...hardwarePositionClasses);
  }, 300);
};

const openHardwareInformation = (point) => {
  const title = point.dataset.title;
  const text = point.dataset.text;
  const position = point.dataset.position;

  hardwarePoints.forEach((currentPoint) => {
    currentPoint.classList.remove("is-active");
  });

  point.classList.add("is-active");

  if (
    desktopHardwareCard &&
    desktopHardwareTitle &&
    desktopHardwareText
  ) {
    desktopHardwareCard.classList.remove(...hardwarePositionClasses);

    desktopHardwareCard.classList.add(`position-${position}`);

    desktopHardwareTitle.textContent = title;
    desktopHardwareText.textContent = text;

    desktopHardwareCard.classList.add("is-visible");
  }

  if (
    mobileHardwareCard &&
    mobileHardwareTitle &&
    mobileHardwareText
  ) {
    mobileHardwareTitle.textContent = title;
    mobileHardwareText.textContent = text;

    mobileHardwareCard.classList.add("is-visible");
  }
};

hardwarePoints.forEach((point) => {
  point.addEventListener("click", () => {
    const isAlreadyActive = point.classList.contains("is-active");

    if (isAlreadyActive) {
      closeHardwareInformation();
      return;
    }

    openHardwareInformation(point);
  });
});

desktopHardwareClose?.addEventListener(
  "click",
  closeHardwareInformation
);

mobileHardwareClose?.addEventListener(
  "click",
  closeHardwareInformation
);