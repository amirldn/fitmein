// This sample uses the autocomplete2 widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch2, autocomplete2;

function initAutocomplete() {
  // Create the autocomplete2 object, restricting the search predictions to
  // geographical location types.
  autocomplete2 = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete2'), {types: ['establishment']});

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete2.setFields(['address_component','place_id']);

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete2.addListener('place_changed', getPlaceID2);
}

function getPlaceID2() {
  // Get the place details from the autocomplete2 object.
  var place = autocomplete2.getPlace();
  returnedPlaceID2 = place.place_id
  // alert(returnedPlaceID + ' from auto.js')
}

// Bias the autocomplete2 object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle(
          {center: geolocation, radius: position.coords.accuracy});
      autocomplete2.setBounds(circle.getBounds());
    });
  }
}
