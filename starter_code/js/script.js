//wait for DOM to run and is ready 
$(document).ready(function(){
	console.log("working")


	// create an array of cities
	var cities = ["New York", "San Francisco", "Los Angeles", "Austin", "Sydney"];
// loop through cities
	cities.forEach(function(city){
	var option = `<option>${city}</option>`
	$('select').append(option);
	// create element
	// append it to our select element
})
});
		
//create a variable called "city" in order to store the city value that is submitted	
	$('select').change(function(event){
// add .change function
//prevent page from performing the default action
		event.preventDefault();

	var city = $('#city-type').val();
		console.log(city);
//use the city value to find out if when someone subnmits different values, it changes to the background image based on the city
		if (city === 'New York') {
			$('body').attr("class", 'nyc');
		} else if (city === 'San Francisco') {
			$('body').attr("class", 'sf');
		} else if (city === 'Los Angeles') {
			$('body').attr("class", 'la');
		} else if (city === 'Austin') {
			$('body').attr("class", 'austin');
		} else if (city === 'Sydney') {
			$('body').attr("class", 'sydney');
		} else {
			$('body').attr("class", 'starter-image' )
		}
});
