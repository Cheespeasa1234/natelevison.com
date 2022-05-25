let href = location.href;

let getYes=()=>location.href.substring(location.href.indexOf("?y=")+3,location.href.indexOf("?n="))
let getNo=()=>location.href.substring(location.href.indexOf("?n=")+3)

document.getElementById("y").onclick = function() {location.href=getYes()}
document.getElementById("n").onclick = function() {location.href=getNo()}