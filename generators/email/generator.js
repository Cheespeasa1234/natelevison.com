let startingLink = "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto"
let get = id => {document.getElementById(id)};

function hex(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push("%" + hex);
    }
    return arr1.join('');
}

let to = "cheespeasa@gmail.com"
if (get("sep_to").checked) {
    to = to.replaceAll(" ", ",")
}
let cc = "amongus@gmail.com"
if (get("sep_to").checked) {
    to = to.replaceAll(" ", ",")
}
let bcc = "sussy@gmail.com"
if (get("sep_to").checked) {
    to = to.replaceAll(" ", ",")
}
let subject = "SUS AMOGUS"
let body = "vent haha funny"
let newlink = startingLink + hex((to ? `&to=${to}` : '') + (cc ? `&cc=${cc}` : '') + (bcc ? `&bcc=${bcc}` : '') + (bcc ? `&bcc=${bcc}` : '') + (subject ? `&su=${subject}` : '') + (body ? `&body=${body}` : ''))

console.log(newlink);