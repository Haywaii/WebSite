/** Affichage Quote Motto **/
$(document).ready(function(){
	  var myQuotes = new Array();
      myQuotes[0] = "&ldquo; Through struggle...to the stars &bdquo;";
      myQuotes[1] = "&ldquo; Nothing is difficult, everything's a challenge &bdquo;";
	  myQuotes[2] = "&ldquo; Do not think to win, Think not to lose &bdquo;";
	  
	  var mySource = new Array();
      mySource[0] = "RAF Motto";
      mySource[1] = "Turskee Air Force Motto";
	  mySource[2] = "Gichin Funakoshi";
      
      var myRandom = Math.floor(Math.random()*myQuotes.length);
      $(".message").html(myQuotes[myRandom]);
	  $(".source").html(mySource[myRandom]);
	  
   });

/** Affichage graph skills **/

$(document).ready(function () {
        // The data to be represented on the Radar chart.
        var data = [21, 5, 39, 5, 21];
		/**var data2 = [25, 30, 30, 20, 32];**/

        // Create the Radar chart. The arguments are the canvas ID and the data to be shown on the chart.
        //var radar = new RGraph.Radar('tSkills', data);
        
        // If you want to show multiple data sets, then you give them like this:
        var radar = new RGraph.Radar('autoSkills', data);

        // Configure the Radar chart to look as you wish.
		radar.Set('chart.title.color','#8BB8FB');
		radar.Set('chart.title.y',15);
		radar.Set('chart.title.x',150);
		radar.Set('chart.title.size',16);
		
		//Labels
        radar.Set('chart.labels', ['Communication', 'Design', 'Technical expertise', 'Project Management', 'Analyze needs']);
		radar.Set('chart.text.size',12);
		radar.Set('chart.background.circles.color','#919084');
		radar.Set('strokestyle', ['#FDD569']);
		// Chart color
		radar.Set('colors', ['#FDD569']);
		radar.Set('chart.colors.alpha', 0.7);
	
		radar.Set('chart.axes.color', 'transparent');
		radar.Set('chart.key.linewidth', 0);
		radar.Set('chart.ymax',40);
        // Now call the .Draw() method to draw the chart.
        radar.Draw();	
    });
  

$(document).ready(function () {
        // The data to be represented on the Radar chart.
        var data = [37, 35, 25, 20, 35];
		/**var data2 = [25, 30, 30, 20, 32];**/

        // Create the Radar chart. The arguments are the canvas ID and the data to be shown on the chart.
        //var radar = new RGraph.Radar('tSkills', data);
        
        // If you want to show multiple data sets, then you give them like this:
        var radar = new RGraph.Radar('caSkills', data);

        // Configure the Radar chart to look as you wish.
		radar.Set('chart.title.color','#8BB8FB');
		radar.Set('chart.title.y',15);
		radar.Set('chart.title.x',150);
		radar.Set('chart.title.size',16);
		
		//Labels
        radar.Set('chart.labels', ['Communication', 'Design', 'Technical expertise', 'Project Management', 'Analyze needs']);
		radar.Set('chart.text.size',12);
		radar.Set('chart.background.circles.color','#919084');
		radar.Set('strokestyle', ['#FDD569']);
		// Chart color
		radar.Set('colors', ['#FDD569']);
		radar.Set('chart.colors.alpha', 0.7);
	
		radar.Set('chart.axes.color', 'transparent');
		radar.Set('chart.key.linewidth', 0);
		radar.Set('chart.ymax',40);
        // Now call the .Draw() method to draw the chart.
        radar.Draw();		
    });

$(document).ready(function () {
        // The data to be represented on the Radar chart.
        var data = [20, 20, 37, 10, 20];

        // Create the Radar chart. The arguments are the canvas ID and the data to be shown on the chart.
        //var radar = new RGraph.Radar('tSkills', data);
        
        // If you want to show multiple data sets, then you give them like this:
        var radar = new RGraph.Radar('aKazanSkills', data);

        // Configure the Radar chart to look as you wish.
		radar.Set('chart.title.color','#8BB8FB');
		radar.Set('chart.title.y',15);
		radar.Set('chart.title.x',150);
		radar.Set('chart.title.size',16);
		
		//Labels
        radar.Set('chart.labels', ['Communication', 'Design', 'Technical expertise', 'Project Management', 'Analyze needs']);
		radar.Set('chart.text.size',12);
		radar.Set('chart.background.circles.color','#919084');
		// Chart color
		radar.Set('strokestyle', ['#FDD569']);
		radar.Set('colors', ['#FDD569']);
		radar.Set('chart.colors.alpha', 0.7);
	
		radar.Set('chart.axes.color', 'transparent');
		radar.Set('chart.key.linewidth', 0);
		radar.Set('chart.ymax',40);
        // Now call the .Draw() method to draw the chart.
        radar.Draw();
    });

$(document).ready(function () {
        // The data to be represented on the Radar chart.
        var data = [24, 24, 32, 20, 24];

        // Create the Radar chart. The arguments are the canvas ID and the data to be shown on the chart.
        //var radar = new RGraph.Radar('tSkills', data);
        
        // If you want to show multiple data sets, then you give them like this:
        var radar = new RGraph.Radar('aGedSkills', data);

        // Configure the Radar chart to look as you wish.
		radar.Set('chart.title.color','#8BB8FB');
		radar.Set('chart.title.y',15);
		radar.Set('chart.title.x',150);
		radar.Set('chart.title.size',16);
		
		//Labels
        radar.Set('chart.labels', ['Communication', 'Design', 'Technical expertise', 'Project Management', 'Analyze needs']);
		radar.Set('chart.text.size',12);
		radar.Set('chart.background.circles.color','#919084');
		// Chart color
		radar.Set('strokestyle', ['#FDD569']);
		radar.Set('colors', ['#FDD569']);
		radar.Set('chart.colors.alpha', 0.7);
	
		radar.Set('chart.axes.color', 'transparent');
		radar.Set('chart.key.linewidth', 0);
		radar.Set('chart.ymax',40);
        // Now call the .Draw() method to draw the chart.
        radar.Draw();
    });