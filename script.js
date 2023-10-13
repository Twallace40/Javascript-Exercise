let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    title;
    rating;
    haveWatched;

    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    header.innerText = "----------------";
    footer.innerText = "----------------";
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    let element = document.createElement("li");
    element.appendChild(document.createTextNode("A new movie is added"));
    list.appendChild(element);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let total = 0;
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    let list = document.getElementById("list");

    header.innerText = "----------------\nrunning program......\n----------------\nPrinting all movies....";
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for(let movie of allMovies) {
        let element = document.createElement("li");
        element.appendChild(document.createTextNode(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched));
        list.appendChild(element);
        total++;
    }

    footer.innerText = "You have " + total + " movies in total";
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let total = 0;
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    header.innerText = "Printing movie that has a higher rating than " + rating;
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for(let movie of allMovies) {
        if (movie.rating > rating) {
            let element = document.createElement("li");
            element.appendChild(document.createTextNode(movie.title + "has a rating of " + movie.rating));
            list.appendChild(element);
            total++;
        }
    }

    footer.innerText = "In total, there are " + total + " matches";
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    header.innerText = "Changing the status of the movie...";
    footer.innerText = "----------------";
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for (let movie of allMovies) {
        if (movie.title === title) {
            if (movie.haveWatched === true) {
                movie.haveWatched = false;
            } else {
                movie.haveWatched = true;
            }
        }

        break;
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
let printButton = document.getElementById("print");
printButton.onclick = function() {printMovies()};


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
let addButton = document.getElementById("add");
addButton.onclick = function() {addMovie(movie1)};

let changeButton = document.getElementById("changeWatched");
changeButton.onclick = function() {changeWatched("Spiderman")};
/*replace console.log with display on web page*/

// printMovies(); click print button again

/*replace console.log with display on web page*/

// changeWatched("Spiderman"); click changedWatched button again
/*replace console.log with display on web page*/

// printMovies(); click print button again
/*replace console.log with display on web page*/

let highRatingsButton = document.getElementById("highRatings");
highRatingsButton.onclick = function() {highRatings(3.5)};