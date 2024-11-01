document.addEventListener("DOMContentLoaded", () => {
    drawBoard();
})
let fruitData = [
    [
        { name: 'apple', isflipped: false },
        { name: 'orange', isflipped: false },
        { name: 'mango', isflipped: false },
        { name: 'pear', isflipped: false },
        { name: 'grapes', isflipped: false },
    ],
    [
        { name: 'apple', isflipped: false },
        { name: 'orange', isflipped: false },
        { name: 'mango', isflipped: false },
        { name: 'pear', isflipped: false },
        { name: 'grapes', isflipped: false },
    ],
    [
        { name: 'apple', isflipped: false },
        { name: 'orange', isflipped: false },
        { name: 'mango', isflipped: false },
        { name: 'pear', isflipped: false },
        { name: 'grapes', isflipped: false },
    ],
    [
        { name: 'apple', isflipped: false },
        { name: 'orange', isflipped: false },
        { name: 'mango', isflipped: false },
        { name: 'pear', isflipped: false },
        { name: 'grapes', isflipped: false },
    ],
    [
        { name: 'apple', isflipped: false },
        { name: 'orange', isflipped: false },
        { name: 'mango', isflipped: false },
        { name: 'pear', isflipped: false },
        { name: 'grapes', isflipped: false },
    ]
]
let fruits = ["Grapes", "Orange", "Grapes", "Mango"];
let fruitsJSON = fruits.map((fruit, index) => {
    return { name: fruit, index: index + 1, id: `Card_${index + 1}`, isMatched: false, isFlipped: false }
})
console.log(fruitsJSON)
let previousItem = ""
let cardTemplate = (frontSide, backSide, id, size) => {
    return `<div class="flip-card" style="width:${size}px;height:${size}px" id="${id}" onclick="onClickCard(this)">
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
    renderingCards();
}

function renderingCards() {
    let container = document.querySelector(".container");
    let size = fruitData.length;
    let boxsize = "100";
    for (let i = 0; i < size; i++) {
        let rowE = document.createElement("div");
        rowE.classList.add("row");
        for (let j = 0; j < size; j++) {
            let template = cardTemplate("H", fruitData[i][j].name, `${i},${j}`, boxsize);
            rowE.innerHTML += template;
        }
        container.appendChild(rowE);
    }
}

function checkingWinCondition() {
    // let flippedCards = fruitsJSON.filter((fruit, index) => {
    //     return fruit.isFlipped;
    // })
    // if (flippedCards.length == 2) {
    //     console.log(flippedCards.length, flippedCards)
    //     if (flippedCards[0].name == flippedCards[1].name && flippedCards[0].id != flippedCards[1].id) {
    //         waiting(() => { alert("Won!!!") })
    //     }
    //     else {
    //         waiting(() => {
    //             closingCards(flippedCards);
    //         })
    //     }
    // }
    // if (flippedCards.length > 2) {
    //     waiting(() => {
    //         closingCards(flippedCards);
    //     })
    // }
    
}

function waiting(slothFN) {
    setTimeout(() => {
        slothFN();
    }, 600);
}

function closingCards(flippedCards) {
    flippedCards.forEach((card, index) => {
        let cardElement = document.querySelector(`#${card.id}`)
        cardElement.classList.remove("clicked");
        let cardIndex = fruitsJSON.findIndex((fruit, index) => {
            return card.id == fruit.id;
        })
        fruitsJSON[cardIndex].isFlipped = false;
    })
}

function onClickCard(card) {
    card.classList.add("clicked");
    let indexes=card.getAttribute("id").split(",")
    let indexX = indexes[0];
    let indexY =indexes[1];
    fruitData[indexX,indexY].isflipped=true;
    checkingWinCondition()
    console.log("Clicked")
}