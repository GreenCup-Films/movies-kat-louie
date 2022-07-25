
import createView from "../createView.js"

export default function InsertQuoteView(props) {
    return `
<form class="container">
    <h1>Create Your Quote</h1>
    <form>
        <label for="quoteText" class="form-label">Add your quote</label>
        <input class="form-control" list="datalistOptions" id="quoteText" placeholder="Enter a your quote">
        <button class="form-control" id="insert-btn">Insert Quote</button>
    </form>
</div>
`;
}

export function InsertQuoteEvents() {
    const insertBtn = document.querySelector("#insert-btn");
    insertBtn.addEventListener("click", function(event) {
        const quoteText = document.querySelector("#quoteText").value;
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': MY_QUOTES_API
            },
            body: JSON.stringify([quoteText])
        }
        fetch("https://dogfacts.fulgentcorp.com:12250/v1/quotes", requestOptions)
            .then(function(response) {
                if(!response.ok) {
                    console.log("add dog fact error: " + response.status);
                } else {
                    console.log("add dog fact ok");
                    createView("/dogs");
                }
            });
    })
}