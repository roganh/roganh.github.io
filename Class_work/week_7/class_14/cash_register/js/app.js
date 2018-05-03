// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared

//or cash register homework: remember that a `<tr>` needs to 
//have a `<td>` inside of it in order to show properly!

//define total (global)
var total = $("#total").val();

$("#entry").submit(update);

function update(event) {
	event.preventDefault();
	//store input
	var value = $("#newEntry").val();
	//reset to 0
	$("#total").html(value);

	$("#newEntry").val("");	
	var new_value = $("#total").val();
	//add new total + input
	var new_total = total + new_value;
	console.log(total);
}








