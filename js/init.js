// Initlaises the javascript for materialize
M.AutoInit();

// Terms and coditions window
document.addEventListener('DOMContentLoaded', function() {
  var elemsModal = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elemsModal, preventScrolling=true);
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {
    autoClose: true,
    showClearBtn: true,
    minDate: new Date(),
    maxDate: new Date(2021,0,1),
    defaultDate: new Date()
  }
  var elemsdpE = document.querySelectorAll('.datepickerEarliest');
  var instances = M.Datepicker.init(elemsdpE, options);
  // instanceEarliest = M.Datepicker.getInstance(document.querySelectorAll('.datepickerLatest'));
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {
    autoClose: true,
    showClearBtn: true,
    minDate: new Date(),
    maxDate: new Date(2021,0,1),
    defaultDate: new Date()
  }
  var elemsdpL = document.querySelectorAll('.datepickerLatest');
  var instances = M.Datepicker.init(elemsdpL, options);
  // instanceLatest = M.Datepicker.getInstance(document.querySelectorAll('.datepickerLatest'));
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {

  }
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var options ={defaultTime: '11',
      timeFormat: 'h:mm p',
      interval: 15,
      defaultTime: '11',
      startTime: '00:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true
    }
  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems, options);
});


// //Calls james' function - need to change the name of the other function though
// function myembedjs(){
//   window.location.replace("results.html");
//   findBestTimeCaller()
// }

//James' function
function myembedjs(){
  // var earliestDatePicked = instanceEarliest.toString();
  // alert(instanceEarliest.toString());

  try {
    alert(returnedPlaceID + " From init.js");
  }
  catch (e) {
    alert("You did not enter a location");
  }
  // alert(($('.datepickerEarliest').datepicker('toString')).value);
  var rtndObj = findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17, 60, returnedPlaceID, "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU");
  var startDT = rtndObj[0];
  var endDT = rtndObj[1];

  window.location.href = ("./results.php?startDT=" + startDT + "&endDT=" + endDT);

}


//original
//  alert(findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17, 60, "ChIJeziKgJKxe0gR8qUIiSmWKJo", "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU"));


//ChIJeziKgJKxe0gR8qUIiSmWKJo PLACE ID ORIGINAL
//document.getElementByID('placeIDfromSearchBox')
