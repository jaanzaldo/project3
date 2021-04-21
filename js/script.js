var map;
const coords = { lat: 41.881832, lng: -87.623177 };
var chicago;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: coords,
    zoom: 10,
  });
  
  const windowtext = '<div class="googleMapsInfo"><h1>The City of Chicago</h1><p id = "windowtext">The city I have lived in my entire life. The most populated city in Illinois, Chicago is full of so many things to do and places to see (At least there was before COVID happened). A personal highlight was the Blue Man Group, at the Briar Street Theatre. The single greatest concert experience in history.</p></div>';
  
  
 
	
  chicago = new google.maps.Marker({
    position: { lat: 41.881832, lng: -87.623177 },
    map,
    title: "The City of Chicago",
  });
  
   const infowindow = new google.maps.InfoWindow({
    content: windowtext,
  });

	



  chicago.addListener("click", () => {
	  infowindow.open(map, chicago);
  });
  
  
}





