/* icon change color */
window.addEventListener("load", function () {
  deSVG(".icon", true);
});

function createAndAppendCards(cardData, num) {
  // Функція для створення елементів за шаблоном та заповнення даними
  function createCardElement(cardId, cardText) {
    var cardContainer = document.createElement("div");
    cardContainer.className = "btn";

    var card = document.createElement("div");
    card.className = "card";

    var cardFront = document.createElement("div");
    cardFront.className = "card-front";
    var cardFrontImage = document.createElement("img");
    cardFrontImage.className = "icon";
    cardFrontImage.src = "./image/cards/front.svg";
    cardFrontImage.alt = "prediction card";
    cardFront.appendChild(cardFrontImage);

    var cardBack = document.createElement("div");
    cardBack.className = "card-back";
    var cardBackImage = document.createElement("img");
    cardBackImage.className = "icon";
    cardBackImage.src = "./image/cards/" + cardId + ".svg";
    cardBackImage.alt = "prediction card";
    var cardBackText = document.createElement("p");
    cardBackText.textContent = cardText;
    cardBack.appendChild(cardBackImage);
    cardBack.appendChild(cardBackText);

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardContainer.appendChild(card);

    return cardContainer;
  }
  //генератор випадкових карток де req - це кількість необхідних елементів, а cardData - маисв даних, для визначення його розміру
  function randomСardGenerator(cardData, req) {
    let numElement = Object.keys(cardData).length;
    var randomCards = [];

    for (var i = 0; i < req; i++) {
      var randomCard = "card-" + (Math.floor(Math.random() * numElement) + 1);
      randomCards.push(randomCard);
    }
    return randomCards;
  }

  var mainElement = document.getElementById("table");
  Cards = randomСardGenerator(cardData, num);

  Cards.forEach(function (cardId) {
    var cardElement = createCardElement(cardId, cardData[cardId]);
    mainElement.appendChild(cardElement);
  });
}
