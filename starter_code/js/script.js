//wait for DOM to run and is ready 
$(document).ready(function(){
	console.log("working")


	// create an array of cities
	var cities = ["New York", "San Francisco", "Los Angeles", "Austin", "Sydney"];
// loop through cities
	cities.forEach(function(city){
	var option = `<option>${city}</option>`
	$("select").append(option);
	// create element
	// append it to our select element

	function addCity(event) {
		//prevent page from performing the default action
		event.preventDefault();
//create a variable called "city" in order to store the city value that is submitted
	$("select").change(addCity);

		var city = $('#city-type').val();
		console.log(city);
//use the city value to find out if when someone subnmits different values, it changes to the background image based on the city
		if (city === 'New York' || city === 'NYC' || city === 'New York City' || city === 'new york' || city === 'nyc' || city === 'new york city') {
			$('body').removeClass('starter-image').addClass('nyc');
		} else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area' || city === 'san francisco' || city === 'sf' || city === 'bay area') {
			$('body').removeClass('starter-image').addClass('sf');
		} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la' || city === 'lax') {
			$('body').removeClass('starter-image').addClass('la');
		} else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
			$('body').removeClass('starter-image').addClass('austin');
		} else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
			$('body').removeClass('starter-image').addClass('sydney');
		} else {
			$('body').addClass('starter-image');	
		}
		}
	})
});