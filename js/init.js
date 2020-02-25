// Initlaises the javascript for materialize
M.AutoInit();

// Terms and coditions window
document.addEventListener('DOMContentLoaded', function() {
  var elemsModal = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elemsModal, preventScrolling=true);
});


// Datepickers
// $( ".datepickerEarliest" ).datepicker({});
//
// $( ".datepickerLatest" ).datepicker({});

document.addEventListener('DOMContentLoaded', function() {
  var elemsdpE = document.querySelectorAll('.datepickerEarliest');
  var instances = M.Datepicker.init(elemsdpE, minDate=-1);
});

document.addEventListener('DOMContentLoaded', function() {
  var elemsdpL = document.querySelectorAll('.datepickerLatest');
  var instances = M.Datepicker.init(elemsdpL, showClearBtn=true);
});


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
  try {
    alert(returnedPlaceID + " From init.js");
  }
  catch (e) {
    alert("You did not enter a location");
  }
  // alert(($('.datepickerEarliest').datepicker('toString')).value);
  alert(findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17, 60, returnedPlaceID, "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU"));
}


//original
//  alert(findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17, 60, "ChIJeziKgJKxe0gR8qUIiSmWKJo", "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU"));


//ChIJeziKgJKxe0gR8qUIiSmWKJo PLACE ID ORIGINAL
//document.getElementByID('placeIDfromSearchBox')
