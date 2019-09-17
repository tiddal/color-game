var dificulty = 6;
var squares = document.querySelectorAll('.square');
var colors = generateRandomColorsArray(dificulty);
var pickedColor = colorPicker();
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var colorDisplay = document.getElementById('colorDisplay');
var resetBtn = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
init();

function init() {
	colorDisplay.textContent = pickedColor;
	colorize();
	setUpSquares();
	setUpButtons();
}
function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener('click', function() {
			if (this.style.backgroundColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetBtn.textContent = 'Play Again?';
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				messageDisplay.textContent = 'Try Again';
				this.style.backgroundColor = '#232323';
				this.style.boxShadow = 'none';
			}
		});
	}
}
function setUpButtons() {
	resetBtn.addEventListener('click', function() {
		reset();
	});
	easyBtn.addEventListener('click', function() {
		hardBtn.classList.remove('selected');
		easyBtn.classList.add('selected');
		dificulty = 3;
		reset();
	});
	hardBtn.addEventListener('click', function() {
		easyBtn.classList.remove('selected');
		hardBtn.classList.add('selected');
		dificulty = 6;
		reset();
	});
}
function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		squares[i].style.boxShadow =
			'0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
	}
}
function colorPicker() {
	return colors[Math.floor(Math.random() * colors.length)];
}
function generateRandomColorsArray(n) {
	var colors = [];
	for (var i = 0; i < squares.length; i++) {
		if (i < n) {
			colors.push(randomColor());
			squares[i].style.display = 'block';
		} else {
			squares[i].style.display = 'none';
		}
	}
	return colors;
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = `rgb(${r}, ${g}, ${b})`;
	return color;
}
function colorize() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
}
function reset() {
	resetBtn.textContent = 'New Colors';
	messageDisplay.textContent = '';
	colors = generateRandomColorsArray(dificulty);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	colorize();
	h1.style.backgroundColor = 'steelblue';
}
