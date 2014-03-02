simply.title("SpotTag!");

simply.on('singleClick', function(e) {
    simply.subtitle("You pressed the " + e.button + " button!");
});

// I'm going to comment to organize code
//I have commented this out until I put in a menu 
//navigator.geolocation.getCurrentPosition(function(pos) {
  //var coords = pos.coords;
  //var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
  //    'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
  //ajax({ url: weatherUrl, type: 'json' }, function(data) {
    //simply.text({ title: data.name, subtitle: data.main.temp });
  //});
//});
