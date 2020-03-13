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
    defaultDate: new Date(),
  }
  elemsdpE = document.querySelectorAll('.datepickerEarliest');
  var instances = M.Datepicker.init(elemsdpE, options);
  // M.Datepicker.getInstance($('.datepickerEarliest')).date;
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {
    autoClose: true,
    showClearBtn: true,
    minDate: new Date(),
    maxDate: new Date(2021,0,1),
    defaultDate: new Date(),
  }
  elemsdpL = document.querySelectorAll('.datepickerLatest');
  var instances = M.Datepicker.init(elemsdpL, options);
  instanceLatest = M.Datepicker.getInstance(elemsdpL);

  // var instanceLatest = M.Datepicker.getInstance(document.querySelectorAll('.datepickerLatest'));
  // alert(instanceLatest.toString())
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
      scrollbar: true,
      twelveHour: false
    }
  elemsTP = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elemsTP, options);
  instanceTimePicker = M.Timepicker.getInstance(elemsTP);

});


// //Calls james' function - need to change the name of the other function though
// function myembedjs(){
//   window.location.replace("results.html");
//   findBestTimeCaller()
// }

function setEarliestDate(){
  try {
    earliestDateSet = M.Datepicker.getInstance($('.datepickerEarliest')).date;
  } catch (e) {
  }

}

function setLatestDate(){
  try {
    latestDateSet = M.Datepicker.getInstance($('.datepickerLatest')).date;

  } catch (e) {

  }
}



function setTime(){
  timeSet = M.Timepicker.getInstance($('.timepicker')).time;
  timeSet = timeSet.replace(/(^\d+)(.+$)/i,'$1'); //=> '123'
}


//James' function
function myembedjs(){

  // prints date earliest
  setLatestDate();
  setEarliestDate();
  setTime();
  // alert("Earliest :"+earliestDateSet +"Latest :"+ latestDateSet);
  // alert(timeSet);
  try {
    alert(returnedPlaceID + " From init.js");
  }
  catch (e) {
    alert("You did not enter a location");
  }
  // var rtndObj = findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17, 60, returnedPlaceID, "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU");

  var rtndObj = findBestTime(earliestDateSet, latestDateSet, timeSet, 17, 60, returnedPlaceID, "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU");

  var startDT = rtndObj[0];
  var endDT = rtndObj[1];

  window.location.href = ("./results.php?startDT=" + startDT + "&endDT=" + endDT);

}


//original
//  alert(findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17, 60, "ChIJeziKgJKxe0gR8qUIiSmWKJo", "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU"));


//ChIJeziKgJKxe0gR8qUIiSmWKJo PLACE ID ORIGINAL
//document.getElementByID('placeIDfromSearchBox')
