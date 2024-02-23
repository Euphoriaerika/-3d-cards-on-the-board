var cardData = {
  "card-1": {
    text: "You are on the path of great adventures and learning. Be ready for challenges, but your strength and friends will help you overcome any obstacles.",
    prediction: null,
  },
  "card-2": {
    text: "Beware of impressions and deceit. Avoid dubious connections to safeguard your emotional well-being.",
    prediction: "bad",
  },
  "card-3": {
    text: "Your energy and passion can be beneficial in your life. Use them to achieve your goals.",
    prediction: null,
  },
  "card-4": {
    text: "Be cautious in your interpersonal relationships. Preserve your trust and avoid situations that may harm you.",
    prediction: "bad",
  },
  "card-5": {
    text: "Your creativity and abilities will lead to great achievements. With the magic wand, you can perform wonders.",
    prediction: "great",
  },
  "card-6": {
    text: "Use wisdom and abilities to understand the future. Maintain a balance between planning and dealing with unexpected circumstances.",
    prediction: null,
  },
  "card-7": {
    text: "Avoid situations that may lead to risky decisions. Be careful in your interactions and avoid subconscious dangers.",
    prediction: "bad",
  },
  "card-8": {
    text: "Carefully plan your next move. It's a time of changes, and your readiness for them will determine your success.",
    prediction: null,
  },
  "card-9": {
    text: "Small joys and unexpected surprises will make your life more interesting and enjoyable.",
    prediction: null,
  },
  "card-10": {
    text: "Avoid close ties or situations that may limit your freedom and independence.",
    prediction: "bad",
  },
  "card-11": {
    text: "Enjoy the coziness and joyful moments around you. Warm your heart with the comfort of Christmas socks.",
    prediction: null,
  },
  "card-12": {
    text: "Your creativity and talent will reveal new opportunities and contribute to creative growth.",
    prediction: "great",
  },
  "card-13": {
    text: "Be cautious in your surroundings. Avoid negative influences and individuals who may harm your emotional stability.",
    prediction: "bad",
  },
  "card-14": {
    text: "Take life seriously, avoid risky situations, and maintain your health.",
    prediction: "bad",
  },
  "card-15": {
    text: "Your efforts and decisions will prove powerful and beneficial. Strive for achievements and development.",
    prediction: "great",
  },
  "card-16": {
    text: "Be cautious in your choices and decisions, as some situations may have negative consequences for you.",
    prediction: "bad",
  },
  "card-17": {
    text: 'Denchik, the Afro-American tanker, says: "My tank is so big that when I stop in the city, people think it\'s a new urban art installation!"',
    prediction: "great",
  },
};

function createAndAppendCards(cardData, num) {
  // Function for creating elements based on a template and populating them with data
  function createCardElement(cardId, cardData) {
    var cardContainer = document.createElement("div");
    cardContainer.classList.add("btn", "btn-card");

    var card = document.createElement("div");
    card.classList.add("card", cardData.prediction);

    // Creating the front side of the card
    var cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    var cardFrontImage = document.createElement("img");
    cardFrontImage.classList.add("icon");
    cardFrontImage.src = "./image/cards/front.svg";
    cardFrontImage.alt = "prediction card";
    cardFront.appendChild(cardFrontImage);

    // Creating the back side of the card
    var cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    var cardBackImage = document.createElement("div");
    var cardBackIcon = document.createElement("img");
    cardBackIcon.classList.add("icon");
    cardBackIcon.src = "./image/cards/" + cardId + ".svg";
    cardBackIcon.alt = "prediction card";
    cardBackImage.appendChild(cardBackIcon);
    var cardBackText = document.createElement("p");
    cardBackText.textContent = cardData.text;
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
  let Cards = randomСardGenerator(cardData, num);

  // Append each card element to the main container
  Cards.forEach(function (cardId) {
    var cardElement = createCardElement(cardId, cardData[cardId]);
    mainElement.appendChild(cardElement);
  });
}

// Call the function from app.js to create and add cards to <main>
createAndAppendCards(cardData, 3);

// Icon change color
window.addEventListener("load", function () {
  deSVG(".icon", true);
});
