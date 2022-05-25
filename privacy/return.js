let href = location.href;
let returnTo = href.substring(href.indexOf("?r="));

document.getElementById("y").onclick = function() {location.href=returnTo}