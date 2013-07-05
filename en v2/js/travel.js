/** Affichage Quote Motto **/
 $(document).ready(function(){
      var myQuotes = new Array();
      myQuotes[0] = "Through struggle...to the stars";
      myQuotes[1] = "Nothing is difficult, everything's a challenge";
	  myQuotes[2] = "They do not know it was impossible so they do it";
	  myQuotes[3] = "Do not think to win, Think not to lose";
	  
	  var mySource = new Array();
      mySource[0] = "RAF Motto";
      mySource[1] = "Turskee Air Force Motto";
	  mySource[3] = "Gichin Funakoshi";
      
      var myRandom = Math.floor(Math.random()*myQuotes.length);
      $(".message").html(myQuotes[myRandom]);
	  $(".source").html(mySource[myRandom]);
	  
   });
   
/** Google Maps fonction **/   
$(document).ready(function initialiser() {

				// Enable the visual refresh
				google.maps.visualRefresh = true;

                var latlng = new google.maps.LatLng(46.779231, 6.659431);
                //objet contenant des propriétés avec des identificateurs prédéfinis dans Google Maps permettant
                //de définir des options d'affichage de notre carte
                var options = {
                    center: latlng,
                    zoom: 3,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                 
                //constructeur de la carte qui prend en paramêtre le conteneur HTML
                //dans lequel la carte doit s'afficher et les options
                var map = new google.maps.Map(document.getElementById("map"), options);
				
				/** Marqueurs Voyages **/
				// Préparation des données
				var locations = [
				  ['Paris',48.8566140, 2.3522219],
				  ['London',51.5112139, -0.1198244],
				  ['Cardiff',51.4815810, -3.1790900],
				  ['Barcelona',41.3850639, 2.1734035],
				  ['NY',40.7143528, -74.0059731],
				  ['Geneva',46.1983922, 6.1422961],
				  ['Liege',50.6325574, 5.5796662],
				  ['Annecy',45.8992470, 6.1293840]
				];
				
				// Boucle pour afficher les locations
				var marqueurs = [];
				var marqueur,i;
				var image = 'images/flag.png';
				for (i = 0; i < locations.length; i++) { 
					marqueur = new google.maps.Marker({
						position: new google.maps.LatLng(locations[i][1], locations[i][2]),
						map: map,
						icon : image
					});
					marqueurs.push(marqueur);
					// Affichage des informations selon la destination
					if(locations[i][0] == 'NY') {
						var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
						  '</div>'+
						  '<h1>New York</h1>'+
						  '<div id="bodyContent">'+
						  '<h2>Holidays</h2>'+
						  '<p> Discover the Big Apple with friends during earthquake and Hurricane Irene. ' +
						  'Really stunning to see these by itself.'+
						  'Beautiful travel, this place has something special</p>'+
						  '<p><strong>Last visited August/September, 2011.</strong></p>'+
						  '</div>'+
						  '</div>';
						var infowindowNY = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 350
						});
						// Ajout de l'event lorsqu'on clique sur la destination
						google.maps.event.addListener(marqueur, 'click', function() {
							infowindowNY.open(map,marqueurs[4]);
						});
					}
					else if(locations[i][0] == 'London') {
						var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
						  '</div>'+
						  '<h1>London</h1>'+
						  '<div id="bodyContent">'+
						  '<h2>Holidays</h2>'+
						  '<p> Seeing one of my friends who live there. ' +
						  'It is always good to see people you love and travel at the same time.</p>'+
						  '<p><strong>Last visited June, 2012.</strong></p>'+
						  '</div>'+
						  '</div>';
						var infowindowLondon = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 300
						});
						google.maps.event.addListener(marqueur, 'click', function() {
							infowindowLondon.open(map,marqueurs[1]);
						});
					}
					else if(locations[i][0] == 'Barcelona') {
						var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
						  '</div>'+
						  '<h1>Barcelona</h1>'+
						  '<div id="bodyContent">'+
						  '<h2>Holidays</h2>'+
						  '<p> One week with my friends near Barcelona. ' +
						  'to have fun and to discover Catalonia.</p>'+
						  '<p><strong>Last visited September, 2012.</strong></p>'+
						  '</div>'+
						  '</div>';
						var infowindowBarcelona = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 300
						});
						google.maps.event.addListener(marqueur, 'click', function() {
							infowindowBarcelona.open(map,marqueurs[3]);
						});
					}
					else if(locations[i][0] == 'Cardiff') {
						var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
						  '</div>'+
						  '<h1>Cardiff</h1>'+
						  '<div id="bodyContent">'+
						  '<h2>Holidays</h2>'+
						  '<p> My first travel abroad. ' +
						  'One week to see one of my sister in internship there and to enjoy Wales.</p>'+
						  '<p><strong>Last visited july, 1996.</strong></p>'+
						  '</div>'+
						  '</div>';
						var infowindowCardiff = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 300
						});
						google.maps.event.addListener(marqueur, 'click', function() {
							infowindowCardiff.open(map,marqueurs[2]);
						});
					}
					else if(locations[i][0] == 'Paris') {
						var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
						  '</div>'+
						  '<h1>France</h1>'+
						  '<div id="bodyContent">'+
						  '<h2> My Home Country.</h2> ' +
						  '<p>Culinary reputation, old History and Alps are always an oasis of well-being.</p>'+
						  '</div>'+
						  '</div>';
						var infowindowFrance = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 300
						});
						google.maps.event.addListener(marqueur, 'click', function() {
							infowindowFrance.open(map,marqueurs[0]);
						});
					}
					else if(locations[i][0] == 'Annecy') {
						var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
						  '</div>'+
						  '<h1>Annecy</h1>'+
						  '<div id="bodyContent">'+
						  '<h2>My french paradise</h2>.' +
						  '<p>Also known as "Venice of Alps" is a quited and beautiful city.</p>'+
						  '<p>It is a lovely blend of town and nature</p>'+
						  '<p><strong>Last visited january, 2013.</strong></p>'+
						  '</div>'+
						  '</div>';
						var infowindowAnnecy = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 300
						});
						google.maps.event.addListener(marqueur, 'click', function() {
							infowindowAnnecy.open(map,marqueurs[7]);
						});
					}
				}
});

/** Ouverture box lors clique image **/
$(document).ready(function() {
     $('#ehaltAir').click(function(e) {
          e.preventDefault();
	  $('#myModal').reveal();
     });
});

$('#myModal').reveal({
     animation: 'fadeAndPop',                   //fade, fadeAndPop, none
     animationspeed: 300,                       //how fast animtions are
     closeonbackgroundclick: true,              //if you click background will modal close?
     dismissmodalclass: 'close-reveal-modal'    //the class of a button or element that will close an open modal
});