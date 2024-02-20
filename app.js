// Add an event listener to each element with the class 'btn'
document.querySelectorAll(".btn-card").forEach(function (btn) {
  // Toggle the 'active' class when a button is clicked
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    checkAllButtons();
  });
});

function checkAllButtons() {
  var allButtons = document.querySelectorAll(".btn-card");
  var btnSave = document.getElementById("btn-save");

  // Перевіряємо, чи всі кнопки .btn мають клас active
  var allButtonsActive = Array.from(allButtons).every((btn) =>
    btn.classList.contains("active")
  );

  // Додаємо або видаляємо клас visible в залежності від умови
  if (allButtonsActive) {
    btnSave.classList.remove("hidden");
    setTimeout(() => toggleFontCard(true), 500);
  } else {
    btnSave.classList.add("hidden");
    toggleFontCard(false);
  }
}

function toggleFontCard(flag) {
  var frontCards = document.querySelectorAll(".card-front");
  console.log(flag);
  frontCards.forEach((frontCard) => {
    frontCard.classList.toggle("hidden", flag);
    console.log(frontCard.classList);
  });
}
