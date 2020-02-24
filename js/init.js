// Initlaises the javascript for materialize
M.AutoInit();

// Terms and coditions window
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});


// Datepickers
$( ".datepickerEarliest" ).datepicker({});

$( ".datepickerLatest" ).datepicker({});


//Timepicker
$('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 15,
    minTime: '12:00am',
    maxTime: '11:45pm',
    defaultTime: '11',
    startTime: '00:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});


//James
function myembedjs(){
<<<<<<< HEAD
  // var inputName = document.getElementById('pac-input').value;
=======
  var inputName = document.getElementById('pac-input').value;
  var retrievedPlaceID = undefined;
  placeIDReturn();
>>>>>>> 76533bf0abe9266efc222c5a25fd2c5f2dcbbfd3

  // NEED TO GET PLACE ID FROM THE INPUTNAME ADDRESS
  alert(findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17, 60, "ChIJeziKgJKxe0gR8qUIiSmWKJo", "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU"));
}

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">




//ChIJeziKgJKxe0gR8qUIiSmWKJo PLACE ID ORIGINAL
//document.getElementByID('placeIDfromSearchBox')
