var total = 0;

// +10

//var plusTen = document.querySelector("#a10");
//plusTen.onclick = addTen;
$("#a10").click(addTen)

function addTen() {
	total = total + 10;
	$("#out").html(total)
}

// +20

//var plusTwenty = document.querySelector("#a20");
//plusTwenty.onclick = addTwenty;

$("#a20").click(addTwenty)

function addTwenty() {
	total = total + 20;
	$("#out").html(total)
}

// +30

//var plusThirtyButton = document.querySelector("#a30");
//plusThirtyButton.onclick = addThirty;

$("#a30").click(addThirty)

function addThirty() {
	total = total + 30;
	$("#out").html(total)
}

// -10

//var minusTenButton = document.querySelector("#n10");
//minusTenButton.onclick = subtractTen;
$("#n10").click(subtractTen)

function subtractTen() {
	total = total - 10;
	$("#out").html(total)
}


// -20

//var minusTwentyButton = document.querySelector("#n20");
//minusTwentyButton.onclick = subtractTwenty;

$("#n20").click(subtractTwenty)

function subtractTwenty() {
	total = total - 20;
	$("#out").html(total)
}

// -30

//var minusThirtyButton = document.querySelector("#n30");
//minusThirtyButton.onclick = subtractThirty;

$("#n30").click(subtractThirty)

function subtractThirty() {
	total = total - 30;
	$("#out").html(total)
}

// red

//var redButton = document.querySelector("#red");
//redButton.onclick = turnRed;
$("#red").click(turnRed)

function turnRed() {
	$("#out").css("background", "red")
	//document.querySelector("#out").style.background = "red";
}

// blue

//var blueButton = document.querySelector("#blue");
$("#blue").click(turnBlue)
//blueButton.onclick = turnBlue;

function turnBlue() {
	$("#out").css("background", "blue")
	//document.querySelector("#out").style.background = "blue";
}

// reset

//var outputButton = document.querySelector("#out");
//outputButton.onclick = reset;
$("#out").click(reset)

function reset() {
	total = 0;
	$("#out").css("background", "white");
	$("#out").html(total)
	//document.querySelector("#out").innerHTML = total;
	//document.querySelector("#out").style.background = "white";
}
