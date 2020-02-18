M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

$( ".datepickerEarliest" ).datepicker({});

$( ".selector" ).datepicker({
  maxDate: "+1m +1w"
});

$( ".datepickerLatest" ).datepicker({});



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
