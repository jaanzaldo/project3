var map;
const coords = { lat: 41.881832, lng: -87.623177 };
var chicago;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: coords,
    zoom: 10,
  });
  
  const windowtext = '<div class="googleMapsInfo"><h1>The City of Chicago</h1><p id = "windowtext">The city I have lived in my entire life. The most populated city in Illinois, Chicago is full of so many things to do and places to see (At least there was before COVID happened). A personal highlight was the Blue Man Group, at the Briar Street Theatre. The single greatest concert experience in history.</p></div>';
  
  
  const customMarker = {
		path:
		"M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
		fillColor: "blue",
		fillOpacity: 1,
		strokeWeight: 0.8,
		rotation: 0,
		scale: 3,
		anchor: new google.maps.Point(15, 30),
	};
	
  chicago = new google.maps.Marker({
    position: { lat: 41.881832, lng: -87.623177 },
    map,
	icon: customMarker,
    title: "The City of Chicago",
  });
  
   const infowindow = new google.maps.InfoWindow({
    content: windowtext,
  });

	



  chicago.addListener("click", () => {
	  infowindow.open(map, chicago);
  });
  
  
}

$(document).ready(function(){
      $('.slider').bxSlider();
    });




