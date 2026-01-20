// FUNCTION: show alert message
function showMessage() {
  alert("Thanks for your interest! More content coming soon.");
}

// FUNCTION: change button text
function changeButtonText() {
  document.getElementById("ctaBtn").innerText = "Clicked!";
}

// EVENT: button click
document.getElementById("ctaBtn").addEventListener("click", function () {
  showMessage();
  changeButtonText();
});

// EVENT: feature hover effect (extra)
const cards = document.querySelectorAll(".feature-card");

cards.forEach(function(card) {
  card.addEventListener("mouseenter", function () {
    card.style.background = "#1f1f1f";
  });

  card.addEventListener("mouseleave", function () {
    card.style.background = "transparent";
  });
});
