document.getElementById("backButton").onclick = function () {
    location.href = "../";
}

function isLetter(l) {
    return l.charCodeAt(0) >= 65 || l.charCodeAt(0) <= 122;
}

document.getElementById("compile").onclick = function () {

    let code = document.getElementById("code").value + "";
    document.getElementById("output").innerHTML = "";

    let acc = 0;
    let inc = 1;

    for (let i = 0; i < code.length; i++) {
        let c = code.charAt(i);


        if (c == '+')
            acc += inc;
        if (c == '-')
            acc -= inc;
        if (c == '=')
            document.getElementById("output").innerHTML += acc + "<br>";
        if (c == '{')
            inc++;
        if (c == '}')
            inc--;

    }
}