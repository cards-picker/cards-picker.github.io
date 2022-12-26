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
    // TODO: show if it's the best card between the 3 ones
    pickCards()
}
