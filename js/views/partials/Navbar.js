
export default function Navbar(props) {
    let html = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" data-link>GCF Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" data-link>Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-link>Rent</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" data-link>About us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        `;
    return html;
}
// <nav>
//     <a className="jalopy-nav" href="/" data-link>Home</a>`;
//     html = html + `<a className="jalopy-nav" href="/about" data-link>About</a>`;
//     html += `<a className="jalopy-nav" href="/quotes" data-link>Quotes</a>`;
//     html += `</nav>