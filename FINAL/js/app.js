
$.ajax({
    url: 'https://bridge.buddyweb.fr/api/cookbook/cookbook',
    type: 'GET',
    success: function (response) {
        
        var all = response

		all.forEach(function(response) {
      		var recipeName = response.name;
      		var recipeUrl = response.recipeurl;
      		var recipeImg = response.imgurl;
      		

      		$("#demo").append('<li>' + "*" + recipeName + '</li>');
      		$("#person-a").append('<option>' + recipeName + '</option');
      		$("#person-b").append('<option>' + recipeName + '</option');
   		})
     },

 })



function menuFunction() {
  $("button").hide();
  $("#person-a").css("display", "flex");
  $("#demo").show();
}



$("#person-a").on('change', function() {
  var selectionOne = $("#person-a").val();

	$("#person-a").css("display", "none")
	$("#person-b").css("display", "flex")



	$("#person-b").on('change', function() {
  	var selectionTwo = $("#person-b").val();

  	

	$("#person-a").css("display", "none")
	$("#person-b").css("display", "none")

	var random = Math.random()
	

	if (random < .5) {
		var answer = selectionOne
	}
	else {
		var answer = selectionTwo
	}

	$.ajax({
    url: 'https://bridge.buddyweb.fr/api/cookbook/cookbook',
    type: 'GET',
    success: function (response) {
        
        var all = response

        

        for (i=0; i < response.length; i++) {
        	if (response[i].name == answer) {
      			$(".container").append('<a href=' + response[i].recipeurl + '>' + "here's how" + '</a>');
    	   		
    	   		$(".container").addClass('animated bounce infinite');
    	   		$("body").css("background", "url" + "(" + response[i].imgurl + ")")
    	   		$("body").css("background-repeat", "no-repeat")
    	   		$("body").css("background-size", "100%")
    	   		console.log(response[i].imgurl)
    	   		break;
  	     	}
         }

		// all.forEach(function(response) {
  //     		var recipeName = response[i].name;
  //     		var recipeUrl = response.recipeurl;
  //     		var recipeImg = response.imgurl;

  //     		if (recipeName = answer) {
  //     			$(".container").append('<a>' + recipeUrl + '</a>');
  //     			console.log(recipeUrl)
  //     		}
  //  			})
  //    	},

 	}
 })
	

	$('h1').html("COOK THIS !" + '<br>' + answer)

	$(".answer-img").css("display", "flex");
	$("button").css("display", "none");
	$("#demo").css("display", "none");

	})

});



