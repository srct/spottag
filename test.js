simply.title("\n        Spot\n        Tag");

var savedPos = 0;
TextLayer* text_layer_create(GRect frame){
    text_layer_set_font(fonts_get_system_font(FONT_KEY_GOTHIC_BOLD_28));
    text_layer_set_text_alignment(GTextAlignmentLeft);
    text_layer_set_overflow_mode(GTextOverflowModeWordWrap);
    
    }
simply.on('singleClick', function(e) {
    
    var makeTag = "Tag Made";
    var trackTag = "Tags";

    if (e.button === "up") {
        
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
           
           var sub = data.name + ":\n" + coords.latitude + "\n" + coords.longitude;
           simply.text({ title: makeTag, subtitle: sub });
           
           /*
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            simply.subtitle(coords.latitude + " " + coords.longitude);
            var sub = data.name + ":\n" + data.main.temp;
            simply.text({ title: makeTag, subtitle: sub });
          
          //savedPos = data.main.temp;
          
          });*/
          
        });
        simply.vibe('short');
    }
   // text_layer_destroy(text_layer);
    /*
    if (e.button === "down") {
        
        navigator.geolocation.getCurrentPosition(function(pos) {
          var coords = pos.coords;
          var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?' +
           'lat=' + coords.latitude + '&lon=' + coords.longitude + '&units=metric';
          ajax({ url: weatherUrl, type: 'json' }, function(data) {
            var sub = "Last: \n" + savedPos + "\n" + "Current: \n" + data.main.temp;
            
            simply.text({title: trackTag, subtitle: sub})
          
          });
          
        });
    }
    */
});
