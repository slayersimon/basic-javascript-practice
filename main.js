import { films } from './assets/films.js'
import { people } from './assets/people.js'

console.log('I am JavaScript running in your page!')

let mainArea = document.querySelector('main')

films.forEach(function(film) {
   let filmDiv = document.createElement('div')
   let filmTitle = document.createElement('h1')
   let filmCrawl = document.createElement('p')

   filmTitle.textContent = film.title
   filmCrawl.textContent = film.openingCrawl

filmDiv.appendChild(filmTitle)
filmDiv.appendChild(filmCrawl)

   mainArea.appendChild(filmDiv)
});


people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
 
    name.textContent = person.name
    gender.textContent = person.gender
 
 personDiv.appendChild(name)
 personDiv.appendChild(gender)
 
    mainArea.appendChild(personDiv)
})