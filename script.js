const header = document.getElementById("key");
const mouse = document.querySelector("#mouse");
const lock = document.querySelector("#lock");

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.style.cursor = "pointer";

header.innerHTML = "ready";
mouse.innerHTML = "ready";
lock.innerHTML = "ready";

ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fill();

let keyDown = {};
let mouseDown = {};
let mouseX, mouseY;
let movedX, movedY;
let mouseLocked;


document.addEventListener("visibilitychange", (event) => {
	if (document.hidden) {
		keyDown = {};

		header.innerHTML = "keys ";

	  for (const key in keyDown) {
	  	if (keyDown[key] === true) {
	  		header.innerHTML += key + ", ";
	  	}
	  }

	  header.innerHTML = header.innerHTML.slice(0, -2) + " true";
	}
});

onkeydown = (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }

  if (event.key == `Tab`) {
  	event.preventDefault();
  }

  keyDown[event.key] = true;

  header.innerHTML = "keys ";

  for (const key in keyDown) {
  	if (keyDown[key] === true) {
  		header.innerHTML += key + ", ";
  	}
  }

  header.innerHTML = header.innerHTML.slice(0, -2) + " true";
};

onkeyup = (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }

  keyDown[event.key] = false;

  header.innerHTML = "keys ";

  for (const key in keyDown) {
  	if (keyDown[key] === true) {
  		header.innerHTML += key + ", ";
  	}
  }

  header.innerHTML = header.innerHTML.slice(0, -2) + " true";
};

onmousedown = (event) => {
	mouseDown[event.button] = true;
	mouse.innerHTML = "mouse " + event.button + " " + mouseDown[event.button];
};

onmouseup = (event) => {
	mouseDown[event.button] = false;
	mouse.innerHTML = "mouse " + event.button + " " + mouseDown[event.button];
};

oncontextmenu = (event) => {
	event.preventDefault();
};

onmousemove = (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;

	mouse.innerHTML = "mouseX = " + mouseX + ", mouseY = " + mouseY;
	
	movedX = event.movementX;
	movedY = event.movementY;
};

canvas.addEventListener("click", async () => {
    await canvas.requestPointerLock({
   		unadjustedMovement: true,
    });
});

onmouseenter = (event) => {
	mouse.innerHTML = "mouse in here";
};

onmouseout = (event) => {
	mouseX = event.clientX;
	mouseY = event.clientY;

	mouse.innerHTML = "last mouseX = " + mouseX + ", last mouseY = " + mouseY;
};

document.addEventListener("pointerlockchange", (event) => {
  	if (document.pointerLockElement) {
  		mouseLocked = true;
    	lock.innerHTML = "pointer locked";
    }
  	else {
  		mouseLocked = false;
    	lock.innerHTML = "pointer not locked";
    	mouse.innerHTML = "mouseX = " + mouseX + ", mouseY = " + mouseY;
  	}
});

function loop() {
	if (document.pointerLockElement === canvas) {
		mouse.innerHTML = "innerX = " + movedX + ", innerY = " + movedY;
	}
	movedX = 0;
	movedY = 0;
	requestAnimationFrame(loop);
}

loop();