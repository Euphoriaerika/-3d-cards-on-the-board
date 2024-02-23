// Add an event listener to each element with the class 'btn'
document.querySelectorAll(".btn-card").forEach(function (btn) {
  // Add the 'active' class when a button is clicked
  btn.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active"); // Сan be changed to 'toggle' for a cool flip card animation
      // Play the sound when the button is clicked
      new Audio("./sounds/flip.mp3").play();

      checkAllButtons();
    }
  });
});

// Function to check the state of all buttons and manage visibility of the save button
function checkAllButtons() {
  var allButtons = document.querySelectorAll(".btn-card");
  var btnSave = document.getElementById("btn-save");
  var tableElement = document.getElementById("table");

  const delayCardFlip = 1000; // Delay set to 1000ms to make the front card image disappear after the card rotation animation
  const delayDownloadBtnAppears = delayCardFlip + 3000; // The delay is set taking into account the previous delay and the wave animation, which lasts for 3 seconds

  // Check if all buttons with class .btn have the 'active' class
  var allButtonsActive = Array.from(allButtons).every((btn) =>
    btn.classList.contains("active")
  );

  // If all cards are open, the button to download the resulting image should appear
  // Also, to resolve issues with domtoimage, the front card image is removed
  if (allButtonsActive) {
    tableElement.classList.add("rotate-animation");

    setTimeout(() => {
      toggleFontCard(true);
      tableElement.classList.add("wave-animation");
    }, delayCardFlip);

    setTimeout(() => {
      tableElement.classList.remove("wave-animation");
      btnSave.classList.remove("hidden");
    }, delayDownloadBtnAppears);
  } else {
    btnSave.classList.add("hidden");
    toggleFontCard(false);
  }
}

// Function to toggle the visibility of font cards based on the provided flag
function toggleFontCard(flag) {
  var frontCards = document.querySelectorAll(".card-front");
  frontCards.forEach((frontCard) => frontCard.classList.toggle("hidden", flag));
}
