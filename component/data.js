var cardData = {
  "card-1":
    "Embrace the uncertainty ahead, for within this chaos may lie the key to new opportunities.",
  "card-2":
    "Preserve your resources and brace yourself for potential financial challenges that may arise in the near future.",
  "card-3":
    "The winds of change are whispering around you; stay attuned to the subtle shifts, as they may guide you towards unexpected transformations.",
  "card-4":
    "Trust your instincts as you navigate through a period of ambiguity; your intuition holds the power to illuminate the path ahead.",
  "card-5":
    "Be mindful of interpersonal dynamics, as conflicts may arise – seek understanding and compromise to maintain harmony.",
  "card-6":
    "The veil of mystery shrouds your personal relationships; embrace communication and vulnerability to strengthen the bonds that matter.",
  "card-7":
    "A creative spark is ready to ignite within you; channel your inspiration and let your imaginative endeavors flourish.",
  "card-8":
    "Guard your health and well-being, for unseen challenges may test your resilience – prioritize self-care and balance.",
  "card-9":
    "Unexpected opportunities may knock on your door; be open to serendipity and seize the chances that align with your true aspirations.",
  "card-10":
    "Your journey may encounter detours, but each diversion carries valuable lessons – embrace the twists and turns with resilience and adaptability.",
};

function createAndAppendCards(cardData, num) {
  // Function for creating elements based on a template and populating them with data
  function createCardElement(cardId, cardText) {
    var cardContainer = document.createElement("div");
    cardContainer.className = "btn";

    var card = document.createElement("div");
    card.className = "card";

    // Creating the front side of the card
    var cardFront = document.createElement("div");
    cardFront.className = "card-front";
    var cardFrontImage = document.createElement("img");
    cardFrontImage.className = "icon";
    cardFrontImage.src = "./image/cards/front.svg";
    cardFrontImage.alt = "prediction card";
    cardFront.appendChild(cardFrontImage);

    // Creating the back side of the card
    var cardBack = document.createElement("div");
    cardBack.className = "card-back";
    var cardBackImage = document.createElement("div");
    var cardBackIcon = document.createElement("img");
    cardBackIcon.className = "icon";
    cardBackIcon.src = "./image/cards/" + cardId + ".svg";
    cardBackIcon.alt = "prediction card";
    cardBackImage.appendChild(cardBackIcon);
    var cardBackText = document.createElement("p");
    cardBackText.textContent = cardText;
    cardBack.appendChild(cardBackImage);
    cardBack.appendChild(cardBackText);

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardContainer.appendChild(card);

    return cardContainer;
  }

  // Random card generator function where 'req' is the number of required elements, and 'cardData' is an array to determine its size
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

  // Append each card element to the main container
  Cards.forEach(function (cardId) {
    var cardElement = createCardElement(cardId, cardData[cardId]);
    mainElement.appendChild(cardElement);
  });
}

// Call the function from app.js to create and add cards to <main>
createAndAppendCards(cardData, 3);
/* icon change color */
window.addEventListener("load", function () {
  deSVG(".icon", true);
});
