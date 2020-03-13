// This sample uses the autocomplete3 widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch3, autocomplete3;

function initAutocomplete() {
  // Create the autocomplete3 object, restricting the search predictions to
  // geographical location types.
  autocomplete3 = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete3'), {types: ['establishment']});

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete3.setFields(['address_component','place_id']);

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete3.addListener('place_changed', getPlaceID3);
}

function getPlaceID3() {
  // Get the place details from the autocomplete3 object.
  var place = autocomplete3.getPlace();
  returnedPlaceID3 = place.place_id
  // alert(returnedPlaceID + ' from auto.js')
}

// Bias the autocomplete3 object to the user's geographical location,
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
      autocomplete3.setBounds(circle.getBounds());
    });
  }
}
