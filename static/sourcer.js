function processSources() {
    const sources = new Array();
    const links = document.querySelectorAll(".source[href]");
    links.forEach(link => {
        const href = link.getAttribute("href");
        let idx = sources.findIndex(source => source.href === href);
        if (idx == -1) {
            const name = link.getAttribute("data-sourcer-name");
            const reporter = link.getAttribute("data-sourcer-reporter");
            const title = link.getAttribute("data-sourcer-title");
            const date = link.getAttribute("data-sourcer-date");
            idx = sources.push(
                {
                    href: href,
                    name: name,
                    reporter: reporter,
                    title: title,
                    date: date
                }) - 1;
        }
        link.innerHTML=`<sup><a href="#source${idx}">[${idx + 1}]</a></sup>`
    });

    const worksCited = document.querySelector("section.sourcer-works-cited");
    const hr = document.createElement("hr");
    worksCited.appendChild(hr);
    const wcTitle = document.createElement("h3");
    wcTitle.innerText = "Works Cited";
    worksCited.appendChild(wcTitle);
    for (let i = 0; i < sources.length; i++) {
        const source = document.createElement("div");
        const data = sources[i];
        source.id = "source" + i;
        source.innerHTML = `<p>${i + 1} - <a href="${data.href}">${data.href}</a></p>`
        worksCited.appendChild(source);
    }
}

processSources();