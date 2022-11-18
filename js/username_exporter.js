let start = () => {
    let exportType = getExportType();
    let count = get("count").value;
    let out = "";

    if(exportType === "view") {

        out = "<ul>";
        for(let i = 0; i < count; i++) {
            var n = getName();
            console.log(n);
            out += "<li>" + n + "</li>";
        }

        get("out").innerHTML = "<h2>Your usernames are below.</h2>"+out+"</ul>"

    } else if(exportType === "copy") {

        out = "<ul>";
        let unformatted = "";
        for (let i = 0; i < count; i++) {
            out += "<li>" + getName() + "</li>";
            unformatted += getName() + ",\n";
        }

        get("out").innerHTML = "<h2>Your usernames are below.</h2>" + out + "</ul>"

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(out);

        /* Alert the copied text */
        alert("Copy the text below!\n" + out);

    } else if(exportType === "share") {

        out = "<ul>";
        let unformatted = "";
        for (let i = 0; i < count; i++) {
            out += "<li>" + getName() + "</li>";
            unformatted += getName + ",\n";
        }

        get("out").innerHTML = "<h2>Your usernames are below.</h2>" + out + "</ul>";

        /* Copy the text inside the text field */
        navigator.clipboard.writeText("I generated random usernames with " + location.href + "! Here are my results: "+out);

        /* Alert the copied text */
        alert("Copied message to clipboard. Share the message with friends!");

    }
}

let getExportType = () => get("exportType").value;