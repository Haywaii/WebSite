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