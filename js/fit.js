// FitMeIn - for when your schedule's tight ;)
// Written by James Bungay, January 2020

//<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU&libraries=places"></script>
// https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyACHAZEZeyYI36Dxezeq9axe-GJC_BIDpU&place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,opening_hours

function findBestTime(dateMin, dateMax, timeMin, timeMax, timeSpent, placeID, apiKey){
  if ((dateMin == undefined) || (dateMax == undefined) || (timeMin == undefined) || (timeMax == undefined) || (timeSpent == undefined) || (placeID == undefined) || (apiKey == undefined)) {
    return "ERROR_UNDEFINED_PARAMETERS";
  }
  alert("Function started!");

  var outputWarnings = [];


  // GET PLACE TYPE FROM GOOGLE PLACES API, TO DETERMINE WHICH SET OF BUSYNESS LEVELS TO USE.



  // --------------------------------------------------------------------------
  // Obtain opening times of place: DONE
  // --------------------------------------------------------------------------

  var openingTimes = [];
  var closingTimes = [];

  // Get opening hours from PHP script:
  var urlOH = "getOpeningHours.php?placeID=" + placeID + "&apiKey=" + apiKey;
  var returnObjOH = undefined;
  var wasErrorObtainingOH = false;
  try {
    returnObjOH = getSynchr(urlOH);
  }
  catch(err) {
    return "ERROR_OBTAINING_OPENING_HOURS";
    wasErrorObtainingOH = true;
  }
  if (wasErrorObtainingOH == false) {
    if (returnObjOH[0] == "200") { // i.e. response successfully obtained
      var rtndJsonStr = returnObjOH[1];
      // Parse returned Json for opening hours:
      var parsedJson = JSON.parse(rtndJsonStr);
      // Store opening times in array:
      var tempStrOpen = undefined;
      var tempStrClose = undefined;
      var tempOpenHr = undefined;
      var tempOpenMin = undefined;
      var tempCloseHr = undefined;
      var tempCloseMin = undefined;
      var numOfDaysOpen = (parsedJson.result.opening_hours.periods).length;
      var currentDay = undefined;
      for (var i = 0; i < 7; i++) {
        openingTimes.push(-1);
        closingTimes.push(-1);
      }
      for (var i = 0; i < numOfDaysOpen; i++) {
        currentDay = parsedJson.result.opening_hours.periods[i].open.day;
        tempStrOpen = parsedJson.result.opening_hours.periods[i].open.time;
        tempStrClose = parsedJson.result.opening_hours.periods[i].close.time;
        tempOpenHr = Number(tempStrOpen.substring(0, 2));
        tempOpenMin = Number(tempStrOpen.substring(2, 4));
        tempOpenHr += tempOpenMin / 60;
        tempCloseHr = Number(tempStrClose.substring(0, 2));
        tempCloseMin = Number(tempStrClose.substring(2, 4));
        tempCloseHr += tempCloseMin / 60;
        openingTimes[currentDay - 1] = tempOpenHr;
        closingTimes[currentDay - 1] = tempCloseHr;
      }
    }
  }

  // Determine whether to use real opening hours or default backup values:
  var openingTimesDefaults = [9, 9, 9, 9, 9, 9.5, 11]; // Opening times starting Monday (index 0)
  var closingTimesDefaults = [5, 5, 5, 5, 5, 5, 4.5];
  if (openingTimes == [-1, -1, -1, -1, -1, -1, -1]) {
    outputWarnings.push("WARNING_NO_OPENING_TIMES_DATA");
    openingTimes = openingTimesDefaults;
    closingTimes = closingTimesDefaults;
  }



  // --------------------------------------------------------------------------
  // Obtain busyness level of place:
  // --------------------------------------------------------------------------

  var busynessLevel = undefined;

  // For when no real busyness data for the place exists, this data will be used:
  //                            0   1   2   3  4  5  6  7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23rd Hour
  var busynessLevelDefaults = [[36, 29, 22, 9, 2, 1, 3, 12, 26, 43, 57, 60, 71, 59, 52, 63, 79, 63, 26, 13, 12, 29, 41, 51],  // Monday
                               [36, 29, 22, 9, 2, 1, 3, 12, 26, 43, 57, 60, 71, 59, 52, 63, 79, 63, 26, 13, 12, 29, 41, 51],  // Tuesday
                               [36, 29, 22, 9, 2, 1, 3, 12, 26, 43, 57, 60, 71, 59, 52, 63, 79, 63, 26, 13, 12, 29, 41, 51],  // Wednesday
                               [36, 29, 22, 9, 2, 1, 3, 12, 26, 43, 57, 60, 71, 59, 52, 63, 79, 63, 26, 13, 12, 29, 41, 51],  // Thursday
                               [36, 29, 22, 9, 2, 1, 3, 12, 26, 43, 57, 60, 71, 59, 52, 63, 79, 63, 26, 13, 12, 29, 41, 51],  // Friday
                               [36, 29, 22, 9, 2, 1, 3, 12, 26, 43, 57, 60, 71, 59, 52, 63, 79, 63, 26, 13, 12, 29, 41, 51],  // Saturday
                               [36, 29, 22, 9, 2, 1, 3, 12, 26, 43, 57, 60, 71, 59, 52, 63, 79, 63, 26, 13, 12, 29, 41, 51]]; // Sunday


  var busynessDataPresent = false; // Determines whether data from Google is available or not.
  if (busynessLevel != undefined) {
    busynessDataPresent = true;
  } else {
    outputWarnings.push("WARNING_NO_BUSYNESS_DATA");
    busynessLevel = busynessLevelDefaults;
  }



  // --------------------------------------------------------------------------
  // Find all possible times from calendar:
  // --------------------------------------------------------------------------

  timeMax -= timeSpent; // Removes time spent at place so event does not overrun latest time specified.

  var userCalendarEvents = undefined;


  // Only choose gaps which are within timeMin and timeMax. NOT CURRENT IMPLEMENTED
  // !!!!!!


  var possibleTimes = [new Date(2020, 0, 29, 16, 15), new Date(2020, 0, 30, 13, 00)];
  possibleTimes.push(new Date(2020, 1, 02, 10, 45));
  possibleTimes.push(new Date(2020, 1, 05, 12, 30));

  var nOfDays = daysBetween(dateMin, dateMax);

  // Loop for each day between dateMin and dateMax to find gaps for event:
  for (var i = 0; i < nOfDays; i++) { // Loop for each day in range
    var currDate = new Date(dateMin.getTime() + (i * 60 * 60 * 1000));
    var currDayOfWeek = currDate.getDay(); // 0=Sunday, 1=Monday, etc.
    currDayOfWeek -= 1;
    if (currDayOfWeek == -1){ // 0=Monday, 1=Tuesday, etc.
      currDayOfWeek = 6;
    }
    for (var j = Math.round((openingTimes[currDayOfWeek] * 60)); j < (Math.round((closingTimes[currDayOfWeek] * 60)) - timeSpent); j++) { // Loop for each minute within opening times of day
      // IF NO OVERLAP BETWEEN CURRENT TIME AND ALL CALENDAR EVENTS TODAY THEN:
      // ADD j*60*1000 + currDate TO POSSIBLE TIMES
    }
  }
  var nOfPossibleTimes = possibleTimes.length;


  // --------------------------------------------------------------------------
  // Choose best of the possible times: DONE
  // --------------------------------------------------------------------------

  var bestTime = new Date();
  var bestTimeBusyness = 101; // Initially set to higher than the highest possible busyness (100).

  for (var i = 0; i < nOfPossibleTimes; i++) {
    var hourOfPossTime = possibleTimes[i].getHours();
    var dayOfWeekOfPossTime = possibleTimes[i].getDay(); // 0=Sunday, 1=Monday, etc.
    dayOfWeekOfPossTime -= 1;
    if (dayOfWeekOfPossTime == -1){ // 0=Monday, 1=Tuesday, etc.
      dayOfWeekOfPossTime = 6;
    }
    var busynessLevelOfPossTime = undefined;
    if (busynessDataPresent) {
      busynessLevelOfPossTime = busynessLevel[dayOfWeekOfPossTime][hourOfPossTime];
    } else {
      // If no busyness data, just choose soonest gap that the event can fit in to the user's calendar:
      busynessLevelOfPossTime = busynessLevelDefaults[dayOfWeekOfPossTime][hourOfPossTime];
    }
    // If busyness level of current time is less than best time then replace best time:
    if (busynessLevelOfPossTime < bestTimeBusyness) {
      bestTime = possibleTimes[i];
      bestTimeBusyness = busynessLevelOfPossTime;
    }
  }



  // --------------------------------------------------------------------------
  // Return start and end time of the best time for the event, plus warnings: DONE
  // --------------------------------------------------------------------------

  var bestTimeEnd = new Date(bestTime.getTime() + (timeSpent * 60 * 1000)); // Defining time in milliseconds.
  var returnObj = [bestTime, bestTimeEnd, outputWarnings];

  return returnObj;
}



function getSynchr(urlToGet) { // Make an HTTP request synchronously (i.e. wait for the response before continuing)
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", urlToGet, false);
    httpReq.send(null);
    var getSynchrReturnObj = [];
    getSynchrReturnObj.push(httpReq.status); // 200 = successful
    getSynchrReturnObj.push(httpReq.responseText);
    return getSynchrReturnObj;
}

function daysBetween(startDate, endDate) {
  var SINGLE_DAY = 1000 * 60 * 60 * 24;
  var msDiff = endDate.getTime() - startDate.getTime();
  var dayDiff = Math.round(msDiff / SINGLE_DAY) + 1; // Rounded as some days may not be 24 hours, e.g. across daylight savings adjustments.
  if (dayDiff < 1) {
    return "Error in fit.js: Start date is not before end date. Please adjust parameters.";
  }
  return dayDiff;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
