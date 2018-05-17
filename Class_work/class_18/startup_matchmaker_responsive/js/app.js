$("#burger").click(toggleNav);

function toggleNav() {
	$("nav").slideToggle();
}

$(window).resize(hideNav);

function hideNav() {
	var width = $(window).width();
	console.log(width)

	if (width > 1024) {
		$("nav").hide();
	}
}