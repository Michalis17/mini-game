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
  "fa-diamond",
  "fa-diamond",
  "fa-paper-plane-o",
  "fa-paper-plane-o",
  "fa-anchor",
  "fa-anchor",
  "fa-bolt",
  "fa-bolt",
  "fa-cube",
  "fa-cube",
  "fa-leaf",
  "fa-leaf",
  "fa-bicycle",
  "fa-bicycle",
  "fa-bomb",
  "fa-bomb",
];

function createNewDeck(arrayOfCards) {
  shuffle(arrayOfCards);
  // Creating the deck of cards to display on the DOM
  const container = document.getElementById("game-container");
  const deck = document.createElement("ul");
  // Adding style class to deck
  deck.classList.add("deck");

  // Iterate through the cardIcons array to create the LI elements
  cardItems.forEach((iconClass) => {
    // Create a new LI element with the class 'card'
    const card = document.createElement("li");
    // adding style class for the cards
    card.classList.add("card");

    // Create a new I element with the provided icon class
    const icon = document.createElement("i");
    icon.classList.add("fa", iconClass);

    // Append the icon to the card
    card.appendChild(icon);

    // Append the card to the deck
    deck.appendChild(card);
  });

  // Append the deck to game-container
  container.appendChild(deck);
}

createNewDeck(cardItems);

const allCards = document.querySelectorAll(".card");
console.log(allCards);

function displayAndHideCard(card) {
  const classes = card.classList.value;
  if (classes.includes("open")) {
    card.classList.remove("open");
    card.classList.remove("show");
  } else {
    card.classList.add("open");
    card.classList.add("show");
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
let matchedCards = [];
function lockMatchedCards() {
  openCards.forEach((card) => {
    card.classList.add("match");
    matchedCards.push(card);
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

// Define a variable to store the move count
let moveCount = 0;

// Select the moves element in the HTML
const movesDisplay = document.querySelector(".moves");

// Update the move count in the HTML
function updateMoveCounter() {
  movesDisplay.textContent = moveCount;
}

function displayFinalScore() {
  if (matchedCards.length === 16) {
    // display final moves
    alert(moveCount);
  }
}

// ! restart button needs fixxing
const resetButton = document.getElementById("restart");
function resetGame() {
  matchedCards.forEach((card) => {
    card.classList.remove("open");
    card.classList.remove("show");
    const container = document.getElementById("game-container");
    // const deck = .querySelector('ul');
    container.removeChild(deck);
    createNewDeck(cardItems);
  });
}

resetButton.addEventListener("click", resetGame);

// ! EVENT LISTENER FOR CARD CLICK
allCards.forEach((card) => {
  card.addEventListener("click", () => {
    displayAndHideCard(card);
    storingOpenCards(card);
    // function to check open second open card match and then remove
    checkMatchedCards();
    // Increment the move count and update its display
    moveCount++;
    updateMoveCounter();
    setTimeout(() => {
      displayFinalScore();
    }, 1000);

    console.log(openCards); // For debugging purposes
  });
});
// Call updateMoveCounter initially to set the default value
updateMoveCounter();

// add zenquotes api
const quotesData = [
  {
    q: "The clock indicates the moment...but what does eternity indicate?",
    a: "Walt Whitman",
    c: "65",
    h: "<blockquote>&ldquo;The clock indicates the moment...but what does eternity indicate?&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>",
  },
  {
    q: "Only those who will risk going too far can possibly find out how far one can go.",
    a: "T.S. Eliot",
    c: "80",
    h: "<blockquote>&ldquo;Only those who will risk going too far can possibly find out how far one can go.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>",
  },
  {
    q: "Looking after my health today gives me a better hope for tomorrow. ",
    a: "Anne Wilson Schaef",
    c: "67",
    h: "<blockquote>&ldquo;Looking after my health today gives me a better hope for tomorrow. &rdquo; &mdash; <footer>Anne Wilson Schaef</footer></blockquote>",
  },
  {
    q: "Never let your memories be greater than your dreams.",
    a: "Doug Ivester",
    c: "52",
    h: "<blockquote>&ldquo;Never let your memories be greater than your dreams.&rdquo; &mdash; <footer>Doug Ivester</footer></blockquote>",
  },
  {
    q: "The trouble with the rat race is that even if you win, you're still a rat.",
    a: "Lily Tomlin",
    c: "74",
    h: "<blockquote>&ldquo;The trouble with the rat race is that even if you win, you're still a rat.&rdquo; &mdash; <footer>Lily Tomlin</footer></blockquote>",
  },
  {
    q: "Failure is the key to success; each mistake teaches us something.",
    a: "Morihei Ueshiba",
    c: "65",
    h: "<blockquote>&ldquo;Failure is the key to success; each mistake teaches us something.&rdquo; &mdash; <footer>Morihei Ueshiba</footer></blockquote>",
  },
  {
    q: "If it entertains you now but will bore you someday, it's a distraction. Keep looking.",
    a: "Naval Ravikant",
    c: "85",
    h: "<blockquote>&ldquo;If it entertains you now but will bore you someday, it's a distraction. Keep looking.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>",
  },
  {
    q: "Life comes at us in waves. We can't predict or control those waves, but we can learn to surf.",
    a: "Dan Millman",
    c: "93",
    h: "<blockquote>&ldquo;Life comes at us in waves. We can't predict or control those waves, but we can learn to surf.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>",
  },
  {
    q: "Only by acceptance of the past, can you alter it.",
    a: "T.S. Eliot",
    c: "49",
    h: "<blockquote>&ldquo;Only by acceptance of the past, can you alter it.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>",
  },
  {
    q: "Don't spend major time on minor things.",
    a: "Jim Rohn",
    c: "39",
    h: "<blockquote>&ldquo;Don't spend major time on minor things.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "Living life in style also means living a life of balance.",
    a: "Jim Rohn",
    c: "57",
    h: "<blockquote>&ldquo;Living life in style also means living a life of balance.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "Intense love does not measure, it just gives.",
    a: "Mother Teresa",
    c: "45",
    h: "<blockquote>&ldquo;Intense love does not measure, it just gives.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>",
  },
  {
    q: "Whatever you believe with feeling becomes your reality. ",
    a: "Brian Tracy",
    c: "56",
    h: "<blockquote>&ldquo;Whatever you believe with feeling becomes your reality. &rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>",
  },
  {
    q: "When it comes to mastering a skill, time is the magic ingredient.",
    a: "Robert Greene",
    c: "65",
    h: "<blockquote>&ldquo;When it comes to mastering a skill, time is the magic ingredient.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>",
  },
  {
    q: "Great things happen to those who don't stop believing, trying, learning, and being grateful.",
    a: "Roy T. Bennett",
    c: "92",
    h: "<blockquote>&ldquo;Great things happen to those who don't stop believing, trying, learning, and being grateful.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "If you truly expect something to be difficult, it will be.",
    a: "Peter A. Cohen",
    c: "58",
    h: "<blockquote>&ldquo;If you truly expect something to be difficult, it will be.&rdquo; &mdash; <footer>Peter A. Cohen</footer></blockquote>",
  },
  {
    q: "Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.",
    a: "Roy T. Bennett",
    c: "112",
    h: "<blockquote>&ldquo;Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "If you don't know, the thing to do is not to get scared, but to learn.",
    a: "Ayn Rand",
    c: "70",
    h: "<blockquote>&ldquo;If you don't know, the thing to do is not to get scared, but to learn.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>",
  },
  {
    q: "A golden cage is still just a cage.",
    a: "Anita Krizzan",
    c: "35",
    h: "<blockquote>&ldquo;A golden cage is still just a cage.&rdquo; &mdash; <footer>Anita Krizzan</footer></blockquote>",
  },
  {
    q: "The one who boasts does so only out of a feeling of inferiority.",
    a: "Alfred Adler",
    c: "64",
    h: "<blockquote>&ldquo;The one who boasts does so only out of a feeling of inferiority.&rdquo; &mdash; <footer>Alfred Adler</footer></blockquote>",
  },
  {
    q: "The impossible can always be broken down into possibilities.",
    a: "Unknown",
    c: "60",
    h: "<blockquote>&ldquo;The impossible can always be broken down into possibilities.&rdquo; &mdash; <footer>Unknown</footer></blockquote>",
  },
  {
    q: "The best way to find yourself is to lose yourself in the service of others.",
    a: "Mahatma Gandhi",
    c: "75",
    h: "<blockquote>&ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo; &mdash; <footer>Mahatma Gandhi</footer></blockquote>",
  },
  {
    q: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. ",
    a: "Nikola Tesla",
    c: "100",
    h: "<blockquote>&ldquo;If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. &rdquo; &mdash; <footer>Nikola Tesla</footer></blockquote>",
  },
  {
    q: "Inspire yourself to be great. Being good isn't good enough.",
    a: "Gurbaksh Chahal",
    c: "59",
    h: "<blockquote>&ldquo;Inspire yourself to be great. Being good isn't good enough.&rdquo; &mdash; <footer>Gurbaksh Chahal</footer></blockquote>",
  },
  {
    q: "I love fools' experiments. I am always making them.",
    a: "Charles Darwin",
    c: "51",
    h: "<blockquote>&ldquo;I love fools' experiments. I am always making them.&rdquo; &mdash; <footer>Charles Darwin</footer></blockquote>",
  },
  {
    q: "If you want something you've never had you must be willing to do something you've never done.",
    a: "Thomas Jefferson",
    c: "93",
    h: "<blockquote>&ldquo;If you want something you've never had you must be willing to do something you've never done.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>",
  },
  {
    q: "You never know when a moment and a few sincere words can have an impact on a life.  ",
    a: "Zig Ziglar",
    c: "84",
    h: "<blockquote>&ldquo;You never know when a moment and a few sincere words can have an impact on a life.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>",
  },
  {
    q: "Everything is in your own heart.",
    a: "Thich Nhat Hanh",
    c: "32",
    h: "<blockquote>&ldquo;Everything is in your own heart.&rdquo; &mdash; <footer>Thich Nhat Hanh</footer></blockquote>",
  },
  {
    q: "None are more hopelessly enslaved than those who falsely believe they are free.",
    a: "Johann Wolfgang von Goethe",
    c: "79",
    h: "<blockquote>&ldquo;None are more hopelessly enslaved than those who falsely believe they are free.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>",
  },
  {
    q: "Fashion fades, only style remains the same.",
    a: "Coco Chanel",
    c: "43",
    h: "<blockquote>&ldquo;Fashion fades, only style remains the same.&rdquo; &mdash; <footer>Coco Chanel</footer></blockquote>",
  },
  {
    q: "The wisdom of life consists in the elimination of the nonessentials.",
    a: "Lin Yutang",
    c: "68",
    h: "<blockquote>&ldquo;The wisdom of life consists in the elimination of the nonessentials.&rdquo; &mdash; <footer>Lin Yutang</footer></blockquote>",
  },
  {
    q: "Nothing can dim the light which shines from within.",
    a: "Maya Angelou",
    c: "51",
    h: "<blockquote>&ldquo;Nothing can dim the light which shines from within.&rdquo; &mdash; <footer>Maya Angelou</footer></blockquote>",
  },
  {
    q: "Of all men's miseries the bitterest is this: to know so much and to have control over nothing. ",
    a: "Herodotus",
    c: "95",
    h: "<blockquote>&ldquo;Of all men's miseries the bitterest is this: to know so much and to have control over nothing. &rdquo; &mdash; <footer>Herodotus</footer></blockquote>",
  },
  {
    q: "Absorb what is useful, discard what is not, add what is uniquely your own.",
    a: "Bruce Lee",
    c: "74",
    h: "<blockquote>&ldquo;Absorb what is useful, discard what is not, add what is uniquely your own.&rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>",
  },
  {
    q: "Yesterday is but today's memory, tomorrow is today's dream.",
    a: "Kahlil Gibran",
    c: "59",
    h: "<blockquote>&ldquo;Yesterday is but today's memory, tomorrow is today's dream.&rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>",
  },
  {
    q: "Progress comes to those who train and train; reliance on secret techniques will get you nowhere.",
    a: "Morihei Ueshiba",
    c: "96",
    h: "<blockquote>&ldquo;Progress comes to those who train and train; reliance on secret techniques will get you nowhere.&rdquo; &mdash; <footer>Morihei Ueshiba</footer></blockquote>",
  },
  {
    q: "It doesn't matter where you are, you are nowhere compared to where you can go.",
    a: "Bob Proctor",
    c: "78",
    h: "<blockquote>&ldquo;It doesn't matter where you are, you are nowhere compared to where you can go.&rdquo; &mdash; <footer>Bob Proctor</footer></blockquote>",
  },
  {
    q: "Inspire yourself to be great. Being good isn't good enough.",
    a: "Gurbaksh Chahal",
    c: "59",
    h: "<blockquote>&ldquo;Inspire yourself to be great. Being good isn't good enough.&rdquo; &mdash; <footer>Gurbaksh Chahal</footer></blockquote>",
  },
  {
    q: "The greatest of all mistakes is to do nothing because you think you can only do a little.  ",
    a: "Zig Ziglar",
    c: "91",
    h: "<blockquote>&ldquo;The greatest of all mistakes is to do nothing because you think you can only do a little.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>",
  },
  {
    q: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    a: "Helen Keller",
    c: "114",
    h: "<blockquote>&ldquo;The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.&rdquo; &mdash; <footer>Helen Keller</footer></blockquote>",
  },
  {
    q: "Silence is sometimes the best answer.",
    a: "Dalai Lama",
    c: "37",
    h: "<blockquote>&ldquo;Silence is sometimes the best answer.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
  },
  {
    q: "You don't have to be great to start, but you have to start to be great.  ",
    a: "Zig Ziglar",
    c: "73",
    h: "<blockquote>&ldquo;You don't have to be great to start, but you have to start to be great.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>",
  },
  {
    q: "Always be a first rate version of yourself and not a second rate version of someone else.",
    a: "Judy Garland",
    c: "89",
    h: "<blockquote>&ldquo;Always be a first rate version of yourself and not a second rate version of someone else.&rdquo; &mdash; <footer>Judy Garland</footer></blockquote>",
  },
  {
    q: "If you focus on results and finding shortcuts, you'll get impatient. If you focus on the process and doing the right thing, you'll be unstoppable.",
    a: "Maxime Lagace",
    c: "146",
    h: "<blockquote>&ldquo;If you focus on results and finding shortcuts, you'll get impatient. If you focus on the process and doing the right thing, you'll be unstoppable.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>",
  },
  {
    q: "Surround yourself with only people who are going to lift you higher. ",
    a: "Oprah Winfrey",
    c: "69",
    h: "<blockquote>&ldquo;Surround yourself with only people who are going to lift you higher. &rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>",
  },
  {
    q: "Engage in those actions and thoughts that nurture the good qualities you want to have.",
    a: "Paramahansa Yogananda",
    c: "86",
    h: "<blockquote>&ldquo;Engage in those actions and thoughts that nurture the good qualities you want to have.&rdquo; &mdash; <footer>Paramahansa Yogananda</footer></blockquote>",
  },
  {
    q: "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
    a: "Zig Ziglar",
    c: "87",
    h: "<blockquote>&ldquo;Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>",
  },
  {
    q: "Choose a job you love, and you will never have to work a day in your life. ",
    a: "Confucius",
    c: "75",
    h: "<blockquote>&ldquo;Choose a job you love, and you will never have to work a day in your life. &rdquo; &mdash; <footer>Confucius</footer></blockquote>",
  },
  {
    q: "Time and health are two precious assets that we don't recognize and appreciate until they have been depleted. ",
    a: "Denis Waitley",
    c: "110",
    h: "<blockquote>&ldquo;Time and health are two precious assets that we don't recognize and appreciate until they have been depleted. &rdquo; &mdash; <footer>Denis Waitley</footer></blockquote>",
  },
  {
    q: "Where the willingness is great, the difficulties cannot be great.",
    a: "Niccolo Machiavelli",
    c: "65",
    h: "<blockquote>&ldquo;Where the willingness is great, the difficulties cannot be great.&rdquo; &mdash; <footer>Niccolo Machiavelli</footer></blockquote>",
  },
];

// Time delay between typing each character (in milliseconds)
const typingSpeed = 100;
let currentQuoteIndex = 0; // Keeps track of the current quote being displayed
const timeToNextQuote = 30000;

// Function to display quotes using typewriter effect
function typeWriterEffect(text, speed) {
  let index = 0;
  const textArea = document.getElementById("typing-text");

  // Clear previous text
  textArea.textContent = "";

  const typingInterval = setInterval(() => {
    textArea.textContent += text.charAt(index);
    index++;

    // Stop the typing effect when all characters are displayed
    if (index === text.length) {
      clearInterval(typingInterval);
    }
  }, speed);
}

// Display the initial quote
typeWriterEffect(quotesData[currentQuoteIndex].q, typingSpeed);

// Set an interval to switch between quotes every 5 minutes
setInterval(() => {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotesData.length;
  typeWriterEffect(quotesData[currentQuoteIndex].q, typingSpeed);
}, timeToNextQuote); // 5 minutes 
 

