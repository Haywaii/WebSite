/** Affichage Quote Motto **/
 $(document).ready(function(){
      var myQuotes = new Array();
      myQuotes[0] = "&ldquo; &Agrave; travers l'adversit&eacute;...jusqu'aux &eacute;toiles &bdquo;";
      myQuotes[1] = "&ldquo; Rien n'est difficile, tout est challenge &bdquo;";
	  myQuotes[2] = "&ldquo; Ne pense pas &agrave; gagner, pense &agrave; ne pas perdre &bdquo;";
	  
	  var mySource = new Array();
      mySource[0] = "RAF Motto";
      mySource[1] = "Turskee Air Force Motto";
	  mySource[2] = "Gichin Funakoshi";
      
      var myRandom = Math.floor(Math.random()*myQuotes.length);
      $(".message").html(myQuotes[myRandom]);
	  $(".source").html(mySource[myRandom]);
	  
   });
   
/** Google Maps fonction **/   
$(document).ready(function initialiser() {

				// Enable the visual refresh
				google.maps.visualRefresh = true;

                var latlng = new google.maps.LatLng(46.779231, 6.659431);
                //objet contenant des propri�t�s avec des identificateurs pr�d�finis dans Google Maps permettant
                //de d�finir des options d'affichage de notre carte
                var options = {
                    center: latlng,
                    zoom: 3,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                 
                //constructeur de la carte qui prend en param�tre le conteneur HTML
                //dans lequel la carte doit s'afficher et les options
                var map = new google.maps.Map(document.getElementById("map"), options);
				
				/** Marqueurs Voyages **/
				// Pr�paration des donn�es
				var locations = [
				  ['Paris',48.8566140, 2.3522219],
				  ['Londres',51.5112139, -0.1198244],
				  ['Cardiff',51.4815810, -3.1790900],
				  ['Barcelone',41.3850639, 2.1734035],
				  ['NY',40.7143528, -74.0059731],
				  ['Gen�ve',46.1983922, 6.1422961],
				  ['Liege',50.6325574, 5.5796662],
				  ['Annecy',45.8992470, 6.1293840],
				  ['Bruxelles',50.8503396, 4.3517103],
				  ['Lausanne',46.5199617, 6.6335971]
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
						  '<h1>New York</h1>'+
						  '<h2>Vacances</h2>'+
						  '<p> D�couvrir la Grande Pomme avec des amis pendant le tremblement terre et l&apos;ouragan Ir�ne. ' +
						  'R�ellement impressionnant de voir �a par soi-m�me'+
						  'Magnifique voyage, cet endroit a quelque chose de sp�cial</p>'+
						  '<p><strong>Derni�re visite Ao�t/Septembre 2011.</strong></p>'+
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
						  '<h1>London</h1>'+
						  '<h2>Vacances</h2>'+
						  '<p> Voir un de mes amis qui vit l� bas. ' +
						  'C&apos;est toujours agr�able de voir les gens qu&apos;on aime et voyager en m�me temps.</p>'+
						  '<p><strong>Derni�re visite Juin 2012.</strong></p>'+
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
						  '<h1>Barcelone</h1>'+
						  '<h2>Vacances</h2>'+
						  '<p>Une semaine avec mes amis pr�s de Barcelone' +
						  'pour se d�tendre et d�couvrir la Catalogne.</p>'+
						  '<p><strong>Derni�re visite Septembre 2012.</strong></p>'+
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
						  '<h1>Cardiff</h1>'+
						  '<h2>Vacances</h2>'+
						  '<p> Mon premier voyage � l&apos;�tranger. ' +
						  'Une semaine pour voir ma soeur en stage l� bas et visiter le Pays De Galles.</p>'+
						  '<p><strong>Derni�re visite Juillet 1996.</strong></p>'+
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
						  '<h1>France</h1>'+
						  '<h2> Ma terre natale.</h2> ' +
						  '<p>R�putation culinaire, riche Histoire et les Alpes sont toujours une oasis de bien-�tre.</p>'+
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
						  '<h1>Annecy</h1>'+
						  '<h2>Mon paradis fran�ais.</h2>' +
						  '<p>Ausi connu comme "Venise des Alpes", c&apos;est une charmante et paisible ville.</p>'+
						  '<p>C&apos;est le compromis parfait entre nature et civilisation</p>'+
						  '<p><strong>Derni�re visite Juillet 2013.</strong></p>'+
						  '</div>';
						var infowindowAnnecy = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 300
						});
						google.maps.event.addListener(marqueur, 'click', function() {
							infowindowAnnecy.open(map,marqueurs[7]);
						});
					}
					else if(locations[i][0] == 'Gen�ve') {
						var contentString = '<div id="content">'+
						  '<h1>Gen�ve</h1>'+
						  '<h2>Pour le travail</h2>' +
						  '<p>6 mois dans le secteur bancaire.</p>'+
						  '<p>Ville internationale par excellence o� se cotoient de multiples cultures</p>'+
						  '<p><strong>Derni�re visite Juillet 2013.</strong></p>'+
						  '</div>';
						var infowindowAnnecy = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 300
						});
						google.maps.event.addListener(marqueur, 'click', function() {
							infowindowAnnecy.open(map,marqueurs[5]);
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