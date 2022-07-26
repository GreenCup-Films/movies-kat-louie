import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1 class="title">GreenCup Films</h1>
        </header>
        <main>
            <div>
            <img src="assets/posters/1.jpg" class="img1">
                <hr class="horizontalLIne">
                <span>Don't know what to watch? here is the top 4 most watched movies</span>
                <button class="button">Search</button>
                <p class="para1">
                    This is the home page text.
                </p>    
            </div>
        </main>
    `;
}

const imagePaths = [
    "assets/posters/1.jpg",
    "assets/posters/2.jpeg",
    "assets/posters/3.jpg",
    "assets/posters/4.jpg"
]
let currentImageIndex = 1;

export function HomeEvents (){
    const button = document.querySelector(".button");
    button.addEventListener("click", function (event){
        const img = document.querySelector(".img1");
        img.setAttribute("src", imagePaths[currentImageIndex]);
        currentImageIndex++;
        if (currentImageIndex === 4){
            currentImageIndex = 0;
        }
    })
}