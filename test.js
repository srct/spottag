setTimeout(intro, 4000);
function intro() {
    simply.text("\n         Spot\n         Tag");
}
intro();

simply.title("\n      Make Tag\n\n      Find Tag");

var savedLat = null;
var savedLon = null;
var savedLat2 = null;
var savedLon2 = null;
/*
simply.style = function('large') {
        return simply.impl.style.apply(this,text);
}*/

simply.on('singleClick', function(e) {
    
    var makeTag = "Tag Made";
    var trackTag = "Tags";

    if (e.button === "up") {

        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
           
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            savedLat = coords.latitude.toFixed(4);
            savedLon = coords.longitude.toFixed(4);
            savedLat2 = coords.latitude.toFixed(2);
            savedLon2 = coords.longitude.toFixed(2);
            var sub = data.name + ":\nLat: " + savedLat + "\nLon: " + savedLon;
            simply.text({ title: makeTag, subtitle: sub });
          

          
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
            var sub = "Last: \n" + savedLat2 + ", " + savedLon2 + "\n" + "Current: \n " + coords.latitude.toFixed(2) + ", " + coords.longitude.toFixed(2);
            simply.text({title: trackTag, subtitle: sub})
          
          });
          
        });
    }

});
