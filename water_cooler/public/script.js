console.log("water cooler linked");
// var dotenv = require('dotenv').load();
// console.log($GUARDIAN);

// WATER COOLER

	//WEATHER
	var apiWeather = function apiWeather(e){
		$.ajax({
			url: "http://api.wunderground.com/api/abc3ed8ecb8d84a6/conditions/q/NY/new_york.json",
			method: 'GET',
			dataType: 'json',
			success: function(data){
				var weatherItems = {
					temp: data["current_observation"]["temp_f"],
					icon: data["current_observation"]["icon_url"],
					weather: data["current_observation"]["weather"]
				};
				var $weatherList = $('#weather-container');
				var $weatherTemplate = $('#weather-template').text();
				var template = _.template($weatherTemplate);
				var $rendered = $(template(weatherItems));
				$weatherList.append($rendered);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

	//GEOLOCATION
	var latlng = [];
	var apiGeolocation = function apiGeolocation(e){
		$.ajax({
			url: "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDjXSLPYBdOvPP0FH42C2FTuARJVNbOu8E",
			method: 'POST',
			dataType: 'json',
			success: function(data){
			 	var lat = (data["location"]["lat"]);
			 	var lng = (data["location"]["lng"]);
				latlng.push(lat + "," + lng);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

	//GEOCODER
	var apiGeocoder = function apiGeocoder(e){
		$.ajax({
			url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&key=AIzaSyDjXSLPYBdOvPP0FH42C2FTuARJVNbOu8E",
			method: 'POST',
			dataType: 'json',
			success: function(data){
				console.log(data);
				var currCity = (data["results"]["0"]["address_components"]["3"]["long_name"]);
				// console.log(currCity);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

	//RECIPES
	var objectRecipe = [];
	var apiEdamam = function apiEdamam(e){
		$.ajax({
			url: "https://api.edamam.com/search?q=chicken&app_id=cc50ad6e&app_key=ab4216d00f9a08db76220a4503a5b08b",
			method: 'GET',
			dataType: 'jsonp',
			success: function(data){

				data.hits.forEach(function(element, index){
					var eachRecipe = {
						label: (data["hits"][index]["recipe"]["label"]),
						url: (data["hits"][index]["recipe"]["shareAs"]),
						image: (data["hits"][index]["recipe"]["image"])
					};
					objectRecipe.push(eachRecipe);
				});

				var $recipeList = $('#recipe-container');
				var $recipeTemplate = $('#recipe-template').text();
				var template = _.template($recipeTemplate);
				var $rendered = $(template(objectRecipe));
				$recipeList.append($rendered);

			},
			error: function(error){
				console.log(error);
			}
		});
	}

	//POWERBALL
	var apiPowerball = function apiPowerball(e){
		$.ajax({
			url: "http://data.ny.gov/resource/d6yy-54nr.json",
			method: 'GET',
			dataType: 'json',
			success: function(data){
				var powerballItems = {
					currentNum: (data["0"]["winning_numbers"]),
					currentDate: (data["0"]["draw_date"]),
					prevNum: (data["1"]["winning_numbers"]),
					prevDate: (data["1"]["draw_date"])
				};

				var $powerballList = $('#powerball-container');
				var $powerballTemplate = $('#powerball-template').text();
				var template = _.template($powerballTemplate);
				var $rendered = $(template(powerballItems));
				$powerballList.append($rendered);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

	//MEGAMILLIONS
	var apiMegaMillions = function apiMegaMillions(e){
		$.ajax({
			url: "https://data.ny.gov/api/views/5xaw-6ayf/rows.json?accessType=DOWNLOAD",
			method: 'GET',
			dataType: 'json',
			success: function(data){
				var currWinningNumbers = (data["data"]["0"]["9"]);
				var currDrawDate = (data["data"]["0"]["8"]);
				var prevWinningNumbers = (data["data"]["1"]["9"]);
				var currDrawDate = (data["data"]["1"]["8"]);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

	//OPENTABLE
	var apiOpenTable = function apiOpenTable(e){
		$.ajax({
			url: "https://opentable.herokuapp.com/api/restaurants?city=new%20york",
			method: 'GET',
			dataType: 'json',
			success: function(data){
				console.log(data);
				var currRestaurants = (data["restaurants"]["0"]["name"]);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

	//INSTAGRAM
	var objectInstagram = []
	var apiInstagram = function apiInstagram(e){
		$.ajax({
			url: "https://api.instagram.com/v1/tags/newyorknewyork/media/recent?client_id=a9a41298fad74ec0bdd00161d605b2b8",
			method: 'GET',
			dataType: 'jsonp',
			success: function(data){
				var instagram = data;
				var stopLoop = true;
				instagram.data.forEach(function(element, index){
					var eachInsta = {
						image: instagram.data[index]["images"]["standard_resolution"]["url"],
						url: instagram.data[index].link
					};
					objectInstagram.push(eachInsta);
				});

				var $instaList = $('#insta-container');
				var $instaTemplate = $('#insta-template').text();
				var template = _.template($instaTemplate);
				var $rendered = $(template(objectInstagram));
				$instaList.append($rendered);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

	//THE GUARDIAN NEWS
	var objectNews = [];
	var apiNews = function apiNews(e){
		$.ajax({
			url: "http://content.guardianapis.com/search?q=lifestyle&api-key=gxqpepzyzs5a9ej7afe86jck",
			method: 'GET',
			dataType: 'json',
			success: function(data){
				console.log(data);
				data.response.results.forEach(function(element, index){
					var eachItem = {
						title: data.response.results[index]["webTitle"],
						url: data.response.results[index]["webUrl"]
					};
					objectNews.push(eachItem);
				});
				console.log(objectNews);

				var $newsList = $('#news-container');
				var $newsTemplate = $('#news-template').text();
				var template = _.template($newsTemplate);
				var $rendered = $(template(objectNews));
				$newsList.append($rendered);
			},
			error: function(error){
				console.log(error);
			}
		});
	}

apiWeather();
apiNews();
apiEdamam();
// apiGeolocation();
// apiGeocoder();
// apiPowerball()
// apiMegaMillions();
apiInstagram();

//persist user log in.
//css media query






