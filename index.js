function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt)
}

function randomInArray(array) {
    return array[Math.floor(Math.random()*array.length)]
}

function uniqueRandomsInArray(howMany, array) {
    let result = []
    while (result.length < howMany) {
        const r = randomInArray(array)
        if (result.indexOf(r) === -1) result.push(r)
    }
    return result
}

function pickCards() {
    pickedCards = uniqueRandomsInArray(3, cards)

    cardElts.forEach( (cardElt, index) => {
        cardElt.id = pickedCards[index]
        cardElt.src = 'cards/' + pickedCards[index] + '.jpg'
    })
}

let cards = range(16, 1)
let pickedCards = []
const cardElts = Array.from(document.getElementsByClassName('card'))

pickCards()

function clickCard(card) {
    const isBestCard = pickedCards.every( c => c >= parseInt(card.id) )

    if (isBestCard) {
        document.getElementById('message').textContent = 'Tu as choisi la meilleure des trois cartes'
    } else {
        document.getElementById('message').textContent = "Tu n'as pas choisi la meilleure des trois cartes"
    }
    pickCards()
}
