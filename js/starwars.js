import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')

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
mainArea.appendChild

function populateDOM(someArray) {
someArray.forEach(person => {
    let personDiv = document.createElement('div', 'charDiv')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img', 'picDiv')

    let charNum = getCharNumber(person.url)
 
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

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ){
        return (charID.slice(1,2))
    } else {
        return charID
    }
}

const allDivs = Array.from(document.querySelectorAll('div'))
console.log(allDivs)
const mainHeader = document.querySelector('header')
let maleButton = document.querySelector('#maleCharacter')
maleButton.textContent = 'MaleCharacters'
maleButton.setAttribute('class', 'male')


maleButton.addEventListener('click', () => {
mainArea.textContent = '' 
deleteNode()
populateDOM(maleCharacters)

    let matchedDiv = allDivs.findIndex((oneDiv) => {
        femaleCharacters.forEach(character => {
        return oneDiv.firstChild.textContent === character.name
        })
       /* if(matchedDiv.getAttribute('style') === "display: none;") {
            matchedDiv[0].setAttribute("style", "display: revert;")
} */
    matchedDiv[0].setAttribute("style", "display: none;")
    })
})

console.log(maleCharacters)



let femaleButton = document.querySelector('#femaleCharacter')
femaleButton.textContent = 'FemaleCharacters'
femaleButton.setAttribute('class', 'female')
femaleButton.addEventListener('click', () => {

deleteNode()
populateDOM(femaleCharacters)

    let matchedDiv = allDivs.findIndex((oneDiv) => {
        maleCharacters.forEach(character => {
        return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: revert;")
    })
})
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)


let otherButton = document.querySelector('#otherCharacter')
otherButton.textContent = 'OtherCharacters'
otherButton.setAttribute('class', 'other')
otherButton.addEventListener('click', () => {

deleteNode()
populateDOM(otherCharacters)
})

console.log(otherCharacters)


/* command + f brings up a search thing, check boxes to limit items to search words. ex: "male" to find if the gender is male*/
console.log(maleCharacters)
console.log(femaleCharacters)



function deleteNode() {
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild)
    }
    mainHeader.appendChild(maleButton)
    mainHeader.appendChild(femaleButton)
    mainHeader.appendChild(otherButton)
}





