let set = (id, innerHTML) => get(id).innerHTML = innerHTML;
let get = (id) => document.getElementById(id);

let calculate_Winner = () => {
    let winner = pickWinner();
    set("output", winner);
    console.log("Calculated winner: " + winner)
}

let calculate_All = () => {
    let all = generateZygotes().toString();
    set("output", all);
    console.log("Calculated all: " + all)
}

let isCapital = (c) => c.toLowerCase() != c;

let format = (text) => {
    if(isCapital(text.charAt(1)))
        return text.charAt(1) + text.charAt(0);
    return text;
}

let getRandomInt = (max) => Math.floor(Math.random() * max);
let pickWinner = () => generateZygotes()[getRandomInt(4)];
let generateZygotes = () => {

    let motherAlleles = document.getElementById("mother").value;
    let fatherAlleles = document.getElementById("father").value;

    let egg1 = motherAlleles.charAt(0);
    let egg2 = motherAlleles.charAt(1);

    let sperm1 = fatherAlleles.charAt(0);
    let sperm2 = fatherAlleles.charAt(1);

    let zygote1 = format(egg1+sperm1);
    let zygote2 = format(egg1+sperm2);
    let zygote3 = format(egg2+sperm1);
    let zygote4 = format(egg2+sperm2);

    let zygotes = [zygote1, zygote2, zygote3, zygote4];
    return zygotes;

}