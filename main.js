import { films } from './assets/films.js'
import { people } from './assets/people.js'

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
 
    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = 'https://starwars-visualguide.com/assets/'
 
 personDiv.appendChild(name)
 personDiv.appendChild(gender)
 
    mainArea.appendChild(personDiv)
})