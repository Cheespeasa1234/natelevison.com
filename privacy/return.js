let href = location.href;
let returnTo = href.substring(href.indexOf("?r="));
console.log(returnto);

document.getElementById("y").onclick = function() {location.href=returnTo}