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
    <main>
    `
    for (let i = 0; i < 15; i++) {
        html += `
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
                  <img src="../../assets/posters/${movies[i].id}.jpg" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
            <p class="moviesGoHere">
                <h2>${movies[i].name}</h2>
<!--            <img>-->
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
    html += `<a data-link href="/add-movie" class="add-movie-link">Add movies</a>`
    return html;
}
export function movieEvent(props){

}


