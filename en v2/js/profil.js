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

/** Affichage Graphique Skills **/   
$(document).ready(function () {
        // The data to be represented on the Radar chart.
        var data = [23, 23, 23, 14, 25];
		/**var data2 = [25, 30, 30, 20, 32];**/

        // Create the Radar chart. The arguments are the canvas ID and the data to be shown on the chart.
        //var radar = new RGraph.Radar('tSkills', data);
        
        // If you want to show multiple data sets, then you give them like this:
        var radar = new RGraph.Radar('tSkills', data/**, data2**/);

        // Configure the Radar chart to look as you wish.
		radar.Set('chart.title','Technical');
		radar.Set('chart.title.color','#8BB8FB');
		radar.Set('chart.title.y',15);
		radar.Set('chart.title.x',150);
		radar.Set('chart.title.size',16);
		
		//Labels
        radar.Set('chart.labels', ['JAVA/JEE', 'UML/Merise', 'SQL', 'HTML/CSS/JS', 'Git/SVN']);
		radar.Set('chart.text.size',12);
		radar.Set('chart.background.circles.color','#919084');
		// Chart color
		//radar.Set('colors', ['#FEE855', '#D5DAF9']);
		radar.Set('colors', ['rgba(255,0,0,0.25)'/**,'rgba(255,255,0,0.25)'**/]);
		radar.Set('chart.colors.alpha', 0.7);
	
		radar.Set('chart.axes.color', 'transparent');
		//L�gende de la zone radar
        radar.Set('chart.key', ['2013'/**,'2013'**/]);
		radar.Set('chart.key.linewidth', 0);
		radar.Set('chart.ymax',40);
        // Now call the .Draw() method to draw the chart.
        radar.Draw();
    });

$(document).ready(function () {
        // The data to be represented on the Radar chart.
        var data = [26, 9, 30, 10, 18];

        // Create the Radar chart. The arguments are the canvas ID and the data to be shown on the chart.
        var radar = new RGraph.Radar('fSkills', data);
        
        // If you want to show multiple data sets, then you give them like this:
        // var radar = new RGraph.Radar('myRadar', [3,5,6,8], [4,5,2,6]);

        // Configure the Radar chart to look as you wish.
		radar.Set('chart.title','Functional');
		radar.Set('chart.title.color','#8BB8FB');
		radar.Set('chart.title.y',15);
		radar.Set('chart.title.x',600);
		radar.Set('chart.title.size',16);
		radar.Set('chart.text.size',12);	
		radar.Set('chart.background.circles.color','#919084');
		// Chart color
		radar.Set('chart.colors', ['rgba(255,0,0,0.25)']);
		radar.Set('chart.colors.alpha', 0.7);
		
		//Labels
        radar.Set('chart.labels', ['English', 'German', 'Communication', 'Banking/Finance', 'Agiles Methods']);
        //radar.Set('chart.key', ['Niveau fonctionnel']);
		radar.Set('chart.ymax',40);
        
        // Now call the .Draw() method to draw the chart.
        radar.Draw();
});