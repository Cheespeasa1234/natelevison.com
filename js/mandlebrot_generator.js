// grab url params
let paramstr = window.location.search;
const urlParams = new URLSearchParams(paramstr);

// init sim
m = document.getElementById("canv").getContext("2d")
moveX = Number( urlParams.get("x") ) || 0.12
moveY = Number( urlParams.get("y") ) || 0.82
zoom  = Number( urlParams.get("z") ) || 200
time  = Number( urlParams.get("t") ) || 1000

document.getElementById("zoomin").onclick = () => {
    location.href = location.href.substring(0, location.href.indexOf("?")) + `?x=${moveX}&y=${moveY}&z=${zoom + 100}&t=${time}`
}

document.getElementById("zoomout").onclick = () => {
    location.href = location.href.substring(0, location.href.indexOf("?")) + `?x=${moveX}&y=${moveY}&z=${zoom - 100}&t=${time}`
}


console.log([moveX, moveY, zoom, time])

atom = (x, y, c) => {
    m.fillStyle = c;
    m.fillRect(x, y, 3, 3)
}
for (y = 1; y < 1000; y++) {
for (x = 1; x < 1000; x++) {

dx = (x - 500) / zoom - moveX
dy = (y - 500) / zoom - moveY
a = dx
b = dy

for (t = 1; t < time; t++) {

d = (a * a) - (b * b) + dx
b = 2*(a*b)+dy
a = d
H = d > 200;

if (H) {
atom(x, y, "rgb("+t*3+","+t+","+t*0.5+")")
break
}
}
}
}