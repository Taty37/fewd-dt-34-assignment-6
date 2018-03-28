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

	function addCity(event) {
		//prevent page from performing the default action
		event.preventDefault();
//create a variable called "city" in order to store the city value that is submitted
	
	var city = $('#city-type').val();
		console.log(city);
	$('select').change(addCity);

//use the city value to find out if when someone subnmits different values, it changes to the background image based on the city
		if (city === 'New York' || city === 'NYC' || city === 'New York City' || city === 'new york' || city === 'nyc' || city === 'new york city') {
			$('body').attr("class", 'nyc');
		} else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area' || city === 'san francisco' || city === 'sf' || city === 'bay area') {
			$('body').attr("class", 'sf');
		} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la' || city === 'lax') {
			$('body').attr("class", 'la');
		} else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
			$('body').attr("class", 'austin');
		} else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
			$('body').attr("class", 'sydney');
		} else {
			$('body').attr("class", 'starter-image' )
		}
		}
	})	
});
