simply.title("\n        Spot\n        Tag");

var savedPos = 0;

simply.on('singleClick', function(e) {
    
    var makeTag = "Tag Made";
    var trackTag = "Tag Tracked";

    if (e.button === "up") {
        
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            var sub = data.name + ":\n" + data.main.temp + "\nTag Stored";
            simply.text({ title: makeTag, subtitle: sub });
          
          savedPos = data.main.temp;
          
          });
          
        });
        simply.vibe('short');
    } 
    if (e.button === "down") {
        
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            var sub = "Past: \n" + savedPos + "\n" + "Current: \n" + data.main.temp;
            
            simply.text({title: trackTag, subtitle: sub})
          
          });
          
        });
    }
    
});
