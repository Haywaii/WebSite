// Affichage Quote Motto
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

/** Affichage box clique image **/

$(document).ready(function() {
     $('#sfiles').click(function(e) {
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
