class MyNav extends HTMLElement {
  connectedCallback() {
    let root = this.getAttribute("root") || "../";
    let selected = this.getAttribute("selected-index");
    let hideimg = this.getAttribute("hide-img");
    let img = hideimg ? '' : `<img class="logo" alt="logo" src="${root}img/logo.png">`
    this.innerHTML = /*html*/ `

      <nav>
      <div class="main-links">
      <a class="first-link nav-link${selected == 0 ? " active" : ""}" href="${root}">Home</a>
      <a class="nav-link${selected == 1 ? " active" : ""}" href="${root}about">About</a>
      <a class="nav-link${selected == 2 ? " active" : ""}" href="${root}blog">Blog</a>
      <a class="nav-link${selected == 3 ? " active" : ""}" href="${root}my_projects">Projects</a>
      <img class="small-logo" alt="logo" src="${root}img/logo.png">
      </div>
      <div class="social-links">
          <a class="nav-link scl" href="https://www.github.com/Cheespeasa1234" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a class="nav-link scl" href="mailto:natelevison@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
        </div>
        </nav>
    `;
  }
}
customElements.define("my-nav", MyNav);
