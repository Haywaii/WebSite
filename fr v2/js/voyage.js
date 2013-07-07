$(document).ready(function(){
      var myQuotes = new Array();
      myQuotes[0] = "&Agrave; travers l'adversit&eacute;...jusqu'aux &eacute;toiles";
      myQuotes[1] = "Rien n'est difficile, tout est challenge";
	  myQuotes[2] = "Ils ne savaient pas que c'&eacute;tait impossible alors ils l'ont fait";
	  myQuotes[3] = "Ne pense pas &agrave; gagner, pense &agrave; ne pas perdre";
	  
	  var mySource = new Array();
      mySource[0] = "RAF Motto";
      mySource[1] = "Turskee Air Force Motto";
	  mySource[3] = "Gichin Funakoshi";
      
      var myRandom = Math.floor(Math.random()*myQuotes.length);
      $(".message").html(myQuotes[myRandom]);
	  $(".source").html(mySource[myRandom]);
	  
});

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
				  ['Londres',51.5112139, -0.1198244],
				  ['Cardiff',51.4815810, -3.1790900],
				  ['Barcelone',41.3850639, 2.1734035],
				  ['NY',40.7143528, -74.0059731],
				  ['Genève',46.1983922, 6.1422961],
				  ['Liège',50.6325574, 5.5796662],
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
						  '<h2>Vacances</h2>'+
						  '<p> Visite de la ville avec des amis durant le tremblement de terre et ouragan Irène.' +
						  'Très impressionnant de voir tout cela de soi même.'+
						  'Magnifique voyage, cette ville a quelque chose de spécial</p>'+
						  '<p><strong>Dernière visite en Août/Septembre 2011.</strong></p>'+
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
					else if(locations[i][0] == 'Londres') {
						var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
						  '</div>'+
						  '<h1>Londres</h1>'+
						  '<div id="bodyContent">'+
						  '<h2>Vacances</h2>'+
						  '<p> Voir un de mes amis qui vit là bas. ' +
						  'Toujours agréable de voir les gens qu''on aime et voyager en même temps.</p>'+
						  '<p><strong>Dernière visite en Juin 2012.</strong></p>'+
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
					else if(locations[i][0] == 'Barcelone') {
						var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
						  '</div>'+
						  '<h1>Barcelone</h1>'+
						  '<div id="bodyContent">'+
						  '<h2>Vacances</h2>'+
						  '<p> Une semaine avec des amis autour de Barcelone. ' +
						  'pour se détendre et découvrir la Catalogne.</p>'+
						  '<p><strong>Dernière visite en Septembre 2012.</strong></p>'+
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
						  '<h2>Vacances</h2>'+
						  '<p> Mon premier voyage à l''étranger. ' +
						  'Une semaine pour voir ma soeur en stage et visiter le Pays de Galles.</p>'+
						  '<p><strong>Dernière visite en Juillet 1996.</strong></p>'+
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
						  '<h2> Mon pays natal.</h2> ' +
						  '<p>Réputation culinaire, histoire riche et les Alpes sont toujours un oasis de bien-être.</p>'+
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
						  '<h2>Mon paradis français</h2>.' +
						  '<p>Aussi connue comme "Venise des Alpes" c''est une paisible et belle ville.</p>'+
						  '<p>C''est un tendre compromis entre civilisation et nature</p>'+
						  '<p><strong>Dernière visite en Janvier 2013.</strong></p>'+
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