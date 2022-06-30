// an array
const cardArray = [
  {
    name: '1',
    img: 'images/d1.png',
  },
  {
    name: '2',
    img: 'images/d2.jfif',
  },
  {
    name: '3',
    img: 'images/d3.jfif',
  },
  {
    name: '4',
    img: 'images/d4.jfif',
  },
  {
    name: '5',
    img: 'images/d5.webp',
  },
  {
    name: '6',
    img: 'images/d6.jpg',
  },
  {
    name: '1',
    img: 'images/d1.png',
  },
  {
    name: '2',
    img: 'images/d2.jfif',
  },
  {
    name: '3',
    img: 'images/d3.jfif',
  },
  {
    name: '4',
    img: 'images/d4.jfif',
  },
  {
    name: '5',
    img: 'images/d5.webp',
  },
  {
    name: '6',
    img: 'images/d6.jpg',
  }
]

// how to randomly sort and array
cardArray.sort(function(a,b){return 0.5-Math.random()})

// the div used for grid of images
const gridDisplay = document.querySelector('#grid')
// name of cards chosen
const cardsChosen = []
// id of cards chosen
const cardsChosenIDS = []
// number of matches made
let attempts = 0
// display for the total number of attempts
const attemptsDisplay = document.getElementById('attempts')

// run at beginning to display all the backs of cards
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    // create an image element
    const card = document.createElement('img')
    card.setAttribute('src','images/realback.png')
    card.setAttribute('data-id', i)
    card.setAttribute('width', '150')
    card.setAttribute('height', '150')
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}

// checks if two selected cards match
function checkMatch() {
  // array with all the card elements
  const cards = document.querySelectorAll('img')
  const firstCardID = cardsChosenIDS[0]
  const secondCardID = cardsChosenIDS[1]

  // they match
  if (cardsChosen[0] === cardsChosen[1]) {
    cards[firstCardID].setAttribute('src', 'images/white.png')
    cards[secondCardID].setAttribute('src', 'images/white.png')
    cards[firstCardID].removeEventListener('click', flipCard)
    cards[secondCardID].removeEventListener('click', flipCard)
  }
  else {
    cards[firstCardID].setAttribute('src', 'images/realback.png')
    cards[secondCardID].setAttribute('src', 'images/realback.png')
  }
  while (cardsChosen.length > 0 || cardsChosenIDS.length > 0) {
    cardsChosen.pop()
    cardsChosenIDS.pop()
  }
}

function flipCard() {
  const cardID = this.getAttribute('data-id')
  if (cardsChosenIDS.length == 1) {
    if (cardID === cardsChosenIDS[0]) {

    }
    else {
      attempts += 1
      attemptsDisplay.innerHTML = attempts
      cardsChosen.push(cardArray[cardID].name)
      cardsChosenIDS.push(cardID)
      this.setAttribute('src', cardArray[cardID].img)
      if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 300)
      }
    }
  }
  else {
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIDS.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
  }
}


createBoard()
