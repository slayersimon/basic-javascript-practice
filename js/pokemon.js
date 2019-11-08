
/*async function getPokemonData(url) {
const response = await fetch(url)
return await response.json()
}*/

async function getPokemonData(url) {
try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
} catch (error) {
    console.error(error)
}
}

const data = getPokemonData('https://pokeapi.co/api/v2/pokemon')


function populateDOM(pokeArray) {
pokeArray.forEach((pokemon) => {
    let personDiv = document.createElement('div', 'charDiv')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img', 'picDiv')

    /*let charNum = getCharNumber(person.url)*/
 
    name.textContent = person.name
    gender.textContent = `Gender: ${person.gender}`
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)
    
       mainArea.appendChild(personDiv)
   
       personDiv.setAttribute('class', 'charDiv')
})
   }