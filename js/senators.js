async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data 
    } catch.error(error) {
        console.error(error)
    }
}

// now, use the returned async data
let allSenators = []
const theData = getAPIData('senators.json').then(data => {
    console.log(data)
})