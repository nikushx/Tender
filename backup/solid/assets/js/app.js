var places = new Array(100);
var service;
var fade = 400;

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
    
    $('#search-panel').fadeOut(fade);
    setTimeout(function() {
          $('#res_pane').fadeIn(fade);
    }, fade);
        
    var curr = 0;
    $('#curr_name').text(places[curr].name);
    $('#curr_body').text(places[curr].formatted_address);
    $('#curr_body').append(document.createElement("br"));
    $('#curr_body').append('Rating: ' + places[curr].rating + '/5.0');
    $('#curr_body').append(document.createElement("br"));
    if (places[curr].rating > 4.0 && places[curr].rating <= 5.0)
        $('#curr_body').append('Tender Opinion: Spectacular Place to Eat.');
    else if (places[curr].rating > 3.0 && places[curr].rating <= 4.0)
        $('#curr_body').append('Tender Opinion: A Good Bite to Eat.');
    else if (places[curr].rating > 2.0 && places[curr].rating <= 3.0)
        $('#curr_body').append('Average Food at Best.');
    else if (places[curr].rating > 1.0 && places[curr].rating <= 2.0)
        $('#curr_body').append('This is place is not good.');
    else
        $('#curr_body').append('Ewwwwwwwwwwwwwwwwwwwwwwww.');
    
    $(document).keydown(function(e) {
       
        if (e.which == 37 || e.which == 39) {
            
            $(".dycon").fadeOut(400);
            $(".dycon").fadeIn(400);
            
        }
        
        if(e.which == 39) {
            console.log('right');
            curr += 1;
            
            setTimeout(function() {
                $('#curr_name').text(places[curr].name);
                $('#curr_body').text(places[curr].formatted_address);
                $('#curr_body').append(document.createElement("br"));
                $('#curr_body').append('Rating: ' + places[curr].rating + '/5.0');
                $('#curr_body').append(document.createElement("br"));
                if (places[curr].rating > 4.0 && places[curr].rating <= 5.0)
                    $('#curr_body').append('Tender Opinion: Spectacular Place to Eat.');
                else if (places[curr].rating > 3.0 && places[curr].rating <= 4.0)
                    $('#curr_body').append('Tender Opinion: A Good Bite to Eat.');
                else if (places[curr].rating > 2.0 && places[curr].rating <= 3.0)
                    $('#curr_body').append('Average Food at Best.');
                else if (places[curr].rating > 1.0 && places[curr].rating <= 2.0)
                    $('#curr_body').append('This is place is not good.');
                else
                    $('#curr_body').append('Ewwwwwwwwwwwwwwwwwwwwwwww.');
            }, fade);
        } else if (e.which == 37) {
            console.log('left');
            curr += 1;
            setTimeout(function() {
                $('#curr_name').text(places[curr].name);
                $('#curr_body').text(places[curr].formatted_address);
                $('#curr_body').append(document.createElement("br"));
                $('#curr_body').append('Rating: ' + places[curr].rating + '/5.0');
                $('#curr_body').append(document.createElement("br"));
                if (places[curr].rating > 4.0 && places[curr].rating <= 5.0)
                    $('#curr_body').append('Tender Opinion: Spectacular Place to Eat.');
                else if (places[curr].rating > 3.0 && places[curr].rating <= 4.0)
                    $('#curr_body').append('Tender Opinion: A Good Bite to Eat.');
                else if (places[curr].rating > 2.0 && places[curr].rating <= 3.0)
                    $('#curr_body').append('Average Food at Best.');
                else if (places[curr].rating > 1.0 && places[curr].rating <= 2.0)
                    $('#curr_body').append('This is place is not good.');
                else
                    $('#curr_body').append('Ewwwwwwwwwwwwwwwwwwwwwwww.');
            }, fade);
        }
                
    });

}

$(document).ready(main);