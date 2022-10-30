const resultDisplay = document.querySelector('#result')
const gridDisplay = document.querySelector("#grid")

const cardArray = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    }
]

cardArray.sort(() => 0.5 - Math.random())
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (const cardCount in cardArray) {
        const card = document.createElement("img")
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", cardCount)
        card.setAttribute("height", "200px")
        card.setAttribute("width", "200px")
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)
        console.log(card, cardCount)
    }
}

createBoard()

function flipCard() {
    const cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)

    if (cardsChosen.length === 2){
        setTimeout(() => {
            const optionOneID = cardsChosenIds[0]
            const optionTwoID = cardsChosenIds[1]
            const cards = document.querySelectorAll('#grid img')

            if (optionOneID === optionTwoID) {
                cards[optionOneID].setAttribute('src', 'images/blank.png')
                cards[optionTwoID].setAttribute('src', 'images/blank.png')
                alert('You have clicked the same image!')
            }

            if (cardsChosen[0] === cardsChosen[1]){
                alert("You found a match!")
                cards[optionOneID].setAttribute('src', 'images/white.png')
                cards[optionTwoID].setAttribute('src', 'images/white.png')
                cards[optionOneID].removeEventListener('click', flipCard)
                cards[optionTwoID].removeEventListener('click', flipCard)
                cardsWon.push(cardsChosen)
            } else {
                cards[optionOneID].setAttribute('src', 'images/blank.png')
                cards[optionTwoID].setAttribute('src', 'images/blank.png')
            }

            resultDisplay.textContent = cardsWon.length

            cardsChosen = []
            cardsChosenIds = []

            if (cardsWon.length === cardArray.length / 2) {
                resultDisplay.textContent = "Congratulations, you found them all!"
            }
        }, 1000)
    }
}