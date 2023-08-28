// define the custom Project element

class ProjectElement extends HTMLElement {
    render() {
        let title = this.getAttribute("proj-title") || "no title given";
        let timerange = this.getAttribute("proj-time") || "no timerange given";
        let linkhref = this.getAttribute("proj-href") || undefined;
        let linkname = this.getAttribute("proj-linkname") || undefined;
        let desc = this.innerText || "no innerhtml found";

        let link = `<a href="${linkhref}" class="project-lnk">${linkname}</a>`;

        this.innerHTML = /* html */ `
            <div class="project-head">
                <span class="project-title">${title}</span>
                <span class="project-time-range">${timerange}</span>
                ${linkhref == undefined ? "no link" : link}
            </div>
            </p class="project-desc">Desc: ${desc} end of desc</p>
        `;
    }
    connectedCallback() {
        if(!this.rendered) {
            this.render();
            this.rendered = true;
        }
        
    }
    
    attributedChangedCallback(name, oldValue, newValue) {
        this.render()
    }

    static get observedAttributes() {return ["proj-title", "proj-time", "proj-href", "proj-linkname"]}

}

customElements.define("my-proj", ProjectElement)