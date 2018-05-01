// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
$(".thumb").click(changeImage)
//$("#second").click(displaySecond)
//$("#third").click(displayThird)
//$("#fourth").click(displayFourth)

//function displayFirst() {
	//$("#bigimage").attr("src", "img/1.jpg");
	//$("#bigimage").fadeOut(900);

//}

//function displaySecond() {
    //$("#bigimage").fadeOut(function() {
    	//$("#bigimage").attr("src", "img/2.jpg").fadeIn(); 
   //});

//}

function changeImage(event) {
	//get
	var newSrc = $(event.currentTarget).attr("src");
	//set
	$("#bigimage").attr("src", newSrc);

}

//function displayFourth() {
	//$("#bigimage").attr("src", "img/4.jpg");
//}