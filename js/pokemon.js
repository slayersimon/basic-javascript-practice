
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


function populateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

    fillCardBack(pokeBack, single_pokemon)


    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeFront.setAttribute('charDivs', 'class', 'card_face card_face--front')
    pokeBack.setAttribute('class', 'card_face card_face--back')
    pic.setAttribute('class', 'picDivs')


    let pokeNum = getPokeNumber(single_pokemon.id)
 
    name.textContent = `${single_pokemon.name} height: ${single_pokemon.height}`
    pokeFront.appendChild(name)

    pic.src = `../images/${pokeNum}.png` //HEEEEEEEEEEEEEEEELP
    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)


    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
 
    mainArea.appendChild(pokeScene)

    pokeCard.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });
}


function fillCardBack(pokeBack, data) {
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('h5')
    pokeOrder.textContent = data.order 
    pokeHP.textContent = data.stats[0].base_stat
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
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
