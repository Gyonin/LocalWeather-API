$(document).ready(function() {

$(function(){
  
  var location;
  var tempSwap = false;
  
  $.getJSON("http://ip-api.com/json", function(data){

  location = data.city;
 
  var weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=766417ccc4c12208750860844d0b589c";
    
  console.log(weatherApiUrl); 
    
    $.getJSON(weatherApiUrl, function(weatherData){
     console.log(weatherData);
     
      var tempCelsius = ((weatherData.main.temp - 273).toFixed(0) + "&#8451");
      var tempFahren = ((9 / 5 * (weatherData.main.temp - 273) + 32).toFixed(0) + "&#8457");
      
      
      $("#location").html(location);
      $("#temp").html(tempCelsius);
      $("#weather").html(weatherData.weather[0].description);

      //swap between Celsius and Fahrenheit
      $("#temp").click(function(){
        
        if (tempSwap === false){
          $("#temp").html(tempFahren);
          tempSwap = true;
        } 
        else {
          $("#temp").html(tempCelsius);
          tempSwap = false;
        }
        
      $("#weatherIcon").attr("src","http://openweathermap.org/img/w/" + weatherData.weather[0].icon +".png");
 
      });

    });
    
  });
 
});

});
