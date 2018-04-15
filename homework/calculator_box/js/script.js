//Red
var redbutton = document.querySelector("#red");
redbutton.onclick = changeRed;

function changeRed() {
	document.querySelector("#out").style.background = "red";
}


//Blue
var bluebutton = document.querySelector("#blue");
bluebutton.onclick = changeBlue;

function changeBlue() {
	document.querySelector("#out").style.background = "blue";
}

//+10

function addTen() {
	//store value of #out
	var currentValue = parseInt(document.querySelector("#out").innerHTML);
	// total existing 
	var total = (currentValue + 10);
	//output result
	document.querySelector("#out").innerHTML = total;
}

var plusTen = document.querySelector("#a10");
plusTen.onclick = addTen;


//+20

function addTwenty() {
	//store value of #out
	var currentValue = parseInt(document.querySelector("#out").innerHTML);
	// total existing 
	var total = (currentValue + 20);
	//output result
	document.querySelector("#out").innerHTML = total;
}

var plusTwenty = document.querySelector("#a20");
plusTwenty.onclick = addTwenty;




///+30

function addThirty() {
	//store value of #out
	var currentValue = parseInt(document.querySelector("#out").innerHTML);
	// total existing 
	var total = (currentValue + 30);
	//output result
	document.querySelector("#out").innerHTML = total;
}

var plusThirty = document.querySelector("#a30");
plusThirty.onclick = addThirty;




//n10

function subTen() {
	//store value of #out
	var currentValue = parseInt(document.querySelector("#out").innerHTML);
	// total existing
	var total = (currentValue - 10);
	//output result
	document.querySelector("#out").innerHTML = total;
}

var minusTen = document.querySelector("#n10");
minusTen.onclick = subTen;



//n20

function subTwenty() {
	//store value of #out
	var currentValue = parseInt(document.querySelector("#out").innerHTML);
	// total existing
	var total = (currentValue - 20);
	//output result
	document.querySelector("#out").innerHTML = total;
}

var minusTwenty = document.querySelector("#n20");
minusTwenty.onclick = subTwenty;




//n30

function subThirty() {
	//store value of #out
	var currentValue = parseInt(document.querySelector("#out").innerHTML);
	// total existing
	var total = (currentValue - 30);
	//output result
	document.querySelector("#out").innerHTML = total;
}

var minusThirty = document.querySelector("#n30");
minusThirty.onclick = subThirty;