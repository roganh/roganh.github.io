
var redbutton = document.querySelector("#red");
redbutton.onclick = changeRed;

function changeRed() {
	document.querySelector("#out").style.background = "red";
}

var bluebutton = document.querySelector("#blue");
bluebutton.onclick = changeBlue;



function changeBlue() {
	document.querySelector("#out").style.background = "blue";
}



funcion addTen() {
	//store value of #out
	var currentValue = document.querySelector("#out").value;
	// total existing + 10
	var total = currentValue + 10;
	//output result
	document.querySelector("#out").innerHTML = total;
}

var plusTen = document.querySelector("#a10");
plusTen.onclick = addTen;