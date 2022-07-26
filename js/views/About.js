

export default function About(props) {
    // language=HTML
    return `
        <header>
            <h1>About Page</h1>
        </header>
        <main>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <p id="about-text">Kat's fave movie quote</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <img src="assets/Pro-Kat.jpg" alt="picture of a developer">
                        <p>Katherine "the magnificent" Gil</p>
                    </div>
                    <div class="col-4">
                        <img src="../assets/SA-2022.jpg" alt="picture of a developer">
                        <p>Louie "Magic Mic" Espinosa</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button id="change-about-text">Change for Louie's fave movie quote</button>
                    </div>
                    <div class="col-12">
                        <a href="/" data-link>Go Home</a>
                    </div>
                </div>
                <div
            </div>
        </main>
    `;
}
function changeAboutQuote() {
    document.querySelector("#about-text").innerText = "Louie's fave movie quote!";
}

export function AboutEvents() {

    document.querySelector("#change-about-text").addEventListener("click", changeAboutQuote);
}