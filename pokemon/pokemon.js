
async function getPokemonData(url) {
const response = await fetch(url)
return await response.json()
}

async function getTheData() {


try {
    const data = await getPokemonData('https://pokeapi.co/api/v2/pokemon')
} catch (error) {
    console.log(error)
}
}

getTheData()