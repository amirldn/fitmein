------------------------------------
fit.js Documentation for version 0.1
------------------------------------

fit.js is a script that finds the best time for an event to be fitted into a
calendar, using a variety of data sources. It returns the start and end times
for the best time for an event.



I N S T R U C T I O N S  F O R  U S E :

  1. Import the fit.js script into your HTML file, using the following line of
     code, BEFORE calling any functionality of fit.js, replacing the example
     src with the directory that the fit.js script is located in:
      <script type="text/javascript" src="js/fit.js"></script>
  2. Place the getOpeningHours.php file in same directory as the HTML file that
     the fit.js script was imported into.
  3. Call the findBestTime() function in JavaScript, for example this could be
     when a button is pressed.
  4. Use the data provided in the returned object from the function, which
     will either be:
      a. An error code, as a string, if the function fails.
      b. An array object containing:
        i.   The start time for the calendar event, as a JS Date object
        ii.  The end time for the calendar event, as a JS Date object
        iii. An array object containing any warning codes produced during the
             script run, as strings.



P A R A M E T E R S  F O R  T H E  'findBestTime'  F U N C T I O N :

  1. Date Obj: Earliest date for the event to be fit in to
  2. Date Obj: Latest date for the event to be fit in to
  3. Integer: Earliest hour of the day for the event to be fit in to, 0-23
  4. Integer: Latest hour of the day for the event to be fit in to, 0-23
  5. Integer: The length of time that the event should last in minutes
  6. String: Google Place ID of the place that the event is at
  7. String: Google API key, enabled for use with the Places Library

  An example call to the findBestTime function is as follows:
    var newObj;
    newObj = findBestTime(new Date(2020, 1, 2), new Date(2020, 1, 04), 9, 17,
                          60, "ChIJeziKgJKxe0gR8qUIiSmWKJo",
                          "AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU");



E X P L A N A T I O N  O F  E R R O R  C O D E S :
(the function will not run if an error occurs)

ERROR_UNDEFINED_PARAMETERS:
  Parameters to the findBestTime function, that must be provided when calling
  the function, have not been provided. See above for parameters info.

ERROR_OBTAINING_OPENING_HOURS:
  Error making an HTTP request to Google to obtain the place opening hours. The
  API key or place ID parameters could be invalid, or the getOpeningHours.php
  script not placed in the same directory as the HTML document that fit.js was
  called from.



E X P L A N A T I O N  O F  W A R N I N G  C O D E S :
(the function will run, but with limited functionality, when a warning occurs)
