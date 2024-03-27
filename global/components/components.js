class BlogHeading extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let title = this.getAttribute("title") || "No Title"
        let date = this.getAttribute("date") || "No Date"
        this.innerHTML = /*html*/ `
            <div class="blog-heading">
                <h1>${title}</h1>
                <h4>By Nate Levison - ${date}</h4>
                <hr>
            </div>
        `;
    }
}

class MyFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let root = this.getAttribute("root") || "../"
        // DISABLED!
        this._innerHTML = /*html*/ `
            <footer>
                <div class="footer-sec">
                    <h5>This Website</h5>
                    <ul>
                        <li class="footer-link"><a href="${root}">Home</a></li>
                        <li class="footer-link"><a href="${root}about/">About</a></li>
                        <li class="footer-link"><a href="${root}blog">Blog</a></li>
                        <li class="footer-link"><a href="${root}my_projects/">Projects</a></li>
                    </ul>
                </div>
                <div class="footer-sec">
                    <h5>Links & Resources</h5>
                    <ul>
                        <li class="footer-link">
                            <a href="https://www.codecademy.com">Learn code</a>
                        </li>
                        <li class="footer-link">
                            <a href="https://www.w3schools.com">Learn code</a>
                        </li>
                        <li class="footer-link">
                            <a href="../about-site">About this site</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-sec">
                    <h5>Contact & Help</h5>
                    <ul>
                        <li class="footer-link">
                            <a href="mailto:natelevison@gmail.com">Email me</a>
                        </li>
                        <li class="footer-link">
                            <a href="https://github.com/Cheespeasa1234/cheespeasa1234.github.io/issues/new">Report an issue</a>
                        </li>
                        <li class="footer-link">
                            <a href="mailto:natelevison@gmail.com">Legal</a>
                        </li>
                    </ul>
                </div>
            </footer>
        `;
    }
}

class MyNav extends HTMLElement {
    constructor() {
        super();
    }

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
                    <a class="nav-link scl" href="https://www.twitter.com/CiY310" target="_blank">
                        <i class="fa-brands fa-twitter"></i>
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

class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = /*html*/ `
            <div>
                <h1>My Custom Element</h1>
                <p>This is a custom element</p>
            </div>
        `;
    }
}

customElements.define("my-nav", MyNav);
customElements.define("my-foot", MyFooter);
customElements.define("blog-head", BlogHeading);
customElements.define("custom-el", MyCustomElement);