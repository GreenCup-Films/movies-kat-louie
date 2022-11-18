import createView from "../createView.js"
let movies = [];
export default function movieView(props){
    console.log(props);
    movies = props.movies
    let html = `
    <main>
 <div>
    <h1 class="title">Movies</h1>
</div>
    <main class="mainPosters">
    `
    for (let i = 0; i < movies.length; i++) {
        html += `
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
                  <img src="../../assets/posters/${movies[i].id}.jpg" alt="MoviePoster" class="posters">
        </div>
        <div class="flip-card-back">
        <button data-id=${movies[i].id} type="button" class="btn-close delete-btn" aria-label="Close"></button>
            <p class="moviesGoHere">
                <h1>${movies[i].name}</h1>
                <h6>${movies[i].year}</h6>
                <h5>${movies[i].genre}</h5>
                <h5>Rating: ${movies[i].rating}</h5>
                <h6>${movies[i].director}</h6>
            </p>
        </div> 
    </div>
</div>
        `
    }
    html += `<a data-link href="/add-movie" class="add-movie-link">Add Movies</a>
            `

    return html;
}
export function movieEvent(props){
    addDeleteListeners();
}
function addDeleteListeners () {
    const deleteMovieBtns = document.getElementsByClassName("delete-btn")
    for (let btn of deleteMovieBtns) {
        btn.addEventListener("click", deleteMovie)


    }
}
function deleteMovie() {
    const id = this.getAttribute("data-id")
    const deleteOptions = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    }
    console.log(id);
    fetch("https://confirmed-secretive-opal.glitch.me/movies/" + id, deleteOptions)
        .then(function (response) {
            if (!response.ok) {
                alert("delete movie error: " + response.status);
            } else {
                alert("delete movie success");

            }
        });
    createView("/movies");
}


