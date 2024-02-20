// Add an event listener to each element with the class 'btn'
document.querySelectorAll(".btn-card").forEach(function (btn) {
  // Toggle the 'active' class when a button is clicked
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    checkAllButtons();
  });
});

// Function to check the state of all buttons and manage visibility of the save button
function checkAllButtons() {
  var allButtons = document.querySelectorAll(".btn-card");
  var btnSave = document.getElementById("btn-save");

  // Check if all buttons with class .btn have the 'active' class
  var allButtonsActive = Array.from(allButtons).every((btn) =>
    btn.classList.contains("active")
  );

  // If all cards are open, the button to download the resulting image should appear
  // Also, to resolve issues with domtoimage, the front card image is removed
  if (allButtonsActive) {
    btnSave.classList.remove("hidden");
    setTimeout(() => toggleFontCard(true), 500); // Delay set to 500ms to make the front card image disappear after the card rotation animation
  } else {
    btnSave.classList.add("hidden");
    toggleFontCard(false);
  }
}

// Function to toggle the visibility of font cards based on the provided flag
function toggleFontCard(flag) {
  var frontCards = document.querySelectorAll(".card-front");
  console.log(flag);
  frontCards.forEach((frontCard) => frontCard.classList.toggle("hidden", flag));
}
