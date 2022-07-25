import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1 class="title">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img src="assets/jalopy1.jpeg" class="img1">
                <hr class="horizontalLIne">
                <button class="button">search for Jalopy</button>
                <p class="para1">
                    This is the home page text.
                </p>    
            </div>
        </main>
    `;
}

// export function HomeEvents() {
//     // const authority = getUserRole();
//     const user = getUser();
//     if(!user) {
//         showNotification("Welcome visitor", "secondary");
//     } else {
//         showNotification("Welcome " + user.userName, "info");
//     }
// }
const imagePaths = [
    "assets/jalopy1.jpeg",
    "assets/jalopy2.jpeg",
    "assets/jalopy3.jpeg"
]
let currentImageIndex = 1;

export function HomeEvents (){
    const button = document.querySelector(".button");
    button.addEventListener("click", function (event){
        const img = document.querySelector(".img1");
        img.setAttribute("src", imagePaths[currentImageIndex]);
        currentImageIndex++;
        if (currentImageIndex === 3){
            currentImageIndex = 0;
        }
    })
}