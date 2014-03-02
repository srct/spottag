simply.title("SpotTag!");

simply.on('singleClick', function(e) {
    
    var currentPos = 0;
    var n1 = "title";

    if (e.button === "up") {
        
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          console.log(coords);
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            simply.text({ title: data.name, subtitle: data.main.temp });
          });
          

          
        });
        simply.vibe('short');
    } 
    if (e.button === "down") {
        simply.text({title: n1})
        simply.subtitle("Show relative GPS here...");
    }
    
});
//
