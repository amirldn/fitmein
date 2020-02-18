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
  alert(findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17, 60, document.getElementByID('placeIDfromSearchBox'), "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU"));
}

//ChIJeziKgJKxe0gR8qUIiSmWKJo PLACE ID ORIGINAL
