/**$(function() {
  // Ici, le DOM est entièrement défini
  $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
});**/

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