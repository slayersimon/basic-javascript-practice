
/*async function getPokemonData(url) {
const response = await fetch(url)
return await response.json()
}*/

async function getPokemonData(url) {
try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    populateDOM(data.results)
} catch (error) {
    console.error(error)
}
}

getPokemonData('https://pokeapi.co/api/v2/pokemon')


let mainArea = document.querySelector('main')

function populateDOM(pokeArray) {
pokeArray.forEach((pokemon) => {
    console.log(pokemon)
    let pokeDiv = document.createElement('div', 'charDiv')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img', 'picDiv')

    /*let pokenum = getPokeNumber(pokemon.url)*/
 
    name.textContent = person.name

    pic.src = `../images/${pokeNum}.png` //HEEEEEEEEEEEEEEEELP

    personDiv.appendChild(name)
    personDiv.appendChild(pic)
    
       mainArea.appendChild(pokeDiv)

})
}

function getPokeNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ){
        return `00${charID.slice(1,2)}`
    } else {
      return `0${charID}`
    }
}
