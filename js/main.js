import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('I am JavaScript running in your page!')

let mainArea = document.querySelector('main')

films.forEach(function(film) {
   let filmDiv = document.createElement('div')
   let filmTitle = document.createElement('h1')
   let filmCrawl = document.createElement('p')

   filmTitle.textContent = film.title
   filmCrawl.textContent = film.opening_crawl

filmDiv.appendChild(filmTitle)
filmDiv.appendChild(filmCrawl)

   mainArea.appendChild(filmDiv);
});


people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    let charNum = getCharNumber(person.url)
 
    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
 
 personDiv.appendChild(name)
 personDiv.appendChild(gender)
 personDiv.appendChild(pic)
 
    mainArea.appendChild(personDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ){
        return (charID.slice(1,2))
    } else {
        return charID
    }
}

const maleCharacters = people.filter(person => person.gender === 'male')
const maleCharacters = people.filter(person => person.gender === 'female')

/* command + f brings up a search thing, check boxes to limit items to search words. ex: "male" to find if the gender is male*/
console.log(maleCharacters)
console.log(femaleCharacters)
















