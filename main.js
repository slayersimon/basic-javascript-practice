console.log('I am JavaScript funning in your page!')

let mainHeader = document.querySelector('h1')

console.log(mainHeader)

let allHeaders = document.querySelectorAll('h1')

console.log(allHeaders)

mainHeader.textContent = 'Simon Rulz'

mainHeader.setAttribute("Style", "color: red; border: 1px solid blue;")

let newDiv = document.createElement("div");
newDiv.textContent = 'Here I am! A new Div!'

document.querySelector('main').setAttribute("style", "background-color: #dfdfdf;")
document.querySelector('main').appendChild(newDiv)