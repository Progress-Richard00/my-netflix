const BASE_URL = 'https://omdbapi.com/'
const API_KEY ="117ac725"

//  == STEP 1: Get movies from internet=====

async function getMovies(searchWord) {
    //  build the url where we will ask for the movies

    let url = BASE_URL + "?apikey=" + API_KEY + "&S=" + searchWord
    
    //  go to the internet and brin the movies
    let response = await fetch(url)

    // read the information that came back by converting to json()
    let data = await response.json()

    // check if the movies came successfully

    if (data.Response === "True") {
        return data.Search 
    } else {
        console.log("Sorry, No moviers found")
        return[];
    }
}

function showMovies(containerId, movielist){
    let container = document.getElementById(containerId)

    // Clears all the movies you typed manually
    container.innerHTML = '';

    if(movielist.length === 0){
        container.innerHTML = "<p>No Movies Found</p>"
        return
    }
    movielist.forEach(movie => {
//    let card = document.createElement("")   
let image = movie.Poster

if(image === "N/A") {
    image = ""
}
let imgElemnt = document.createElement("img")

imgElemnt.src = image

container.appendChild(imgElemnt)

});
}
 





async function startApp() {
    console.log("website is Starting")
    // await getMovies("movies")
showMovies("adventure-container", await getMovies("movies"))
showMovies("series-container", await getMovies("series"))
showMovies("comedy-container", await getMovies("movies"))

 
}



document.addEventListener("DOMContentLoaded", startApp)