document.addEventListener("DOMContentLoaded", () => {
    drawBoard();
    flippingCards()
})

let isFlipping = false;
let fruits = ["Grapes", "Orange", "Grapes", "Mango"];
let fruitsJSON = fruits.map((fruit, index) => {
    return { name: fruit, index: index + 1, id: `Card_${index + 1}`, isMatched: false, isFlipped: false }
})
console.log(fruitsJSON)
let previousItem = ""
let cardTemplate = (frontSide, backSide, id) => {
    return `<div class="flip-card" id="${id}">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <span>${frontSide}</span>
                </div>
                <div class="flip-card-back">
                    <span>${backSide}</span>
                </div>
            </div>
        </div>`
}
function drawBoard() {
    let container = document.querySelector(".container");
    let flipCards = fruitsJSON.map((fruit, index) => {
        return cardTemplate("Card", fruit.name, fruit.id)
    }).join("");
    container.innerHTML = flipCards;
    // console.log(flipCards);
}

function namingFlipCard(flipCard, index) {
    let backSide = flipCard.children[0].children[1];
    backSide.innerHTML = `${fruits[index]}`

}

function flippingCards() {
    let cards = document.querySelectorAll(".flip-card")
    cards.forEach((card, index) => {
        card.children[0].children[0].addEventListener("click", () => {
            if (!isFlipping) {
                isFlipping = true;
                card.classList.add("clicked");
                fruitsJSON[index].isFlipped = true;
                console.log(fruitsJSON)
                checkingWinCondition()
                setTimeout(()=>{
                    isFlipping=false
                },600)
            }
        })
    })
}

function checkingWinCondition() {
    let flippedCards = fruitsJSON.filter((fruit, index) => {
        return fruit.isFlipped;
    })
    if (flippedCards.length == 2) {
        if (flippedCards[0].name == flippedCards[1].name && flippedCards[0].id != flippedCards[1].id) {
            alert("Won!!");
        }
        else {
            setTimeout(() => {
                closingCards(flippedCards);
                isFlipping=false;
            }, 600);
        }
    }
}

function closingCards(flippedCards) {
    flippedCards.forEach((card, index) => {
        let cardElement = document.querySelector(`#${card.id}`)
        cardElement.classList.remove("clicked");
        fruitsJSON[index].isFlipped = false;
    })
}