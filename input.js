var keyDown = {};
var mouseDown = {};
var mouseX, mouseY;

onkeydown = (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }

  keyDown[event.key] = true;
};

onkeyup = (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }

  keyDown[event.key] = false;
};

onmousedown = (event) => {
	mouseDown[event.button] = true;
};

onmouseup = (event) => {
	mouseDown[event.button] = false;
};

oncontextmenu = (event) => {
	event.preventDefault();
};

onmousemove = (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;
};