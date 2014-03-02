simply.title("\n        Spot\n        Tag");

var savedLat = null;
var savedLon = null;
/*
simply.style = function('large') {
        return simply.impl.style.apply(this,text);
}*/

simply.on('singleClick', function(e) {
    
    var makeTag = "Tag Made";
    var trackTag = "Tags";

    if (e.button === "up") {
        simply.scrollable = function(scrollable){
            simply.impl.scrollable.apply(this,text);
        }
        simply.emitClick = function(long, button){
            simply.emit(type,button,{button: button,});
        };
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
           
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            savedLat = coords.latitude.toFixed(4);
            savedLon = coords.longitude.toFixed(4); 
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
            var sub = "Last: \nLat: " + savedLat + "\nLon: " + savedLon + "\n" + "Current: \nLat: " + coords.latitude.toFixed(4) + "\nLon: " + coords.longitude.toFixed(4);
            simply.text({title: trackTag, subtitle: sub})
          
          });
          
          simply.scrollable = function(scrollable){
            simply.impl.scrollable.apply(this,true);
          }
          
        });
    }

});
