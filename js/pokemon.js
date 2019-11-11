
/*async function getPokemonData(url) {
const response = await fetch(url)
return await response.json()
}*/

async function getAPIData(url) {
try {
    const response = await fetch(url)
    const data = await response.json()
    return data
} catch (error) {
    console.error(error)
}
}

//now use the reutrned async data
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon')
.then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
        .then(pokedata => {
           populateDOM(pokedata)
        })
    }
})

let mainArea = document.querySelector('main')


function populateDOM(Single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

    pokeFront.setAttribute('class', 'card_face card_face--front')
    pokeBack.setAttribute('class', 'card_face card_face--back')
    pic.setAttribute('class', 'picDivs')

    let pokeNum = getPokeNumber(single_pokemon.id)
 
    name.textContent = `${single_pokemon.name} height: ${single_pokemon.height}`
   

    pic.src = `../images/${pokeNum}.png` //HEEEEEEEEEEEEEEEELP
    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)


    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeback)
    pokeScene.appendChild(pokeCard)
 
    mainArea.appendChild(pokeScene)

}

/*<div class="scene">\
    <div class="card">
        <div class="card_face card_face--front">front</div>
        <div class="card_face card_face--back">back</div>
    </div>
</div>*/

function getPokeNumber(id) {
    if(id < 10) return `00${id}`
    if(id > 9 && id < 100) {
        return `0${id}`
    } else return id
}
