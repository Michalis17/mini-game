/*
 * Create a list that holds all of your cards#
*add each list item to the dom 
 */

// Array of the card 
const cardItems = [
  'fa-diamond','fa-diamond', 'fa-paper-plane-o','fa-paper-plane-o', 'fa-anchor','fa-anchor',
  'fa-bolt','fa-bolt', 'fa-cube','fa-cube', 'fa-leaf','fa-leaf', 'fa-bicycle','fa-bicycle', 'fa-bomb', 'fa-bomb'
];
shuffle(cardItems);
const container = document.getElementById('game-container');
const deck = document.createElement('ul');
deck.classList.add('deck');

// Iterate through the cardIcons array to create the LI elements
cardItems.forEach(iconClass => {
  // Create a new LI element with the class 'card'
  const card = document.createElement('li');
  card.classList.add('card');

  // Create a new I element with the provided icon class
  const icon = document.createElement('i');
  icon.classList.add('fa', iconClass);

  // Append the icon to the card
  card.appendChild(icon);

  // Append the card to the deck
  deck.appendChild(card);
});

// Append the deck to an existing container or the body of the document
container.appendChild(deck);


/*
*animate the cards moving to a sheffle deck
*animate cards moving back to positions 

*/
function animateDeck() {
  const cards = document.querySelectorAll('.card');
  const container = document.querySelector('.container');
  const deck = document.querySelector('.deck');
  
  // Store the initial positions of each card
  const initialPositions = Array.from(cards).map(card => ({
    left: card.offsetLeft,
    top: card.offsetTop,
  }));
  
  // Calculate the position for the deck formation (in this case, top-left corner)
  const deckedTop = 10; // Adjust this value as needed
  const deckedLeft = 10; // Adjust this value as needed
  
  // Apply styles to move cards to the deck formation position
  cards.forEach((card, index) => {
    card.classList.remove('decked-position');
    card.style.left = `${deckedLeft}px`;
    card.style.top = `${deckedTop}px`;
  });
  
  // Wait for a short delay (e.g., 1 second)
  setTimeout(() => {
    // Apply styles to move cards back to their original positions
    cards.forEach((card, index) => {
      card.classList.add('decked-position');
      card.style.left = `${initialPositions[index].left}px`;
      card.style.top = `${initialPositions[index].top}px`;
    });
  }, 1000); // Adjust the delay time as needed
  }
  
  // Event listener for triggering the animation (e.g., clicking a button)
  const restartBtn = document.getElementById('restart');
  restartBtn.addEventListener('click', animateDeck);
  
  
  
  
  
  // Shuffle function from http://stackoverflow.com/a/2450976
  // ! MAIN FUNCTION 
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
 
 
 let isToggled = false;
 allCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!isToggled) {
      // Perform an action when clicked once (for example, change background color)
      card.classList.add("open");
    card.classList.add("show");
      // Update the flag to indicate the button is toggled
      isToggled = true;
    } else {
      // Revert to normal state when clicked again (change back to original color)
      card.classList.remove("open");
    card.classList.remove("show"); // Revert to default color (or specify original color)
      // Update the flag to indicate the button is back to normal state
      isToggled = false;
    }
    
  });
});
