  <?php
  $urlToGet = "https://maps.googleapis.com/maps/api/place/details/json?key=" . $_GET["apiKey"] . "&place_id=" . $_GET["placeID"] . "&fields=name,opening_hours";
  $jsonRet = file_get_contents($urlToGet);
  echo $jsonRet; // This will echo the returned json to the HTML body, which is then returned as the response object when this php file is called using an HTML request within JavaScript.
  ?>
