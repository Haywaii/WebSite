/**$(function() {
  // Ici, le DOM est entièrement défini
  $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
});**/

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
   
$(document).ready(function () {
        // The data to be represented on the Radar chart.
        var data = [22, 25, 25, 15, 25];

        // Create the Radar chart. The arguments are the canvas ID and the data to be shown on the chart.
        var radar = new RGraph.Radar('tSkills', data);
        
        // If you want to show multiple data sets, then you give them like this:
        // var radar = new RGraph.Radar('myRadar', [3,5,6,8], [4,5,2,6]);

        // Configure the Radar chart to look as you wish.
		radar.Set('chart.title','Technical');
		radar.Set('chart.title.color','#8BB8FB');
		radar.Set('chart.title.y',15);
		radar.Set('chart.title.x',150);
		radar.Set('chart.title.size',16);
		
		//Labels
        radar.Set('chart.labels', ['JAVA/JEE', 'UML/Merise', 'SQL', 'HTML/CSS', 'Git/SVN']);
		radar.Set('chart.text.size',12);
		radar.Set('chart.background.circles.color','#919084');
		// Chart color
		radar.Set('chart.colors', ['#FEE855']);
		radar.Set('chart.colors.alpha', 0.7);
		//Légende de la zone radar
        //radar.Set('chart.key', ['Niveau technique']);
		radar.Set('chart.ymax',40);
        // Now call the .Draw() method to draw the chart.
        radar.Draw();
    });

$(document).ready(function () {
        // The data to be represented on the Radar chart.
        var data = [29, 10, 30, 10, 20];

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
		radar.Set('chart.colors', ['#FEE855']);
		radar.Set('chart.colors.alpha', 0.7);
		
		//Labels
        radar.Set('chart.labels', ['English', 'German', 'Communication', 'Banking', 'Agile Methods']);
        //radar.Set('chart.key', ['Niveau fonctionnel']);
		radar.Set('chart.ymax',40);
        
        // Now call the .Draw() method to draw the chart.
        radar.Draw();
});