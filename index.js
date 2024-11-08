document.addEventListener("DOMContentLoaded", () => {
    drawBoard();
})
var size=2
var fruitData = []
var previousItem = ""
var cardTemplate = (frontSide, backSide, id, size) => {
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
    let boxsize = "100";
    creatingData();
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

function creatingData(){
    let data=[]
    for(let i=0;i<size;i++)
    {
        data.push(allFruits.slice(0,size))
    }
    fruitData=data
}

function checkingWinCondition() {
    let flippedCards = fruitsJSON.filter((fruit, index) => {
        return fruit.isFlipped;
    })
    if (flippedCards.length == size) {
        console.log(flippedCards.length, flippedCards)
        if (flippedCards[0].name == flippedCards[1].name && flippedCards[0].id != flippedCards[1].id) {
            waiting(() => { alert("Won!!!") })
        }
        else {
            waiting(() => {
                closingCards(flippedCards);
            })
        }
    }
    if (flippedCards.length > size) {
        waiting(() => {
            closingCards(flippedCards);
        })
    }
    
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
    fruitData[indexX][indexY].isflipped=true;
    checkingWinCondition()
    console.log("Clicked")
}

var allFruits=[
    {
      name: 'Apple',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Banana',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Cherry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Durian',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Elderberry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Fig',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Grape',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Honeydew Melon',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Indian Gooseberry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Jackfruit',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Kiwi',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Lemon',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Lime',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Mango',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Nectarine',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Olive',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Papaya',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Quince',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Raspberry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Strawberry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Tangerine',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Ugli Fruit',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Vanilla Fruit',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Watermelon',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Xigua Melon',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Yam',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Zucchini',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Blueberry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Cranberry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Dragon Fruit',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Guava',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Hazelnut',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Pear',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Plum',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Pineapple',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Persimmon',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Soursop',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Tamarind',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Yuzu',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Acai Berry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Blackcurrant',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Cloudberry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Goji Berry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Juniper Berry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Apple',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Banana',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Cherry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Durian',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Elderberry',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    },
    {
      name: 'Fig',
      isMatched: false,
      isFlipped: false,
      url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit-600x600.jpg'
    }
  ]