//your JS code here. If required.

let div = document.getElementById("sizeInfo");
let h1 = div.children[0];

window.addEventListener("load", (e) => {
	h1.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
})

window.addEventListener("resize", (e) => {
	h1.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
})