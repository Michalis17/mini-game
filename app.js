  // Shuffle function from http://stackoverflow.com/a/2450976 
  function shuffle(array) {
    let currentIndex = array.length,
    randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    
    return array;
  }
// Array of the card 
const cardItems = [
  'fa-diamond','fa-diamond', 'fa-paper-plane-o','fa-paper-plane-o', 'fa-anchor','fa-anchor',
  'fa-bolt','fa-bolt', 'fa-cube','fa-cube', 'fa-leaf','fa-leaf', 'fa-bicycle','fa-bicycle', 'fa-bomb', 'fa-bomb'
];
shuffle(cardItems);
// Creating the deck of cards to display on the DOM
const container = document.getElementById('game-container');
const deck = document.createElement('ul');
// Adding style class to deck
deck.classList.add('deck');

// Iterate through the cardIcons array to create the LI elements
cardItems.forEach(iconClass => {
  // Create a new LI element with the class 'card'
  const card = document.createElement('li');
  // adding style class for the cards
  card.classList.add('card');

  // Create a new I element with the provided icon class
  const icon = document.createElement('i');
  icon.classList.add('fa', iconClass);

  // Append the icon to the card
  card.appendChild(icon);

  // Append the card to the deck
  deck.appendChild(card);
});

// Append the deck to game-container
container.appendChild(deck);


// Define a variable to store the move count
let moveCount = 0;

// Select the moves element in the HTML
const movesDisplay = document.querySelector('.moves');

// Update the move count in the HTML
function updateMoveCounter() {
  movesDisplay.textContent = moveCount;
}


  
  /*
  * set up the event listener for a card. If a card is clicked:
  *  - display the card's symbol (put this functionality in another function that you call from this one)
  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  *  - if the list already has another card, check to see if the two cards match
  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
  */

 const allCards = document.querySelectorAll(".card");
 console.log(allCards);

 function displayAndHideCard(card) {
  const classes=card.classList.value;
  if (classes.includes('open')) {
    card.classList.remove('open');
    card.classList.remove('show');
  } else {
    card.classList.add('open');
    card.classList.add('show');
  }
 }

 let openCards = [];
 function storingOpenCards(cardItem) {
  // Check if the card is not already in the openCards array
  if (!openCards.includes(cardItem)) {
    openCards.push(cardItem);
  }
}


// locking card in open position function
function lockMatchedCards() {
  openCards.forEach((card) => {
    card.classList.add('match');
  });
  openCards = [];
}

function checkMatchedCards() {
  if (openCards.length === 2) {
    const [firstCard, secondCard] = openCards;
    const firstCardClass = firstCard.firstElementChild.className;
    const secondCardClass = secondCard.firstElementChild.className;

    if (firstCardClass === secondCardClass) {
      lockMatchedCards();
    } else {
      setTimeout(() => {
        displayAndHideCard(firstCard);
        displayAndHideCard(secondCard);
        openCards = [];
      }, 1000);
    }
  }
}




// ! EVENT LISTENER FOR CARD CLICK
 allCards.forEach((card)=>{
  card.addEventListener('click', ()=>{
    displayAndHideCard(card);
    storingOpenCards(card);
    // function to check open second open card match and then remove 
    checkMatchedCards();

    // Increment the move count and update its display
    moveCount++;
    updateMoveCounter();

    console.log(openCards); // For debugging purposes
  })
 })

 // Call updateMoveCounter initially to set the default value
updateMoveCounter();