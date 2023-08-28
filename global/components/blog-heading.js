class BlogHeading extends HTMLElement {
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

customElements.define("blog-head", BlogHeading);