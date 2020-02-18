const mapCenter = new google.maps.LatLng(53.4670705,-2.2363695)

const map = new google.maps.Map(document.getElementById('map'), {
  center: mapCenter,
  zoom: 15
})

const placeService = new google.maps.places.PlacesService(map)

const request = {
  query: 'japan',
  fields: ['place_id', 'name', 'formatted_address', 'icon', 'geometry'],
}

placeService.findPlaceFromQuery(request, (results, status) => {
  if (status == google.maps.places.PlacesServiceStatus.OK) {

    results.forEach((item) => {
      console.log(item)
      // place_id, name, formatted_address, geometry.location, icon
    });
  }
})
