simply.title("SpotTag!");

var savedPos = 0;

simply.on('singleClick', function(e) {
    
    var pastTag = "Past Tag";

    if (e.button === "up") {
        
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            simply.text({ title: data.name, subtitle: data.main.temp });
            simply.text("Position stored!");
          
          savedPos = data.main.temp;
          
          });
          
        });
        simply.vibe('short');
    } 
    if (e.button === "down") {
        var sub = "Position: \n" + savedPos;
        
        simply.text({title: pastTag, subtitle: sub });
        
        /*
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            simply.subtitle("Current Position: \n");
            simply.text({ title: data.name, subtitle: data.main.temp });
          
          });
          
        });*/
    }
    
});
