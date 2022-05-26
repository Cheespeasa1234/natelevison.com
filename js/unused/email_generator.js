let startingLink = "mailto:"
let get = (id) => {document.getElementById(id)};


let generateLink = () => {

    let to = document.getElementById("to").value
    if (document.getElementById("sep_to").checked)
        to = to.replaceAll(" ", ",")
    let cc = document.getElementById("cc").value
    if (document.getElementById("sep_cc").checked)
        console = cc.replaceAll(" ", ",")
    let bcc = document.getElementById("bcc").value
    if (document.getElementById("sep_bcc").checked)
        bcc = bcc.replaceAll(" ", ",")
    let su = document.getElementById("su").value
    let bo = document.getElementById("bo").value
    if(cc) {
        cc = "?cc=" + cc;
        bcc = "&bcc=" + bcc;
        su = "&subject=" + su;
        bo = "&body=" + bo;
    } else if(bcc) {
        cc = ""
        bcc = "?bcc=" + bcc;
        su = "&subject=" + su;
        bo = "&body=" + bo;
    } else if(su) {
        cc = "";
        bcc = "";
        su = "?subject=" + su;
        bo = "&body=" + bo;
    } else if(bo) {
        cc = "";
        bcc = "";
        su = "";
        bo = "?body=" + bo;
    } else {
        cc = "";
        bcc = "";
        su = "";
        bo = "";
    }

    let newlink = startingLink + to + cc + bcc + su + bo;

    document.getElementById("out").innerHTML = newlink;
}