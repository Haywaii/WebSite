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

/** Comportement image sur passage souris **/
$('#sfiles').mouseover(function(){
  $(this).src = "images/ww2/sfiles_test.png";
});

$('#sfiles').mouseout(function(){
  $(this).src = "images/ww2/sfiles.png");
});