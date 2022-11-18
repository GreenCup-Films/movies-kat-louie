import createView from "../createView.js"
export default function addMovieView (props) {
    return `

<form class="container">
    <h1 class="">Add a movie</h1>
    <form>
        <label for="MovieInput" class="form-label">Add New Movie</label>
        <input class="form-control" list="datalistOptions" id="movieInput" placeholder="Enter a new movie">
        <label for="MovieInput" class="form-label">Add New Movie</label>
        <input class="form-control" list="datalistOptions" id="movieInput" placeholder="Enter a new movie">
        
        <button class="form-control" id="insert-btn">Submit New</button>
    </form>
    <a href="/movies" data-link>Movies</a>
</div>
`;

}

export function addMovieEvent () {
    const addMovieBtn = document.getElementById("insert-btn")
    addMovieBtn.addEventListener("click", movieInput)
}
function movieInput() {

    const movieInput = document.querySelector("#movieInput");
    const movieText = movieInput.value.trim();


    if(movieText.length < 1) {
        alert("Movie recommendation cannot be blank");
        return;
    }

    const newMovie = {
       name: movieText,
    }
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie)
    }
    fetch("https://confirmed-secretive-opal.glitch.me/movies", requestOptions)
        .then(function(response) {
            if(!response.ok) {
                alert("add movie error: " + response.status);
            } else {
                alert("add movie success");
                createView("/add-movie");
            }
        });
    createView("/movies");

}



