/*
// for buttons
const yearlyBtn = document.querySelector("#yearly")
const monthlyBtn = document.querySelector("#monthly")

// for cards
const yearlyCards = document.querySelector("#yearlyCards")
const monthlyCards = document.querySelector("#monthlyCards")

// Yearly button bosilganda
yearlyBtn.addEventListener("click", () => {
    yearlyCards.style.display = "flex"
    monthlyCards.style.display = "none"
})

// Monthly button bosilganda
monthlyBtn.addEventListener("click", () => {
    monthlyCards.style.display = "flex"
    yearlyCards.style.display = "none"
})
*/
  document.addEventListener("DOMContentLoaded", function () {
    const yearlyBtn = document.getElementById("yearly");
    const monthlyBtn = document.getElementById("monthly");
    const yearlyCards = document.getElementById("yearlyCards");
    const monthlyCards = document.getElementById("monthlyCards");

    function showCards(showEl, hideEl) {
      // Animatsion ko‘rinish
      hideEl.style.opacity = 1;
      showEl.style.opacity = 0;
      hideEl.style.transition = "opacity 0.5s ease";
      showEl.style.transition = "opacity 0.5s ease";

      hideEl.style.opacity = 0;
      setTimeout(() => {
        hideEl.style.display = "none";
        showEl.style.display = "flex";
        setTimeout(() => {
          showEl.style.opacity = 1;
        }, 10);
      }, 500);
    }

    yearlyBtn.addEventListener("click", function () {
      if (!yearlyBtn.classList.contains("active")) {
        yearlyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");
        showCards(yearlyCards, monthlyCards);
      }
    });

    monthlyBtn.addEventListener("click", function () {
      if (!monthlyBtn.classList.contains("active")) {
        monthlyBtn.classList.add("active");
        yearlyBtn.classList.remove("active");
        showCards(monthlyCards, yearlyCards);
      }
    });

    // Boshlanishda faqat biri ko‘rinib tursin
    yearlyCards.style.display = "none";
    monthlyCards.style.display = "flex";
    monthlyCards.style.opacity = 1;
  });
