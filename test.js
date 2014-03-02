simply.title("SpotTag!");

var savedPos = 0;

simply.on('singleClick', function(e) {
    
    var n1 = "title";

    if (e.button === "up") {
        
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            simply.text({ title: data.name, subtitle: data.main.temp });
          
          savedPos = data.main.temp;
          simply.subtitle("urPos: " + savedPos);
          simply.subtitle("coords: " + coords);
          
          });
          
        });
        simply.vibe('short');
    } 
    if (e.button === "down") {
        simply.text({title: n1, subtitle: savedPos });
        simply.subtitle("urPos: " + savedPos)
    }
    
});
//
