// As a User
// When I click on the button
// I want the header to bounce

// As a User
// When I click the "shrink" button
// I want the globe to slowly shrink to be smaller than the button

// As a User
// When I click the button
// I want to see the globe move to the right of the screen

// As a User
// When I click the button again
// I want the globe to return
$("#animate-me").click(bounce);

function bounce() {
	$("h1").addClass('animated bounce');

	var isRight = $("img").css("right")
	console.log(isRight)

	if (isRight == "0px") {

	} else {
		$("img").animate({
			right: 0,
		})
	}
	
}

$("#shrink").click(shrink);

function shrink() {
	$("img").animate({
		"height": "10px",
    	"width": "10px",
    }, 5000)
	
}