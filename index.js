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
    const pickedCards = uniqueRandomsInArray(3, cards)

    cardElts.forEach( (cardElt, index) => {
        cardElt.id = pickedCards[index]
        cardElt.src = 'cards/' + pickedCards[index] + '.jpg'
    })
}

let cards = range(16, 1)
const cardElts = Array.from(document.getElementsByClassName('card'))

pickCards()

function clickCard(card) {
    cards = cards.filter(item => item.toString() !== card.id)
    if (cards.length >= 3) {
        pickCards()
    } else {
        noMoreCards()
    }
}

function noMoreCards() {
    document.getElementById('no-more-cards').hidden = false
    cardElts.map( card => card.hidden = true)
}
