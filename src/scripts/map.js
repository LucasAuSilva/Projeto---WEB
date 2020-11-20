var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: 40.7484405, lng: -73.9856644},
    zoom: 15
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: 40.7484405, lng: -73.9856644},
    title: "Empire State Building",
    map: mapa
  });

}