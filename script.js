let color1 = document.getElementsByClassName("color1")[0];
let color2 = document.getElementsByClassName("color2")[0];
let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let a = document.getElementsByTagName("a");

// Change the background color to the default set color for the input element
function setBgColorToMatchInput() {
	return body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

// Append body style to css content
function appendTextContent() {
	return css.textContent = setBgColorToMatchInput();
}

function setbuttonBgColor() {
	let firstButton = document.body.children[1].children[2];
	let secondButton = document.body.children[3].children[1];
	firstButton.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	secondButton.style.background = "linear-gradient(to right, " + color2.value + ", " + color1.value + ")";
}

// Changes input value to match bgcolor and changes the text content to the styled background
function handleInputEvent() {
	setBgColorToMatchInput();
	appendTextContent();
	setbuttonBgColor();
}

function afterButtonEvent() {
		color1.value = generateRandomHex();
		color2.value = generateRandomHex();
		setbuttonBgColor();
		setBgColorToMatchInput();
		appendTextContent();
}


function createButtonAfterColor2() {
	let button = document.createElement("button");
	button.appendChild(document.createTextNode("Random color"));
	color2.after(button);
	button.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	button.addEventListener("click", afterButtonEvent);
}

function createTextArea() {
		let textArea = document.createElement('textarea');
  		textArea.value = css.textContent;
  		document.body.appendChild(textArea);
  		textArea.select();
  		document.execCommand('copy');
  		textArea.remove();
}

function createButtonAfterParagraph() {
	let button = document.createElement("button");
	button.appendChild(document.createTextNode("Copy me"));
	css.after(button);
	button.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	button.addEventListener("click", createTextArea)
}


// Generate random hex value
function generateRandomHex() {
	let decimal = Math.floor(Math.random() * 16777216);
	let hex = "#" + decimal.toString(16);
	return hex;
}

createButtonAfterParagraph();
setBgColorToMatchInput();
appendTextContent();
createButtonAfterColor2();
color1.addEventListener("input", handleInputEvent);
color2.addEventListener("input", handleInputEvent);