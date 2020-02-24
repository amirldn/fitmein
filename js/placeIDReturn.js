function placeIDReturn() {
  var map = undefined;
  var input = document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.setFields(['place_id']);
  var place = autocomplete.getPlace();
  alert(place.place_id);
  // var foundPlaceID = place.place_id;
  // alert(foundPlaceID.value)
}
