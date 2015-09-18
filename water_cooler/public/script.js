console.log("water cooler linked");

// WATER COOLER

//RENDER
var renderWeather = function renderWeather(weather){

	//TEMPLATE WEATHER AND RENDER
	var $template = _.template($('#weather-template').text());
	var $rendered = $(template(weather));
	
	//render all APIs
	var apiWeather = function apiWeather(weather){
		$.ajax({
			url: "http://api.wunderground.com/api/abc3ed8ecb8d84a6/conditions/q/NY/new_york.json",
			method: 'GET',
			dataType: 'json',
			success: function(data){
				var temperature = data["current_observation"]["temp_f"];
				var icon = data["current_observation"]["icon_url"];
				var weather = data["current_observation"]["weather"];
			},
			error: function(error){
				console.log(error);
			}
		});
	}
	apiWeather();
	//include buttons to hide APIs a user doesn't
	//want to see

}