async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data 
    } catch (error) {
        console.error(error)
    }
}

// now, use the returned async data
let allSenators = []
const theData = getAPIData('senators.json').then(data => {
    allSenators = data.results[0].members
})

const container = document.querySelector('.container')

function populateDOM(senator_array) {
    let card = document.createElement('div') 
    card.setAttribute('class', 'card')
    let cardImage = document.createElement('div')
    cardImage.setAttribute('class', 'card-image')
    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-4by3')
    let figureImage = document.createElement('img')
    figureImage.src = "https://bulma.io/images/placeholders/1280x960.png"
    figureImage.alt = "Placeholder image"
}