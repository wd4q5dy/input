var mouseDown = {};
var mouseX, mouseY;
var dmouseX, dmouseY;

document.addEventListener("mousedown", (event) => {
	mouseDown[event.button] = true;
});

document.addEventListener("mouseup", (event) => {
	mouseDown[event.button] = false;
});

document.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});

document.addEventListener("mousemove", (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;
	
	dmouseX = event.movementX;
	dmouseY = event.movementY;
});

document.addEventListener("mouseout",  (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;
});