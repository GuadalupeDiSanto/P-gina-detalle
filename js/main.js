



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





gsap.registerPlugin(ScrollTrigger);

const evolutionSteps = document.querySelectorAll(".evolution-step");

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

        if (progress >= point) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
    }
  }
});

evolutionAnimation.to(".evolution-line-progress", {
  width: "100%",
  ease: "none"
});