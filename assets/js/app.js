var places = new Array(100);
var service;
var fade = 150;

var main = function () {
    
    
    $('#res_pane').hide();
    
    $('#loc').keypress(function (e) {
        
        if (e.which == 13) {
            $('#loc').submit();
            return false;
        }
        
    });
    
    var map;
    
    $('#loc').submit(function () {
        
        map = new google.maps.Map(document.getElementById('map'));
        var searchLocation = "restaurants near " + $('#loc').val();
        
        var request = {
            query: searchLocation
        };
        
        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
        
    });
    
};

function callback(results, status) {
    
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        
        for (var i = 0; i < results.length; i++) {
            
            places[i] = results[i];
        }
        
    }
    
    var messages = new Array(5);
    messages[0] = new Array(5);
    messages[1] = new Array(5);
    messages[2] = new Array(5);
    messages[3] = new Array(5);
    messages[4] = new Array(5);
    
    messages[0][0] = "Food poisoing waiting to happen!";
    messages[0][1] = "EW. Ew. EWWWW. Ew. ...Ew.";
    messages[0][2] = "Never go here, not even once.";
    messages[0][3] = "Just.. don't.";
    messages[0][4] = "100% of me wants 0% of this.";
    
    messages[1][0] = "This place is not good.";
    messages[1][1] = "Not good, actually pretty bad.";
    messages[1][2] = "You'd be doing them a huge favor by even showing up.";
    messages[1][3] = "The owner clearly gave up.";
    messages[1][4] = "Meh.";
    
    messages[2][0] = "Average food at best.";
    messages[2][1] = "Clearly a hometown fad.";
    messages[2][2] = "Don't expect anything too good.";
    messages[2][3] = "Go here if you're hungry.";
    messages[2][4] = "Nothing too bad, nothing too special.";
    
    messages[3][0] = "A good bite to eat!";
    messages[3][1] = "If you're passing through, definitly stop by.";
    messages[3][2] = "Hidden gem!";
    messages[3][3] = "Good food, plain and simple.";
    messages[3][4] = "Great restaurant to eat at!";
    
    messages[4][0] = "Spectacular place to eat!";
    messages[4][1] = "Absolutely delicious.";
    messages[4][2] = "You can't miss this.";
    messages[4][3] = "National treasure.";
    messages[4][4] = "You could eat this everyday and never get bored.";
    
    var rand_num;
    var rand_num2;
    var rand_num3;
    var the_name;
    var the_path;
    var prev_rands = new Array(6);
    var counter = 0;
    
    $('#search-panel').fadeOut(fade);
    setTimeout(function() {
          $('#res_pane').fadeIn(fade);
    }, fade);
    
    var curr = 0;
    the_path = "assets/img/res/";
    rand_num2 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    rand_num3 = Math.floor(Math.random() * (22 - 1 + 1)) + 1;
    prev_rands[counter] = rand_num3;
    the_name = places[curr].name;
    
    if (the_name.indexOf("afe") > -1)
        $('#curr_img').attr('src', the_path + 'cafe/' + (rand_num2) + '.jpg');
    else if (the_name.indexOf("hin") > -1)
        $('#curr_img').attr('src', the_path + 'chi/' + (rand_num2) + '.jpg');
    else if (the_name.indexOf("Diner") > -1)
        $('#curr_img').attr('src', the_path + 'diner/' + (rand_num2) + '.jpg');
    else if ((the_name.indexOf("ind") > -1))
        $('#curr_img').attr('src', the_path + 'ind/' + (rand_num2) + '.jpg');
    else if (the_name.indexOf("tal") > -1)
        $('#curr_img').attr('src', the_path + 'ita/' + (rand_num2) + '.jpg');
    else if (the_name.indexOf("exi") > -1)
        $('#curr_img').attr('src', the_path + 'mex/' + (rand_num2) + '.jpg');
    else 
        $('#curr_img').attr('src', the_path + 'res/' + (rand_num3) + '.jpg');
    
    $('#curr_name').text(places[curr].name);
    $('#curr_body').text(places[curr].formatted_address);
    $('#curr_body').append(document.createElement("br"));
    $('#curr_body').append('Rating: ' + places[curr].rating + '/5.0');
    $('#curr_body').append(document.createElement("br"));
    if (places[curr].rating > 4.0 && places[curr].rating <= 5.0)
        $('#curr_body').append(messages[4][rand_num]);
    else if (places[curr].rating > 3.0 && places[curr].rating <= 4.0)
        $('#curr_body').append(messages[3][rand_num]);
    else if (places[curr].rating > 2.0 && places[curr].rating <= 3.0)
        $('#curr_body').append(messages[2][rand_num]);
    else if (places[curr].rating > 1.0 && places[curr].rating <= 2.0)
        $('#curr_body').append(messages[1][rand_num]);
    else
        $('#curr_body').append(messages[0][rand_num]);
    
    $(document).keydown(function(e) {
       
        if (e.which == 37 || e.which == 39) {
            
            $(".dycon").fadeOut(fade);
            $(".dycon").fadeIn(fade);
            curr += 1;
            
            rand_num = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
            rand_num2 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            rand_num3 = Math.floor(Math.random() * (22 - 1 + 1)) + 1;
            
            the_name = places[curr].name;
            
            the_path = "assets/img/res/";
            
            if (the_name.indexOf("afe") > -1)
                $('#curr_img').attr('src', the_path + 'cafe/' + (rand_num2) + '.jpg');
            else if (the_name.indexOf("hin") > -1)
                $('#curr_img').attr('src', the_path + 'chi/' + (rand_num2) + '.jpg');
            else if (the_name.indexOf("Diner") > -1)
                $('#curr_img').attr('src', the_path + 'diner/' + (rand_num2) + '.jpg');
            else if ((the_name.indexOf("ind") > -1))
                $('#curr_img').attr('src', the_path + 'ind/' + (rand_num2) + '.jpg');
            else if (the_name.indexOf("tal") > -1)
                $('#curr_img').attr('src', the_path + 'ita/' + (rand_num2) + '.jpg');
            else if (the_name.indexOf("exi") > -1)
                $('#curr_img').attr('src', the_path + 'mex/' + (rand_num2) + '.jpg');
            else 
                $('#curr_img').attr('src', the_path + 'res/' + (rand_num3) + '.jpg');
        }
        
        if(e.which == 39) {
            console.log('right');
            
            window.open("http://lmgtfy.com/?q=" + places[curr - 1].name);
            
            setTimeout(function() {
                $('#curr_name').text(places[curr].name);
                $('#curr_body').text(places[curr].formatted_address);
                $('#curr_body').append(document.createElement("br"));
                $('#curr_body').append('Rating: ' + places[curr].rating + '/5.0');
                $('#curr_body').append(document.createElement("br"));
                if (places[curr].rating > 4.0 && places[curr].rating <= 5.0)
                    $('#curr_body').append(messages[4][rand_num]);
                else if (places[curr].rating > 3.0 && places[curr].rating <= 4.0)
                    $('#curr_body').append(messages[3][rand_num]);
                else if (places[curr].rating > 2.0 && places[curr].rating <= 3.0)
                    $('#curr_body').append(messages[2][rand_num]);
                else if (places[curr].rating > 1.0 && places[curr].rating <= 2.0)
                    $('#curr_body').append(messages[1][rand_num]);
                else
                    $('#curr_body').append(messages[0][rand_num]);
            }, fade);
        } else if (e.which == 37) {
            console.log('left');
            setTimeout(function() {
                $('#curr_name').text(places[curr].name);
                $('#curr_body').text(places[curr].formatted_address);
                $('#curr_body').append(document.createElement("br"));
                $('#curr_body').append('Rating: ' + places[curr].rating + '/5.0');
                $('#curr_body').append(document.createElement("br"));
                if (places[curr].rating > 4.0 && places[curr].rating <= 5.0)
                    $('#curr_body').append(messages[4][rand_num]);
                else if (places[curr].rating > 3.0 && places[curr].rating <= 4.0)
                    $('#curr_body').append(messages[3][rand_num]);
                else if (places[curr].rating > 2.0 && places[curr].rating <= 3.0)
                    $('#curr_body').append(messages[2][rand_num]);
                else if (places[curr].rating > 1.0 && places[curr].rating <= 2.0)
                    $('#curr_body').append(messages[1][rand_num]);
                else
                    $('#curr_body').append(messages[0][rand_num]);
            }, fade);
        }
                
    });
    
    //Start Swiping Portion
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;                                                        

    function handleTouchStart(evt) {                                         
        xDown = evt.touches[0].clientX;                                      
        yDown = evt.touches[0].clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            
            //Both
            $(".dycon").fadeOut(fade);
            $(".dycon").fadeIn(fade);
            curr += 1;
            
            rand_num = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
            rand_num2 = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            rand_num3 = Math.floor(Math.random() * (22 - 1 + 1)) + 1;
            
            the_name = places[curr].name;
            
            the_path = "assets/img/res/";
            
            if (the_name.indexOf("afe") > -1)
                $('#curr_img').attr('src', the_path + 'cafe/' + (rand_num2) + '.jpg');
            else if (the_name.indexOf("hin") > -1)
                $('#curr_img').attr('src', the_path + 'chi/' + (rand_num2) + '.jpg');
            else if (the_name.indexOf("Diner") > -1)
                $('#curr_img').attr('src', the_path + 'diner/' + (rand_num2) + '.jpg');
            else if ((the_name.indexOf("ind") > -1))
                $('#curr_img').attr('src', the_path + 'ind/' + (rand_num2) + '.jpg');
            else if (the_name.indexOf("tal") > -1)
                $('#curr_img').attr('src', the_path + 'ita/' + (rand_num2) + '.jpg');
            else if (the_name.indexOf("exi") > -1)
                $('#curr_img').attr('src', the_path + 'mex/' + (rand_num2) + '.jpg');
            else 
                $('#curr_img').attr('src', the_path + 'res/' + (rand_num3) + '.jpg');
            
            if ( xDiff > 0 ) {
                setTimeout(function() {
                    $('#curr_name').text(places[curr].name);
                    $('#curr_body').text(places[curr].formatted_address);
                    $('#curr_body').append(document.createElement("br"));
                    $('#curr_body').append('Rating: ' + places[curr].rating + '/5.0');
                    $('#curr_body').append(document.createElement("br"));
                    if (places[curr].rating > 4.0 && places[curr].rating <= 5.0)
                        $('#curr_body').append(messages[4][rand_num]);
                    else if (places[curr].rating > 3.0 && places[curr].rating <= 4.0)
                        $('#curr_body').append(messages[3][rand_num]);
                    else if (places[curr].rating > 2.0 && places[curr].rating <= 3.0)
                        $('#curr_body').append(messages[2][rand_num]);
                    else if (places[curr].rating > 1.0 && places[curr].rating <= 2.0)
                        $('#curr_body').append(messages[1][rand_num]);
                    else
                        $('#curr_body').append(messages[0][rand_num]);
                }, fade);
            } else {
                window.open("http://lmgtfy.com/?q=" + places[curr - 1].name);

                setTimeout(function() {
                    $('#curr_name').text(places[curr].name);
                    $('#curr_body').text(places[curr].formatted_address);
                    $('#curr_body').append(document.createElement("br"));
                    $('#curr_body').append('Rating: ' + places[curr].rating + '/5.0');
                    $('#curr_body').append(document.createElement("br"));
                    if (places[curr].rating > 4.0 && places[curr].rating <= 5.0)
                        $('#curr_body').append(messages[4][rand_num]);
                    else if (places[curr].rating > 3.0 && places[curr].rating <= 4.0)
                        $('#curr_body').append(messages[3][rand_num]);
                    else if (places[curr].rating > 2.0 && places[curr].rating <= 3.0)
                        $('#curr_body').append(messages[2][rand_num]);
                    else if (places[curr].rating > 1.0 && places[curr].rating <= 2.0)
                        $('#curr_body').append(messages[1][rand_num]);
                    else
                        $('#curr_body').append(messages[0][rand_num]);
                }, fade);
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };

}

$(document).ready(main);