let quotes =[
    {
        quote: "War is organized murder and torture against our brothers.",
        author: "Alfred Adler"
    },
    {
        quote: "Follow sound business trends, not fashion trends.",
        author: "Janice Dickinson"
    },
    {
        quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
        author: "Alice Walker"
    },
    {
        quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.",
        author: "Adnan Pachachi"
    },
    {
        quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        author:  "John F. Kennedy"
    },
    {
        quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
        author: "Harvey Fierstein"
    },
    {
        quote: "I think God's justice is making wrongs right.",
        author: "Joel Osteen"
    },{
        quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
        author: "H. L. Mencken"
    },
    {
        quote: "If science fiction is the mythology of modern technology, then its myth is tragic." ,
        author: "Ursula K. Le Guin"
    },
    {
        quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
        author: "Lucy Liu"
    },
]
export default function QuotesView (props) {
    quotes = props.quotes
    console.log(quotes);
    return `
<div class="container-fluid">
<h1 class="title">Quote of the Day</h1>
    <div class="card"">
        <div class="card-body">
        <p id="paraGoesHere"></p>
        </div>
    </div>
<button class="button" id="buttonQuotes">Search for a quote</button>
    <a data-link href="/insert-quote" class="insert-quote-link">Insert Quote</a>
</div>
    `
}
export function QuotesEvents (props) {

        const p = document.getElementById("paraGoesHere");
        const btn = document.getElementById("buttonQuotes");
        let count = 0;
        btn.addEventListener("click", () => {
            p.innerHTML = `<h4>${quotes[count].quote}</h4>
                            <h6>${quotes[count].author}</h6>`
            console.log(count)
            count++;
            if (count === 3){
                count = 0;
            }
        })
}